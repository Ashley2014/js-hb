
var browser={
    device:device,
    isMobile:isMobile,
};

/*
 hb.browser
 */
function device(){
    var u = window.navigator.userAgent,app = $window.navigator.appVersion;
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

function isMobile(){
    var u = window.navigator.userAgent;
    //console.log(u);
    if(u.match(/Android|iPhone|iPad|iPod|IEMobile|BlackBerry/i)){
        return true;
    }
    else {
        return false;
    }
};



export default browser;

