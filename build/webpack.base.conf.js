var path = require('path');

console.log(process.env.NODE_ENV=='development')
module.exports = {
    entry: {
        app: './src/app/entry.js', // 入口文件
    },
    output: {
        path: path.join(__dirname, '../', 'src'), // 资源路径
        filename: '[name].js', // 输出文件名
    },
    externals: {
    },
    resolve: {
        extensions: [".vue", ".js", ".json", ".jsx", ".css", ".scss"], // 可引入的 文件拓展名
        // fallback: [path.join(__dirname, '../node_modules')], // 依赖库 路径
        // [文件, 路径] 的简称
        alias: {
            'src': path.join(__dirname, '../', 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                "test": /\.scss$/,
                "use": [
                    "style-loader",
                    {
                        "loader": "css-loader",
                        "options": {
                            "minimize": true,
                            "sourceMap": process.env.NODE_ENV=='development'?true:false,
                            "modules":{
                                importLoaders:1,
                                localIdentName:"[local]___[hash:base64:5]",
                            }
                        }
                    },
                    {
                        "loader": "postcss-loader"
                    },
                    {
                        "loader": "sass-loader",
                        "options": {
                            "sourceMap": process.env.NODE_ENV=='development'?true:false
                        }
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            ["env", {
                                "modules": false,
                                "loose": true
                            }]
                        ]
                    }
                }],
            },
            {
                test: /\.(png|jpg|jpeg|webp|gif)$/,
                use: [{
                    // loader: 'file-loader',
                    loader: 'url-loader', //
                    options: {
                        limit: 10000, // 文件大小判断, 与 url-loader 的属性
                        name: 'app/images/[name]_[hash].[ext]',
                        // name: '[path][name].[ext]?[hash]',
                    }
                }],
            },
        ]
    },
};
