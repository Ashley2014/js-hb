
/*
 *
 * ios动态修改标题
 */
var hack;

function setTitle(t) {
    document.title = t;
    var i = document.createElement('iframe');
    i.src = '//m.baidu.com/favicon.ico';
//        i.src = 'about:blank';
    i.style.display = 'none';
    document.body.appendChild(i);
    i.onload = function() {
        setTimeout(function(){
//                i.contentWindow.location.reload()
            i.remove();
        }, 0)
    }
}



hack={
    setTitle:setTitle,
};

export default hack;

