function interval(fun,delay,count,afterCount){

    if(count){
        var refreshIntervalId = setInterval(intervalFunWithCount, delay);
    }else{
        var refreshIntervalId = setInterval(intervalFun, delay);
    }

    var _clear = function() {
        clearInterval(refreshIntervalId);
    };

    function intervalFun(){
        count--;
        fun();
    }

    function intervalFunWithCount(){
        intervalFun();
        if(count<=0){
            _clear();
            afterCount();
        }
    }

    return _clear
}


export default interval;

