var webpack = require("webpack");
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: __dirname+"/entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    //watch: true,
    //devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]",'postcss',"sass"]
            },
            { test: /\.jade$/, loader: "jade-html" },
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
    postcss: function () {
        return {
            defaults: [ autoprefixer],
            cleaner:  [autoprefixer({ browsers: ["> 0%"] })]
        };
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery",
        //"hb": "hb",
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
};