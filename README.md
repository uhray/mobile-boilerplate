Uhray Mobile Boilerplate
==================

For a small set of senarios, we understand the decided advantages to producing a native mobile application. However, in general, we believe in the universal nature of web technologies, especially when software platforms like PhoneGap exist to port over many native capabilities for hybrid-app development. There is an inherent power to developing both web apps and mobile apps using the same set of web technologies (HTML, CSS, JavaScript, etc.). We believe that the slight advantages in speed and processing power of native applications will continue to diminish with time as computational power is continually commoditized. For these reasons, we developed the Uhray Mobile Boilerplate, a codebase that helps developers create hybrid mobile applications through PhoneGap(http://phonegap.com/). This Mobile Boilerplate was inspired by and constains many of the save advantages of our own [Uhray Boilerplate](https://github.com/uhray/boilerplate) for creating dynamic web applications. 

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
