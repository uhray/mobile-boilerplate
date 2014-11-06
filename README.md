Uhray Mobile Boilerplate
==================

This is a boilerplate for use with phonegap to make mobile projects.

### Gettings Starting

Try installing and launching:

```
npm install
```

The first time you use all the phonegap stuff, you'll need some global clis:

```
npm install -g phonegap
npm install -g ios-deploy
npm install -g ios-sim
```

Now you can launch the application:

```
gulp lint   # lints
gulp serve  # serves the www/ directory to be opened in browser
gulp launch # launches phonegap and ios simulator
gulp static # serves the static/ directory for static designing
```

### Editing

All web editing should be in the [www](www) directory. It starts with a single page html file that is [www/index.html](www/index.html). This file loads [www/router.js](www/router.js) which handles the rest of the routing.
