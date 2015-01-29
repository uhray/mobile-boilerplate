require.config({
  config: {
    loader: {
      pages: {
        home:         'pages/home/main'
      },
      components: {
        toggle:       'ractive-plugins/components/toggle/main'
      },
      events: {
        tap:     'bower/ractive-events-tap/ractive-events-tap',
        touch:   'bower/ractive-touch/index'
      },
      modules: {
        tools:        'modules/tools'
      }
    }
  },
  paths: {
    crud:           'bower/crud/dist/crud',
    director:       'bower/director/build/director.min',
    debug:          'bower/debug/dist/debug',
    hammerjs:       'bower/hammerjs/hammer.min',
    loader:         'bower/requirejs-loader-plugin/loader',
    ractive:        'bower/ractive/ractive',
    rv:             'bower/rv/rv'
  },
  shim: {
    debug:       { exports: 'debug' },
    jquery:      { exports: '$' },
    director:    { exports: 'Router' },
    router:      ['loader!']
  }
});

requirejs(['debug', 'router'], function(debug) {
  window.Debug = debug;  // global "Debug" because chrome overwrites "debug"
});
