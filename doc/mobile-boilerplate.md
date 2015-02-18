# UHRAY MOBILE BOILERPLATE DOCS



**Intro**
* [Quick Start](#quick-start)
* [Codebase Organization](#codebase-organization)

**Backend Docs**
* [Shells](#shells)


**Frontend Docs**
* [Static Development](#static-development)
* [Configuring](#configuring)
* [Pages](#pages)
* [Routing](#routing)
* [Styles](#styles)
* [Images](#images)
* [Ractive-Plugins](#ractive-plugins)
* [Modules](#modules)

**Other Docs**
* [Package Management](#package-management)
* [Linting](#linting)
* [Build Options](#build-options)

<br>
# INTRO


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

# Launch the mobile application in 1 of 3 ways
gulp serve     # serves www directory (mobile app) for opening in browser
gulp launch    # launches mobile application via phonegap and iOS simulator
gulp static    # serves static directory (static app pages) for opening in browser
```

## Codebase Organization

The Uhray Mobile Boilerplate [root directory](https://github.com/uhray/mobile-boilerplate) contains many files and directories related to PhoneGap, general configurations, build commands, etc. We'll get into many of these specifics later. Generally speaking, it contains most of the same pieces as the [Uhray Web Boilerplate](https://github.com/uhray/boilerplate/blob/master/doc/boilerplate.md) with a few differences due to the unique environment of mobile applications.

#### Backend Organization

External API 

Unlike the [Uhray Web Boilerplate](https://github.com/uhray/boilerplate/blob/master/doc/boilerplate.md),  there is no API as part of a mobile project itself. When an app is installed on a mobile device, the code is placed directly on that device. It would be unsafe to have database credentials and API information stored directly on a phone. With the right tools, it would be relatively straightforward to compromise an application's database. For this reason, we recommend using [Uhray's Web Boilerplate](https://github.com/uhray/boilerplate/blob/master/doc/boilerplate.md) for setting up an API on a separate server that your mobile application can connect to by using [crud](https://github.com/uhray/crud#frontend) on the frontend.

Shells

If you do not know what shells are, see the [Uhray Web Boilerplate](https://github.com/uhray/boilerplate/blob/master/doc/boilerplate.md#shells) as a reference. Right now, the Uhray Mobile Boilerplate supports a single shell, [index.html](../www/index.html). This is the first file to get rendered and loaded up before the frontend code controls the rest of the routing, views, etc. See [Shells](#shells) for more information.

```
www/
	index.html
```

#### Frontend Organization

The real meat of the Uhray Mobile Boilerplate takes place in the top-level [www/](../www) directory. From the shell, [configure.js](../www/configure.js) is loaded via [require.js](http://requirejs.org/) which then calls the [router.js](https://github.com/uhray/boilerplate/blob/master/app/frontend/router.js) file. The *router.js* file handles which application page should be loaded based on the URL. Each page can utilize components, images, modules or styles. More on this later.

```
www/
	components/
	images/
	modules/
	pages/
	styles/
	config.xml
	index.html
	configure.js
	router.js
```

The frontend is intentionally designed to be page-centric, meaning that code is organized and structured around each page in the web application. Inside the [pages directory](../www/pages), each page is defined as a directory itself containing 2 files (see *home* above):

 1. Ractive Template
 2. Ractive JavaScript File

For more information, check out the [pages documentation](#pages).

#### PhoneGap

The Uhray Mobile Boilerplate is setup to work with PhoneGap, the open source framework that allows you to create mobile application with native phone capabilities using standardized web APIs. Click [here](http://phonegap.com/developer/) for PhoneGap's developer documentation. 

The file structure below illustrates which parts on the Uhray Boilerplate are related to the PhoneGap framework.

```
.cordova/
	config.json
hooks/
res/
phonegap-plugins.json
www/
	config.xml
```

* The [.cordova](../.cordova) directory just contains a configuration file for [Cordova](http://cordova.apache.org/), the engine that powers PhoneGap.
* The [hooks](../hooks) directory contains scripts for customizing Cordova/PhoneGap commands. The Uhray Mobile Boilerplate, by default, has a *before_build* hook [script](../hooks/before_build/install_plugins.js) that will install the PhoneGap plugins listed in the [phonegap-plugins.json](../phonegap-plugins.json) file in the root directory. Click [here](../hooks/README.md) for more information on Hooks.  
* The [res](../res) directory simply contains various Cordova/PhoneGap icons for a variety of mobile platforms. 
* Lastly, the [config.xml](../www/config.xml) defines all of your application's PhoneGap configurations. 

<br>
# BACKEND DOCS

## Shells

#### Basics

A shell is simply a skeleton of static HTML & CSS that is sent to the client-side and immediately displayed before the frontend takes care of loading the remainder of the elements and data into the main body of the page. 

The advantage to using shells is that you can update data on the frontend as a user navigates between pages without re-requesting the shell content from the application server or re-rendering the entire view. This creates a smoother user experience without the constant feel of page refreshes. It can also significantly lighten the load on your application server since parts of your HTML template and stylesheets don't need to be repeatedly served. The application server will just respond to API requests after a shell is sent to the frontend.

#### Setup

By default, the Uhray Boilerplace comes with one shell ([index.html](../www/index.html)) that sets up some basic meta tags, links 3 stylesheets, provides a container for the frontend content to be embedded, and loads the frontend JavaScript code:

```
    <script type="text/javascript" src="cordova.js"></script>
    <script type="text/javascript"
            src="bower/requirejs/require.js",
            data-main="configure.js"></script>
```

The first script *cordova.js* will be a file that is constructed during the PhoneGap build process. The second script is for [require.js](http://requirejs.org/) which loads up [configure.js](../www/configure.js).
 

<br><br>
# FRONTEND DOCS

## Static Development

#### Basics
When developing mobile applications, we find it easiest to implement static front-end pages with hard-coded data to establish the look and feel of the mobile app's pages without worrying about any backend development. The Uhray Boilerplate provides an easy way to code and host these frontend pages during static development. If this approach does not fit your workflow, feel free to disregard this entire section -- it's exclusively for convenience.

#### Static Page Organization

In the root directory of the Uhray Mobile Boilerplate, there is a [static](../static) directory.

```bash
static/
	_layout.html
	index.js
	home.html
```

The *_layout.html* file is an HTML skeleton that has some basic meta tag information and several CSS links. By default, every other HTML page in the static directory, like *home.html*, will extend the *_layout.html* file. 

#### Static Page Styling (CSS/SCSS)

By default, the _layout.html has 3 CSS links. 

 1. Normalize.css (common fixes for consistent browser compatibility)
 2. HTML5 Boilerplate's main.css (cross-browser styling)
 3. Uhray Mobile Boilerplate's main.css (starting place for your styling rules)

You can extend the base CSS by adding CSS/SCSS rules to the [main.scss](../www/styles/main.scss) file in the www styles directory. 

>Note: The difference in file extensions (*.css from _layout.html* vs *.scss from frontend styles directory*) will be resolved during the application's build process. By default, all SCSS files are converted to CSS files with the same base filename. These converted CSS files will be placed within a /css directory within the /styles directory. See [Build Options](#build-options) for additional information.

The best part about doing static development this way is that when you're ready to build an interactive application, your templates and styling are pretty much complete.

#### Viewing Static Pages

In the [static](../static) directory, there is an [index.js](../static/index.js) file. This is basically the same thing as the static.js static server file from the [Uhray Web Boilerplate](https://github.com/uhray/boilerplate/blob/master/doc/boilerplate.md#viewing-static-pages). It's setup to display a list of all your static pages. You can launch the static server by running the following command from the Uhray Web Boilerplate root directory:

``` gulp static```

Once started, the server should log something like:

```21:48:47 static.1 | App listening on port 5200```

Open your browser to the localhost on the specified port (i.e. ```localhost:5200```). You'll be able to see updates to any newly saved static file code simply by refreshing your browser.

## Configuring

Configuration is located in [www/configure.js](../www/configure.js).

The frontend is configured via [requirejs](http://requirejs.org/) and is set up nicely to use the [requirejs-loader-plugin](https://github.com/uhray/requirejs-loader-plugin). If there are any questions on how to add new modules, consult either of those two links. Requirejs is very powerful and consequently very complicated, but the loader plugin is supposed to help ease some things.

Also, because of the line in the configure.js file that sets the shim: `router:   ['loader!']`, all things configured with the [requirejs-loader-plugin](https://github.com/uhray/requirejs-loader-plugin) are loaded up before anything starts. This is important for things like extending Ractive.

## Pages

Each page of the web application is defined in the [pages](../www/pages) directory as a directory of 2 files:

1. Ractive Template
2. Ractive JavaScript File

The page that is loaded and displayed to the user depends on the URL. See [Routing](#routing) for additional information.

#### Ractive Template

The Ractive template is simply a snippet of HTML that will be embedded into the shell on the frontend to display the application's page to the user. Ractive templates allow some cool stuff like Mustaches to facilitate data binding, proxy event directives for event-binding, and element transitions. Click [here](http://docs.ractivejs.org/latest/templates) for more information.

#### Ractive JavaScript File

There are three primary components to this Ractive JavaScript file.

 1. Defining the Ractive Template.
 2. Defining the HTML element from the shell where the template should be embedded.
 3. Defining the data to bind to the template.

Additionally, you can also define [computed properties](http://docs.ractivejs.org/latest/computed-properties) and [components](http://docs.ractivejs.org/latest/components) to be used within the page. You can also set up [events](http://docs.ractivejs.org/latest/events-overview) or [observers](http://docs.ractivejs.org/latest/observers) in this file. There are many other things you can do by checking out the [Ractive Documentation](http://docs.ractivejs.org/latest/get-started).

#### Creating a New Page

To create a new page, you need to do several things:

 1. Create a new directory in the [pages](../www/pages) directory.
 2. In this directory, create an Ractive Template (example: [template.html](../www/pages/home/template.html)).
 3. In this directory, create an Ractive JavaScript file (example: [*main.js*](../www/pages/home/main.js)).
 4. Update your [frontend routes](#routing) to define which URLs should load the new page.

#### Integrating MongoDB Data

When defining the data for your pages in the Ractive JavaScript file, you'll likely want to include real data from a MongoDB instance. As mentioned above, it's not safe to include the API itself in a mobile project, so you'll need to have an externally hosted API and database instance. See the [Uhray Web Boilerplate](https://github.com/uhray/boilerplate/blob/master/doc/boilerplate.md) for more info. We built a module called *crud* which has some frontend capabilities that allow you to easily interact with and retrieve data from your externally hosted REST API. Check out the [frontend crud documentation](https://github.com/uhray/crud#frontend) for more info.


## Routing

The shell ([index.html](../www/index.html)) calls [configure.js](../www/configure.js) to set up frontend dependences for [require.js](http://requirejs.org/). This then calls [router.js](../www/router.js) which determines what frontend page should be loaded into the shell based on the URL. These routes are setup using [director](https://github.com/flatiron/director). 

Below is a barebones example of the *router.js* file.
```
define(
['director', 'pages/home/main'],
function(Director, p$home) {
  var routes = {
        '/': p$home
      },
      router = new Director(routes);

  router.init('/');
});
```

By default, this *router.js* file only has one route set up. It shows that given the ```'/'``` route, the home page *p$home* should be loaded. As you can see in the require.js syntax at the top of this file, *p$home* is actually the Ractive javascript file *main.js* inside the *pages/home* directory. As you know from the [Pages](#Pages) documentation, loading a page's Ractive file will load up and render that page's *template.html* file with the appropriate data within the shell. 

## Styles

The [styles](../www/styles) directory is meant to house all of your application's custom styling rules. In addition to regular CSS files, the Uhray Mobile Boilerplate allows you to put SCSS files in this directory. SCSS allows you to do [really cool things](http://sass-lang.com/guide) like use variables in CSS. By default, the [*main.scss*](../www/styles/main.scss) file is linked to all of your frontend pages and static templates, so you can simply extend this file with new CSS or SCSS styling rules. 

>Note: During the build process, all SCSS files are converted to CSS files with the same base filename. Also, all CSS files are run through [autoprefixer](https://github.com/postcss/autoprefixer) which automatically adds in any missing vender prefixes (-webit, -moz, -ms). These converted CSS files will be placed within a /css directory within the /styles directory. See [Build Options](#build-options) for additional information.

#### Adding a New Stylesheet

If you wish to create a new stylesheet for modularity or any other reason, simply add a new CSS or SCSS file in the frontend styles directory. 

```
styles/
	main.scss
	new_stylesheet.scss
```	

Next, you'll have to add a corresponding link tag to the base [_layout.html](../static/_layout.html) file for static development or the [backend shell](../www/index.html) for regular application development.

```
<link rel="stylesheet" href="/public/styles/css/new_stylesheet.css">
```

#### Editing CSS/SCSS Directly from Chrome DevTools

If you're like us, you love using Chrome DevTools to inspect HTML elements and easily change the styling of different elements in Chrome with immediate visual feedback. Uhray Boilerplate supports sourcemaps with its stylesheets allowing you to edit style rules directly in Chrome. This saves A LOT of time by preventing you from repeatedly switching between your stylesheets and Chrome DevTools throughout your design/development workflow.

Here's an introduction to source maps and a tutorial for setting everything up with Chrome: http://www.sitepoint.com/using-source-maps-debug-sass-chrome/

## Images

The [images](../www/images) directory is where you can put all of the images used within your application. By default, we've included a favicon (*favicon.ico*) and the a hamburger icon (*hamburger.svg*) which is frequently used for mobile menus.

>Note: All images in this directory will be publicly hosted with your application.

## Ractive-plugins

The [ractive-plugins](../www/ractive-plugins) directory is broken down into the different types of plugins. Pay attention to the information in each type of plugin's README.md and follow the [ractive documentation](http://docs.ractivejs.org/latest/plugins) on plugins.

## Modules

The frontend [modules](../www/modules) directory is simply a place to put reusable JavaScript code. The use cases are virtually endless, but here's a simple example.

See the Uhray Web Boilerplate Docs to understand via [example](https://github.com/uhray/boilerplate/blob/master/doc/boilerplate.md#components) how to effectively use modules in your frontend application code. 

<br>
# OTHER DOCS

## Package Management

#### Backend Package Management

Uhray Mobile Boilerplate uses [npm](https://www.npmjs.org/) as a backend package manager. As of now, npm comes bundled with [node](http://nodejs.org/). To add an npm package to your application, all you need to do is add it to the [package.json](https://github.com/uhray/boilerplate/blob/master/package.json) file in the root Uhray Boilerplate directory. You can do this 1 of 2 ways:

 1. Manually edit *package.json* and re-build your application server.
 2. Run ```npm install <package-name> [--save|--save-dev]``` from the command line and re-build your application.

>Note: The npm packages under *devDependencies* in the *package.json* file will only be installed when the dev server is run. Therefore, these packages will not be installed or available in production. See [Build Options](#build-options) for more information.

#### Frontend Package Management

Uhray Boilerplate uses [bower](http://bower.io/) as a frontend package manager. To add a bower package to your application, all you need to do is add it to the [*bower.json*](https://github.com/uhray/boilerplate/blob/master/bower.json) file. You can do this 1 of 2 ways:

 1. Manually edit *bower.json* and re-build your application.
 2. Run ```bower install <package-name> [--save|--save-dev]``` from the command line and re-build your application.

>Note: If you wish to include a GitHub module in your application, but it's not on bower, you can still include it by providing the Github HTTPS URL (with https:// replaced with git://) for the desired GitHub repository in the bower.json file as shown [here](../bower.json#L10).

#### Require.js

We use *require.js* as a file and module loader on the frontend. The frontend's [configure.js](../www/configure.js) file is the main configuration file for *require.js*.


## Linting

The Uhray Boilerplate comes with [jscs](https://www.npmjs.org/package/jscs), a JavaScript linter that will check all of your javascript files for potential errors. You can run the linter from the root Boilerplate directory by running:

```gulp lint```

You can configure specific options for the linter in the [*.jscs.json*](../.jscs.json) file in the root Boilerplate directory. A list of available options are [here](https://github.com/jscs-dev/node-jscs#options).

## Build Options

Uhray Boilerplate uses [gulp](http://gulpjs.com/) as a build system and comes with several pre-configured build types. You can create, modify, or delete any of these build types from the [gulpfile.js](https://github.com/uhray/boilerplate/blob/master/gulpfile.js) file. You can run any of the following build commands from the root Uhray Boilerplate directory.

#### Default

Command: ```gulp```. This default build command will simply display the available build types.

#### Install

Command: ```gulp install```. This install build does 3 things:

 1. Installs npm packages from *package.json*.
 2. Cleans out bower cache.
 3. Installs bower packages from *bower.json*.


#### Static

Command: ```gulp static```. This static build is for starting the static server when developing static application pages as documented in [Static Development](#static-development). It does 4 things:

 1. Performs a gulp install.
 2. Converts all SCSS files to CSS files & runs [autoprefixer](http://css-tricks.com/autoprefixer/).
 3. Starts the static server (*static.js*), hosting all static pages.
 4. Watches for changes to any SCSS files and auto-converts to CSS on the fly.

#### Serve

Command: ```gulp serve```. This serve build is for serving the mobile  application via an http-server so it can be opened in the browser. It does 4 things:

 1. Performs a gulp install.
 2. Converts all SCSS files to CSS files & runs [autoprefixer].
 3. Starts an http-server, hosting the mobile app.
 4. Watches for changes to any SCSS files and auto-converts to CSS on the fly.

#### Launch

Command: ```gulp launch```. This launch build is for launching the mobile application in a mobile simulator such as iOS simulator or on an actual mobile device, if connected with a valid developer license. It does 4 things:

 1. Performs a gulp install.
 2. Converts all SCSS files to CSS files & runs [autoprefixer].
 3. Runs the PhoneGap build process.
 4. [After-Build Hook](https://github.com/uhray/mobile-boilerplate/blob/1abc6fd609710c2e856af2ba97ef05b27ba96fa2/hooks/after_build/optimize.sh) which minifies all JavaScript code that will be put on mobile simulator/device according to these [settings](../optimize.js).

>Note: The PhoneGap build process will create a new *platforms/* directory in the root Mobile Boilerplate directory which contains all of the mobile files required for viewing your mobile application in a simulator or on a physical device.

#### Lint

Command: ```gulp lint```. This lint build is for linting the application's codebase for possible errors. Right now, this only runs the JavaScript linter [jscs](https://www.npmjs.org/package/jscs). See [Linting Docs](#linting) for more information.
