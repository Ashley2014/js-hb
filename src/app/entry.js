
import agent from "app/agent/hb.agent";
import browser from "app/browser/hb.browser";
// import url from "app/url/url";
import color from "./color/hb.color";
import hash from "app/hash/hb.location.hash";
import weui from "app/weui/hb.lib.weui";
import iui from "app/iui/hb.lib.iui";
import util from "app/util/hb.util";
import hack from "app/hack/hb.hack";
import validation from "app/validation/hb.validation";
import interval from "app/interval/hb.interval";


var url = require('wurl');
var Cookies=require("js-cookie");
var store=require("store");
var Spinner=require("spin.js");

Cookies.withConverter({
    write: function (value) {
        return encodeURIComponent(value);
    },
    read: function (value) {
        return decodeURIComponent(value);
    }
});

//storeWithExpiration
var storeWithExpiration = {
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



var hb={
    agent,
    browser,
    Cookies,
    Spinner,
    color,
    util,
    hack,
    validation,
    store,
    storeWithExpiration,
    interval,
    location:{
        url,
        hash,
    },
    lib:{
        weui,
        iui,
    }
};


window.hb=hb;