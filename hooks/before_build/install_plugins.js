#!/usr/bin/env node

var pluginlist = require('../../phonegap-plugins.json'),
    fs = require('fs'),
    path = require('path'),
    sys = require('sys'),
    exec = require('child_process').exec;

function puts(error, stdout, stderr) {
  sys.puts(stdout)
}

pluginlist.forEach(function(plug) {
  exec('phonegap plugin add ' + plug, puts);
});
