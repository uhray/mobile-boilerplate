#!/usr/bin/env node

var fs = require('fs'),
    plugins = process.env.CORDOVA_PLUGINS.split(','),
    saved = require('../../phonegap-plugins.json');

plugins.forEach(function(p) {
  if (!~saved.indexOf(p)) saved.push(p);
});

fs.writeFileSync(__dirname + '/../../phonegap-plugins.json',
                 JSON.stringify(saved, undefined, 2) + '\n');
