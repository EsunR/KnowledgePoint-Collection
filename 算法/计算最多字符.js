// 编写一个js函数,传入一个非空字符串,计算出现次数最多的字符,返回该字符及 出现次数,结果可能包含多个字符。如传入“xyzzyxyz”,则返回:{y:3, z:3} 

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