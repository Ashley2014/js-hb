/*
 hb.agent

 */

var agent={};

var device = function(){
    var u = window.navigator.userAgent,app = window.navigator.appVersion;
    switch (true){
        case (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1):
            return "android";
            break;
        case (u.indexOf('iPhone') > -1):
            return "iPhone";
            break;
        case (u.indexOf('iPad') > -1):
            return "iPad";
            break;
        default:
            return "unknown-device";
    }
};
var isMobile = function(){
    var u = window.navigator.userAgent;
    //console.log(u);
    if(u.match(/Android|iPhone|iPad|iPod|IEMobile|BlackBerry/i)){
        return true;
    }
    else {
        return false;
    }
};
var os = function(){
    var u = window.navigator.userAgent;

    switch (true){
        case (!!u.match(/Android/i)):
            return "android";
            break;
        case (!!u.match(/iPhone|iPad|iPod/i)):
            return "ios";
            break;
        default:
            return "unknown-os";
    }
};

var browser = function(){
    var u = window.navigator.userAgent, app = window.navigator.appVersion;
    switch (true){
        case (u.indexOf('MicroMessenger') > -1) :
            return "weixin";
            break;
        default:
            return "unknown-browser";
    }
};

agent.device=device;
agent.isMobile=isMobile;
agent.browser=browser;
agent.os=os;


export default agent;
//module.exports= agent;