var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
module.exports = {
    entry: __dirname+"/entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    watch: true,
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]","postcss?sourceMap","sass?sourceMap"]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        alias: {
            // require('tinymce') will do require('tinymce/tinymce')
            //url: '../bower_components/js-url/url.js',
        },
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery",
    },
    postcss: function () {
        return {
            defaults: [ autoprefixer],
            cleaner:  [autoprefixer({ browsers: ["> 0%"] })]
        };
    },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin({
        //    compress: {
        //        warnings: false,
        //    },
        //    output: {
        //        comments: false,
        //    },
        //}),
        new webpack.ProvidePlugin({
            //$: "jquery",
            //url33: "url",
            //jQuery: "jquery",
            //"window.jQuery": "jquery"
        })
    ]
};