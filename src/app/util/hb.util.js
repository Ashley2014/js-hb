/*
 *
 * util
 */
import loading from './loading'

var util={
    loading,
};

/*
 *
 * 反序列化数据
 * a=1&b=2  =》 {a:1,b:2}
 *
 *
 */
(function(window,document,undefined) {
    "use strict";
    var QueryStringToHash = function QueryStringToHash (query) {
        if(!query){
            return {};
        }
        var query_string = {};
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            pair[0] = decodeURIComponent(pair[0]);
            pair[1] = decodeURIComponent(pair[1]);
            // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = pair[1];
                // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [ query_string[pair[0]], pair[1] ];
                query_string[pair[0]] = arr;
                // If third or later entry with this name
            } else {
                query_string[pair[0]].push(pair[1]);
            }
        }
        return query_string;
    };

    util.deParam=QueryStringToHash;
})(window, document);


/*
 *
 * 隐藏虚拟键盘
 */
(function(window,document,undefined) {
    "use strict";
    var hideKeyboard = function() {
        document.activeElement.blur();
        $("input").blur();
    };
    util.hideKeyboard=hideKeyboard;
})(window, document);
/*
 *
 * 数字加逗号
 */
(function(window,document,undefined) {
    "use strict";
    /*
     *
     * 数字加逗号

     */
    var formatNumber = function(n) {
        var numberWithCommas,wanN;
        if(!n){
            return 0;
        }
        if(n>9999){
            wanN=n/10000
        }

        numberWithCommas=function(x) {
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            parts[1]&&(parts[1]=parts[1].substr(0,1));
            return parts.join(".");
        };


        return numberWithCommas(n)

    };
    util.formatNumber=formatNumber;
})(window, document);
/*
 *
 * 数字前补0
 */
(function(window,document,undefined) {
    "use strict";
    /*
     *
     *
     */
    function pad (str, max) {
        str = str.toString();
        return str.length < max ? pad("0" + str, max) : str;
    }
    util.pad=pad;
})(window, document);


/*
 *
 * 全角算2个字符
 */
(function(window,document,undefined) {
    "use strict";
    /*
     *
     *
     */
    function len (str, max) {
        var char = str.replace(/[^\u0000-\u00FF]/g, '**');
        return char.length;
    }

    util.len=len;
})(window, document);

/*
 *
 * 阿拉伯数字转汉字
 */
(function(window,document,undefined) {
    "use strict";
    /*
    工具包
    */
    var Utils={
        /*
         单位
         */
        units:'个十百千万@#%亿^&~',
        /*
         字符
         */
        chars:'零一二三四五六七八九',
        /*
         数字转中文
         @number {Integer} 形如123的数字
         @return {String} 返回转换成的形如 一百二十三 的字符串
         */
        numberToChinese:function(number){
            var a=(number+'').split(''),s=[],t=this;
            if(a.length>12){
                throw new Error('too big');
            }else{
                for(var i=0,j=a.length-1;i<=j;i++){
                    if(j==1||j==5||j==9){//两位数 处理特殊的 1*
                        if(i==0){
                            if(a[i]!='1')s.push(t.chars.charAt(a[i]));
                        }else{
                            s.push(t.chars.charAt(a[i]));
                        }
                    }else{
                        s.push(t.chars.charAt(a[i]));
                    }
                    if(i!=j){
                        s.push(t.units.charAt(j-i));
                    }
                }
            }
            //return s;
            return s.join('').replace(/零([十百千万亿@#%^&~])/g,function(m,d,b){//优先处理 零百 零千 等
                b=t.units.indexOf(d);
                if(b!=-1){
                    if(d=='亿')return d;
                    if(d=='万')return d;
                    if(a[j-b]=='0')return '零'
                }
                return '';
            }).replace(/零+/g,'零').replace(/零([万亿])/g,function(m,b){// 零百 零千处理后 可能出现 零零相连的 再处理结尾为零的
                return b;
            }).replace(/亿[万千百]/g,'亿').replace(/[零]$/,'').replace(/[@#%^&~]/g,function(m){
                return {'@':'十','#':'百','%':'千','^':'十','&':'百','~':'千'}[m];
            }).replace(/([亿万])([一-九])/g,function(m,d,b,c){
                c=t.units.indexOf(d);
                if(c!=-1){
                    if(a[j-c]=='0')return d+'零'+b
                }
                return m;
            });
        }
    };

    util.numberToChinese=Utils.numberToChinese;
})(window, document);

/*
 *
 * catBy
 * var arr=[{a:11,b:22},{a:11,b:23},{a:12,b:22},{a:11,b:22}]
 *
 * hb.util.catBy(arr,'a','list')
 *
 */
(function(window,document,undefined) {
    "use strict";

    function catBy (arr,keyName,subName){
        var result = [];
        var cache = {};
        arr.forEach(function (item) {
            var val = item[keyName];
            if (cache[val]) {
                cache[val][subName].push(item);
            } else {
                var res = {};
                res[subName]=[item];
                res[keyName]=val;
                cache[val] = res;
            }
        });
        // console.log(cache)
        for(let key in cache){
            var value = cache[key];
            result.push(value);
        }
        return result;
    }
    // console.log(catBy)

    util.catBy=catBy;
})(window, document);




(function(window,document,undefined) {
    "use strict";
    /*
     *
     *getRandomInt(0, 9)
     */
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    util.getRandomInt=getRandomInt;
})(window, document);





export default util;