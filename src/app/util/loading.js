/*
 hb.util.loading
 require spin.js
 */


var target;

function initLoading() {
  var Spinner = require("spin.js");
  var loadingHtmlStr = require('./loading.html')


// var $loadingHtml = $(loadingHtmlStr);
  var div = document.createElement('div');
  div.innerHTML = loadingHtmlStr;
  target = div.childNodes[0];

// console.info(div,target,div.firstChild)
// console.info(target)

// var target = $loadingHtml.get()[0];
  new Spinner().spin(target);

}



var show = function () {
  //console.log('er',$loadingHtml,$("body"))
  // $("body").append($loadingHtml);
  // console.log(target)
  if(!target){
    initLoading()
  }
  document.body.appendChild(target);
  // appendHtml(document.body,loadingHtmlStr)
};


var hide = function () {
  // console.log(target)
  // $loadingHtml.remove();
  if (!target) {
    return
  }
  if (!target.parentNode) {
    return
  }
  target.parentNode.removeChild(target)
};


var loading = {
  show,
  hide,
};

export default loading
