
var express = require('express'),
    mustache =  require('mustache-express')(),
    fs = require('fs'),
    util = require('util'),
    dir = __dirname,
    app = express(),
    port = process.env.PORT || 5200;

// ============================== CONFIGURE APP ============================= //

// configure express app
app.set('host', '127.0.0.1');
app.engine('html', mustache);
app.set('view engine', 'html');
app.set('views', dir);
app.set('layout', '_layout');
mustache.cache._max = 0;  // turn off mustache caching

// toplevel middleware
app.use(require('morgan')('dev'));
app.use('/public', require('serve-static')(__dirname + '/../www'));
app.use(require('cookie-session')({ secret: '__SECRET__' }));

// start app
app.listen(port, function() {
  console.log('App listening on port %s', port);

  // Configure routes for shells
  app.get('/', function(req, res, next) {
    var files = fs.readdirSync(dir)
                  .filter(function(d) {
                    return d[0] != '_' && !d.match(/\.js$/);
                  }).map(function(d) { return d.replace(/\.mustache$/, '') }),
        _ = ['<body><h1>static pages:</h1><ul>',
             files.map(function(d) {
               return util.format('<li><a href="/%s">%s</a></li>', d, d)
             }).join('\n'),
             '</body></ul>'];
    res.send(_.join('\n'));
  });

  app.get('/:page', function(req, res, next) {
    res.render(req.params.page);
  });

  // Error handlers
  app.use(require('errorhandler')());
});

// ================================= TOOLS ================================== //

function configureMethod(app, method) {
  var m = app[method];

  app[method] = function(path) {
    if (arguments.length < 2) return m.apply(this, arguments);
    console.log('%s route:', method, path);
    return m.apply(this, arguments);
  }
}
