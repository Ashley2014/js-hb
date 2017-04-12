var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: path.join(__dirname, '/src/app/entry.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: "bundle.js",
        publicPath: '/',
        chunkFilename: "[id].bundle-[chunkhash].js",
    },
    // watch: true,
    // devtool: "source-map",
    module: {
        rules: [
            // {
            //     test: /^.*staticCss.*\.css$/,
            //     use: [{
            //         loader:'file-loader',
            //         options: {
            //             name: 'app/css/[name]_[hash].[ext]',
            //             // name: '[path][name].[ext]?[hash]',
            //         }
            //     }],
            // },
            // {
            //     test: /^.*css.*\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallbackLoader: "style-loader",
            //         loader: "css-loader",
            //         // publicPath: "/dist",
            //     }),
            //
            // },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]

            },
            // {
            //     test: /^.*staticCss.*\.scss$/,
            //     use: [{
            //         loader:'file-loader',
            //         options: {
            //             name: 'app/css/[name]_[hash].css',
            //             // name: '[path][name].[ext]?[hash]',
            //         }},
            //
            //         'postcss-loader',
            //         "sass-loader"
            //     ],
            // },
            // {
            //     test: /^.*css.*\.scss$/,
            //     use: [
            //         "style-loader",
            //         "css-loader",
            //         'postcss-loader',
            //         "sass-loader"]
            // },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    'postcss-loader',
                    "sass-loader"]
            },
            { test: /\.jade$/, loader: "jade-html" },
            {
                test: /\.vue$/,
                use: [{
                    loader:'vue-loader',
                    options: {
                        // vue-loader options
                        // use: {
                        //     scss: ['style-loader','css-loader','postcss-loader','sass-loader']
                        // },
                        loaders: {
                            scss: 'style-loader!css-loader!postcss-loader!sass-loader'
                        }
                    },
                }],

                //options: {
                //    // vue-loader options go here
                //}
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader:'babel-loader',
                    options: {
                        "presets": [
                            ["env", {
                                "targets": {
                                    "browsers": ["> 0%"]
                                },
                                "modules": false,
                                "loose": true
                            }]
                        ]
                    }
                }],

            },
            //{
            //  test: /\.(png|jpg|jpeg|gif|woff)$/,
            //  loader: 'url-loader'
            //},
            {
                test: /\.(png|jpg|jpeg|gif|woff)$/,
                use: [{
                    loader:'file-loader',
                    options: {
                        name: 'app/images/[name]_[hash].[ext]',
                        // name: '[path][name].[ext]?[hash]',
                    }
                }],

            },
        ]
    },
    //postcss: function () {
    //    return {
    //        defaults: [ autoprefixer],
    //        cleaner:  [autoprefixer({ browsers: ["> 0%"] })]
    //    };
    //},
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery",
        "vue": "Vue",
        "lodash": "_",
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
