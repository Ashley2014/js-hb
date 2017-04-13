/*
 hb.util.loading
 require spin.js
 */

import appendHtml from 'app/common/appendHtml'
var Spinner=require("spin.js");

var loadingHtmlStr=require('./loading.html')
var $loadingHtml=$(loadingHtmlStr);


var target = $loadingHtml.get()[0];
var spinner = new Spinner().spin(target);



var show=function(){
    //console.log('er',$loadingHtml,$("body"))
    $("body").append($loadingHtml);
    // appendHtml(document.body,loadingHtmlStr)
};


var hide=function(){
    $loadingHtml.remove();
};


var loading={
    show,
    hide,
};

export default loading
