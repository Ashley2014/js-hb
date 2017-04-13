/*
 hb.location.hash.get()
 */


var hash = (function() {

    var fromHash = function() {
        var params = window.location.hash ? window.location.hash.substr(1).split("&") : [],
            paramsObject = {};

        for(var i = 0; i < params.length; i++) {
            var a = params[i].split("=");
            paramsObject[a[0]] =  decodeURIComponent(a[1]);
        }
        //console.log(paramsObject)
        return paramsObject;
    };

    var toHash = function(params) {
        if(typeof params=='undefined'){
            window.location.hash = '';
        }else if(typeof params=='string'){
            window.location.hash = params;
        }else{
            let str = [];
            for(let p in params) {
                str.push(p + "=" + encodeURIComponent(params[p]));
            }
            window.location.hash = str.join("&");
        }
    };

    return {
        get: function(param) {
            if(param=='hash'){
                return  window.location.hash;
            }else{
                let params = fromHash();
                if (param) {
                    return params[param];
                } else {
                    return params;
                }
            }
        },
        set: function(param) {
            toHash(param);
        },
        add: function(newParams,removeParams) {
            var removeParams=removeParams||[];
            removeParams=[].concat(removeParams);
            var params = fromHash();
            var paramsAfterRemove = {};
            removeParams.forEach(function(n,i){
                for (var p in params) {
                    if(n!=p){
                        paramsAfterRemove[p] = params[p];
                    }
                }

            });


            for (var p in newParams) {
                //params[p] = newParams[p];
                paramsAfterRemove[p] = newParams[p];
            }
            //toHash(params);
            //console.log(paramsAfterRemove);
            toHash(paramsAfterRemove);
        },
        remove: function(removeParams) {
            removeParams = (typeof(removeParams)=='string') ? [removeParams] : removeParams;
            var params = fromHash();
            for (var i = 0; i < removeParams.length; i++) {
                delete params[removeParams[i]];
            }
            toHash(params);
        },
        clear: function() {
            toHash({});
        }
    };
})();



export default hash;