Uhray Mobile Boilerplate
==================

In certain situations (heavy graphics/rendering), we understand the potential advantages of developing native mobile applications. However, in general, we believe in the universal nature of web technologies, especially when software platforms like PhoneGap exist to port over native capabilities for hybrid-app development. There is an inherent power to developing both web apps and mobile apps using the same core set of web technologies (HTML, CSS, JavaScript, etc.). We believe that the slight advantages in speed and processing power of native applications will continue to diminish with time as computational power is continually commoditized. For these reasons, we developed the Uhray Mobile Boilerplate, a codebase that helps developers create hybrid mobile applications through [PhoneGap](http://phonegap.com/). This Mobile Boilerplate was inspired by and constains many of the save advantages of our own [Uhray Boilerplate](https://github.com/uhray/boilerplate) for creating dynamic web applications. 

## Quick Start

Dependencies:
* [node](http://nodejs.org/)
* [npm](https://www.npmjs.org/) (now comes with node)
* [bower](http://bower.io/)
* [gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md#getting-started)

```bash
# Install the Uhray Mobile Boilerplate
git clone https://github.com/uhray/mobile-boilerplate.git
cd mobile-boilerplate
npm install

# Install the following CLIs for integrating with PhoneGap
npm install -g phonegap
npm install -g ios-deploy
npm install -g ios-sim

# Launch the mobile application
gulp serve     # serves www directory (mobile app) for opening in browser
gulp launch    # launches mobile applicaiton via phonegap and iOS simulator
gulp static    # serves static directory (static app pages) for opening in browser
```

## Documentation

Take a look at the [Uhray Mobile Boilerplate Docs](https://github.com/uhray/mobile-boilerplate). This documentation is bundled with the project, which makes it readily available for offline viewing and provides a useful starting point for any documentation you want to write about your mobile application.

## Mobile Browser Compatibility

This mobile boilerplate should be compatible with all evergreen browsers.

