;(function(window) {

    var svgSprite = '<svg>' +
        ''+
        '<symbol id="icon-success" viewBox="0 0 1024 1024">'+
        ''+
        '<path d="M83.2 550.4l89.6-70.4L384 684.8c0 0 275.2-339.2 556.8-531.2l25.6 64c-134.4 96-384 390.4-512 684.8L83.2 550.4z"  ></path>'+
        ''+
        '</symbol>'+
        ''+
        '</svg>'
    var script = function() {
        var scripts = document.getElementsByTagName('script')
        return scripts[scripts.length - 1]
    }()
    var shouldInjectCss = script.getAttribute("data-injectcss")

    /**
     * document ready
     */
    var ready = function(fn){
        if(document.addEventListener){
            document.addEventListener("DOMContentLoaded",function myFun(){
                document.removeEventListener("DOMContentLoaded",myFun,false)
                fn()
            },false)
        }

    }

    /**
     * Insert el before target
     *
     * @param {Element} el
     * @param {Element} target
     */

    var before = function (el, target) {
        target.parentNode.insertBefore(el, target)
    }

    /**
     * Prepend el to target
     *
     * @param {Element} el
     * @param {Element} target
     */

    var prepend = function (el, target) {
        if (target.firstChild) {
            before(el, target.firstChild)
        } else {
            target.appendChild(el)
        }
    }

    function appendSvg(){
        var div,svg

        div = document.createElement('div')
        div.innerHTML = svgSprite
        svg = div.getElementsByTagName('svg')[0]
        if (svg) {
            svg.setAttribute('aria-hidden', 'true')
            svg.style.position = 'absolute'
            svg.style.width = 0
            svg.style.height = 0
            svg.style.overflow = 'hidden'
            prepend(svg,document.body)
        }
    }

    if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
        window.__iconfont__svg__cssinject__ = true
        try{
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
        }catch(e){
            console && console.log(e)
        }
    }

    ready(appendSvg)


})(window)
import styles from "./style.scss";
//confirm('aaa')


var iui=(function(){
    var _alert=function(options){
        var deferred = $.Deferred();
        var defaults = {
            title:'提示',
            content:'提示内容',
            btn:'确定',
        };

        if(typeof options=="string"){
            defaults = $.extend(defaults,{
                content:options
            });
        }else{

        }

        var settings = $.extend( {},defaults, options );

        var alertHtmlStr=`
    <div id="iui-pop-alert" class="${styles['mui-popup']} " >\
    <div class="${styles['mui-popup-inner']}">\
    <div class="${styles['mui-popup-title']}">${settings.title}</div>\
    <div class="${styles['mui-popup-text']}">${settings.content}</div></div>\
    <div class="${styles['mui-popup-buttons']}">\
    <span class="${styles['mui-popup-button']} ${styles['mui-popup-button-bold']}">${settings.btn}</span>\
    </div>\
    </div>\
    <div class=" ${styles['mui-popup-backdrop']} ${styles['mui-active']}" ></div>\
        `;
        var $alertHtml=$(alertHtmlStr);
        $("body").append($alertHtml);
        //setTimeout(function(){
            $("#iui-pop-alert").show(0).addClass(styles['mui-popup-in']);
        //});
        //$alertHtml.find(`.${styles['mui-popup-button']}`).fadeIn(200);
        var $confirmBt=$alertHtml.find(`.${styles['mui-popup-button']}`);
        $confirmBt.on('click',function(){
            $alertHtml.remove();
            deferred.resolve(true);
        });
        return deferred.promise();
    };

    var _confirm=function(options){
        var deferred = $.Deferred();
        var defaults = {
            title:'提示',
            content:'提示内容',
            rightBtn:'确定',
            leftBtn:'取消',
        };

        if(typeof options=="string"){
            defaults = $.extend(defaults,{
                content:options
            });
        }else{

        }

        var settings = $.extend( {},defaults, options );
        var confirmHtmlStr=`
    <div id="iui-pop-alert" class="${styles['mui-popup']} " >
    <div class="${styles['mui-popup-inner']}">
    <div class="${styles['mui-popup-title']}">${settings.title}</div>
    <div class="${styles['mui-popup-text']}">${settings.content}</div></div>
   <div class="${styles['mui-popup-buttons']}">
   <span id="iui-pop-confirm-left" class="${styles['mui-popup-button']}">${settings.leftBtn}</span><span id="iui-pop-confirm-right" class="${styles['mui-popup-button']} ${styles['mui-popup-button-bold']}">${settings.rightBtn}</span>
   </div>
    </div>
    <div class=" ${styles['mui-popup-backdrop']}  ${styles['mui-active']}" ></div>
                `;

        var $confirmHtml=$(confirmHtmlStr);
        $("body").append($confirmHtml);
        $("#iui-pop-alert").show(0).addClass(styles['mui-popup-in']);
        //$confirmHtml.find(".weui-dialog").fadeIn(200);
        var $confirmBt=$confirmHtml.find("#iui-pop-confirm-right");
        $confirmBt.on('click',function(){
            $confirmHtml.remove();
            deferred.resolve(true);
        });
        var $cancelBt=$confirmHtml.find("#iui-pop-confirm-left");
        $cancelBt.on('click',function(){
            $confirmHtml.remove();
            deferred.reject(false);
        });
        return deferred.promise();

    };



    var loading=(function(){
        var loadingHtmlStr=`<div  >
<div class="${styles['weui-mask_transparent']}"></div>
<div class="${styles['weui-toast']}">
    <i class="${styles['weui-loading']} ${styles['weui-icon_toast']}"></i>
    <p class="${styles['weui-toast__content']}">数据加载中</p>
</div>
</div>`;
        var $loadingHtml=$(loadingHtmlStr);
        var show=function(){
            $("body").append($loadingHtml);
        };
        var hide=function(){
            $loadingHtml.remove();
        };

        return{
            show:show,
            hide:hide
        }
    }());



    var toast=function(msg){
        var toastHtmlStr=`<div >
<div class="${styles['weui-mask_transparent']}"></div>
<div class="${styles['weui-toast']}">
    <svg class="${styles['icon']}" aria-hidden="true" style="font-size: 80px;">
      <use xlink:href="#icon-success"></use>
    </svg>
    <p class="${styles['weui-toast__content']}">${msg}</p>
</div>
</div>`;
        var $toastHtml=$(toastHtmlStr);
        $("body").append($toastHtml);
        var $weui_toast=$toastHtml.find(".weui-toast");
        $weui_toast.fadeIn(200);
        var hideToast=function(){
            $toastHtml.fadeOut(400).remove();
        };
        setTimeout(hideToast,600);
    };



    return{
        alert:_alert,
        confirm:_confirm,
        loading:loading,
        toast:toast,
    };
}());


function extend() {
    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge
    if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
        deep = arguments[0];
        i++;
    }

    // Merge the object into the extended object
    var merge = function (obj) {
        for ( var prop in obj ) {
            if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
                // If deep merge and property is an object, merge properties
                if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
                    extended[prop] = extend( true, extended[prop], obj[prop] );
                } else {
                    extended[prop] = obj[prop];
                }
            }
        }
    };

    // Loop through each object and conduct a merge
    for ( ; i < length; i++ ) {
        var obj = arguments[i];
        merge(obj);
    }
    return extended;
}


export default iui;


