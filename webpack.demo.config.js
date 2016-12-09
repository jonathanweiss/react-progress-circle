var path = require('path');
var config = require('./webpack.config.js');

var libMainFile = path.resolve(__dirname, 'lib', 'index');
var demoMainFile = path.resolve(__dirname, 'docs', 'index');

var demoPath = path.resolve(__dirname, 'docs');

config.entry = [libMainFile, demoMainFile];

config.output = {
    path: demoPath,
    filename: 'demo.js'
};

module.exports = config;
