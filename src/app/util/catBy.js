/*
 * 分类
 * catBy
 * var arr=[{a:11,b:22},{a:11,b:23},{a:12,b:22},{a:11,b:22}]
 *
 * catBy(arr,'a','list')
 *
 */
export default function(arr,keyName,subName){
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
  for(let key in cache){
    var value = cache[key];
    result.push(value);
  }
  return result;
}