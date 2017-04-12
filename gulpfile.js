'use strict';

var gulp = require('gulp');
var gulpConfig = require('./gulp.config');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var sourcemaps = require('gulp-sourcemaps');
const exec = require('child_process').exec;
var webpack = require("webpack");
var path = require("path");

var devip = require('dev-ip');
var appConfig = {
    port:gulpConfig.port,
    isAutoprefixer:false,           //是否在开发环境加前缀，一般用于低版本安卓调试，开启会打乱map
};

appConfig.getTestUrl=()=>`http://${devip()[0]}:${appConfig.port}/`;



gulp.task('default', function() {
    gulp.src(__filename)
        .pipe(plugins.open({uri: appConfig.getTestUrl()}));
    gulp.start('webpack');
});
gulp.task('dev', function() {
    gulp.start('watch:dev');
});

gulp.task("watch:dev", ['devServer'], function(){
    gulp.src(__filename)
        .pipe(plugins.open({uri: appConfig.getTestUrl()}));
    gulp.start('webpack:dev');
});


gulp.task("webpack:dev", function(callback) {
    var webpackConfig=require('./webpack.config.dev.js');
    return webpack( webpackConfig, function(err, stats) {
        if(err) throw new plugins.util.PluginError("webpack", err);
        plugins.util.log("[webpack]", stats.toString({
            // output options
        }));
        //gutil.log("[webpack]", "Gonna sit around and watch for file changes. CTRL^C to kill me");
        // callback();
    });
});


gulp.task("webpack",['devServer'], function(callback) {
    var webpackConfig=require('./webpack.config.js');
    return webpack( webpackConfig, function(err, stats) {
        if(err) throw new plugins.util.PluginError("webpack", err);
        plugins.util.log("[webpack]", stats.toString({
            // output options
        }));
        //gutil.log("[webpack]", "Gonna sit around and watch for file changes. CTRL^C to kill me");
        callback();
    });
});


gulp.task("devServer", function(callback) {
    exec('node devServer/server.dev.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
    callback();

});

