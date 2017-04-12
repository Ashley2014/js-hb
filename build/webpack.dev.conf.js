var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');

var baseWebpackConfig = require('./webpack.base.conf');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
// add hot-reload related code to entry chunks

// Object.keys(baseWebpackConfig.entry).forEach(function (name) {
//     baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
// });

module.exports = merge(baseWebpackConfig, {

    devtool: '#cheap-module-eval-source-map',
    // devtool: '#eval-source-map',
    // devtool: '#source-map',
    plugins: [
        new webpack.DefinePlugin({
            NAME: 'js-hb',
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin(),
    ],
});
