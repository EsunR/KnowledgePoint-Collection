// 编写一个js函数,传入一个非空字符串,计算出现次数最多的字符,返回该字符及 出现次数,结果可能包含多个字符。如传入“xyzzyxyz”,则返回:{y:3, z:3} 


// 方法一
function Caculator(str) {
  let result = {};
  let max = 0;
  let word = [];
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    let currentWord = str[i];
    for (let j = 0; j < str.length; j++) {
      if (str[j] == str[i]) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      word = [];
      word.push(currentWord);
    }
    if (count == max) {
      word.push(currentWord);
    }
  }
  for (let i in word) {
    result[word[i]] = max;
  }
  return result;
}

console.log(Caculator('xyzzyxyz'));



// 方法二：
// 遍历字符串，将每个字符存放到obj中
// 如果obj中不存在该字符，则将该字符作为key值存入，value初始化为1；
// 如果存在，则将该字符的value值+1;
// 最后，找出obj中value值最大的值复制到obj2中返回
function maxString(str){
    var arr = str.split("");
    var obj = {};
    var obj2 = {};
    var max = 1;
    for (let i = 0; i < arr.length; i++) {
        var item = arr[i];
        obj[item] = (obj[item]+1) || 1;
    }
    for (var key in obj) {
        if(obj[key]>max){
            max = obj[key];
        }
    }
    for(var key in obj){
        if(obj[key] === max){
            obj2[key] = max;
        }
    }
    return obj2;
}