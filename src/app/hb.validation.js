/*
 validation

 */
var validation={
    checkPhone:checkPhone,
    checkFullShape:checkFullShape,
    isEmpty:isEmpty,
};


/*
 hb.location.validation.checkPhone(string)
 return boolean
 */

function checkPhone(num){
    //表示以1开头，第二位可能是3/4/5/7/8等的任意一个，在加上后面的\d表示数字[0-9]的9位，总共加起来11位结束。
    if(!(/^1[3|4|5|7|8]\d{9}$/.test(num))){
        return false;
    }else{
        return true;
    }
};



function checkFullShape(str){
    //检查是否全角
    var reg = /[^\u0000-\u00FF]/;
    return reg.test(str);
};



function isEmpty(str){
    if (/^\s*$/.test(str)) {
        return true;
    }else{
        return false;
    }
};

export default validation;

