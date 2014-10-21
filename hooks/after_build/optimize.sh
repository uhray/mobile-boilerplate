#!/bin/bash

echo Using r.js to optimize

./node_modules/.bin/r.js -o optimize.js \
    mainConfigFile=$PWD/platforms/$CORDOVA_PLATFORMS/www/configure.js \
    baseURL=$PWD/platforms/$CORDOVA_PLATFORMS/www \
    out=$PWD/platforms/$CORDOVA_PLATFORMS/www/bower/requirejs/require.js
