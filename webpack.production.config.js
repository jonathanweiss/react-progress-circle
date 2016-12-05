var path = require('path');
var config = require('./webpack.config.js');

var libMainFile = path.resolve(__dirname, 'lib', 'index');
var buildPath = path.resolve(__dirname, 'dist');

config.entry = [libMainFile];

config.output = {
    path: buildPath,
    filename: 'all.min.js',
    libraryTarget: 'umd'
};

module.exports = config;
