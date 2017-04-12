//require("./style.scss");
//var $$=require("../node_modules/jquery/dist/jquery.js");
//var url2=require("./url.js");
//import url2 from "./url.js";
//import url2 from "../bower_components/js-url/url";
//var XModule=require("exports?XModule!../bower_components/js-url/url.js");
//var XModule=require("imports?window=>{}!exports?window.url!../bower_components/js-url/url.js");
//var XModule=require("exports?window.url!../bower_components/js-url/url.js");
//var XModule=require("exports?window.url!../bower_components/js-url/url.js");


//var XModule=require("url");
//window.url=null;


//var aaa=require("imports?window=>{}!exports?window.url!../bower_components/js-url/url.js");
//var aa=`dsfe
//sdfe
//ef`;


//console.log(url)

var hb={};
hb.location={};
hb.lib={};
hb.color={};
//hb.agent=require("./hb.agent");
import agent from "./hb.agent";
//console.log(require("exports?agent!./hb.agent"))
hb.agent=agent;

import browser from "./hb.browser";
hb.browser=browser;

// var url=require("exports?url!./url");
var url=require("./url");
hb.location.url=url;
import myHash from "./hb.location.hash";
hb.location.hash=myHash;

//import * as weui from "./hb.lib.weui";
import weui from "./hb.lib.weui";
hb.lib.weui=weui;

import iui from "./hb.lib.iui";
hb.lib.iui=iui;

var Cookies=require("js-cookie");
Cookies.withConverter({
    write: function (value) {
        return encodeURIComponent(value);
    },
    read: function (value) {
        return decodeURIComponent(value);
    }
});

hb.Cookies=Cookies;
import color from "./hb.color";
hb.color=color;

import util from "./hb.util";
hb.util=util;

import hack from "./hb.hack";
hb.hack=hack;

import validation from "./hb.validation";
hb.validation=validation;



var store=require("store");
hb.store=store;
//storeWithExpiration
hb.storeWithExpiration = {
    set: function(key, val, options) {
        var options=options||{};
        var defaults={
            expires:1000,
        };
        var settings = $.extend( {}, defaults, options );
        var exp=settings.expires*24*60*60*1000;
        store.set(key, {
            val:val,
            exp:exp,
            time:new Date().getTime()
        })
    },
    get: function(key) {
        var info = store.get(key);
        if (!info) { return null }
        if (new Date().getTime() - info.time > info.exp) { return null }
        return info.val
    }
};

import interval from "./hb.interval";
hb.interval=interval;


window.hb=hb;


//console.log(hb);






