var Webpack = require('webpack');
var path = require('path');

var libMainFile = path.resolve(__dirname, 'lib', 'index');
var demoMainFile = path.resolve(__dirname, 'demo', 'index');
var demoPath = path.resolve(__dirname, 'demo');
var nodePath = path.resolve(__dirname, 'node_modules');

var config = {
    devtool: 'eval',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: [
        // The lib itself
        libMainFile,

        // the demo page:
        demoMainFile,

        'webpack-dev-server/client?http://127.0.0.1:5000',
        'webpack/hot/only-dev-server',
    ],
    output: {
        path: demoPath,
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: [nodePath]
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },

    stats: {
        colors: true,
    },
};

module.exports = config;
