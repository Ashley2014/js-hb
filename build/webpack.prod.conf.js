var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');

var baseWebpackConfig = require('./webpack.base.conf');


var HtmlWebpackPlugin = require('html-webpack-plugin');


var webpackConfig = merge(baseWebpackConfig, {
    // 模块
    module: {

    },
    // 浏览器调试
    devtool: false,
    // 输出
    output: {
        // 资源路径
        path: path.join(__dirname, '../', 'dist'),
        filename: "hb.min.js"
    },
    plugins: [
        // 压缩 js 文件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            },
            sourceMap: false,
        }),
        new webpack.BannerPlugin({
            banner: `"js-cookie": "^2.1.4"\n"store": "^2.0.4"\n"spin.js": "^2.3.2"\n"js-url"："^2.4.1"`,
            raw: false,
            entryOnly: true
        }),
        // 插入 资源文件(含hash的名字) 到 index.html 
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: true, // 注入的位置 </body> 之前
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            // 依赖注入
            chunksSortMode: 'dependency'
        }),

    ]
});

module.exports = webpackConfig;
