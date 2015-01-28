define(
[
'director',
'loader!pages',
'debug',
'crud'
],
function(Director, pages, debug, crud) {
  var debug = debug('router'),
      routes = {
        '/': pages.home
      },
      router = new Director(routes);

  // configure crud
  crud.configure({
    base: '127.0.0.1:5000/',
    protocol: 'http://',
    credentials: true
  });

  // launch router
  router.init('/');
});
