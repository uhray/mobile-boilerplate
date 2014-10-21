define(
[
'director',
'pages/home/main',
'debug',
'crud',
'ractive-tap',
'ractive-touch'
],
function(Director, p$home, debug, crud) {
  var debug = debug('router'),
      routes = {
        '/': p$home
      },
      router = new Director(routes);

  // configure crud
  crud.configure({
    base: '127.0.0.1:5000/',
    protocol: 'http://',
    credentials: true
  });

  // configure router
  router.configure({
    before: clear
  });

  // launch router
  router.init('/');

  // clear on new route
  function clear() {
    debug('clearing for new page');
    var b = document && document.getElementById &&
            document.getElementById('body');
    if (b && 'innerHTML' in b) b.innerHTML = '';
  }
});
