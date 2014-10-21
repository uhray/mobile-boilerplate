require.config({
  paths : {
    crud:           'bower/crud/dist/crud',
    director:       'bower/director/build/director.min',
    debug:          'bower/debug/dist/debug',
    hammerjs:       'bower/hammerjs/hammer.min',
    ractive:        'bower/ractive/ractive',
    rv:             'bower/rv/rv',

    'ractive-tap':     'bower/ractive-events-tap/ractive-events-tap',
    'ractive-touch':   'bower/ractive-touch/index'
  },
  shim: {
    debug:       { exports: 'debug' },
    jquery:      { exports: '$' },
    director:    { exports: 'Router' }
  },
  packages : [
    { name: 'components', location: 'components' },
    { name: 'pages', location: 'pages' },
    { name: 'modules', location: 'modules' }
  ]
});

requirejs(['debug', 'router'], function(debug) {
  window.Debug = debug;  // global "Debug" because chrome overwrites "debug"
});

