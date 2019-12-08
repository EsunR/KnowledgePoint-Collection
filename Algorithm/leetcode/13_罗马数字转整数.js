/**
 * @param {string} s
 * @return {number}
 * 这道题主要考虑判断当前遍历的字符串与下一个字符串的数字组合是否存在，如果存在则优先使用组合，否则就将当前的字母作为一个单个字符的累加数字
 */
var romanToInt = function (s) {
  let result = 0
  let dic = d = { 'I': 1, 'IV': 4, 'V': 5, 'IX': 9, 'X': 10, 'XL': 40, 'L': 50, 'XC': 90, 'C': 100, 'CD': 400, 'D': 500, 'CM': 900, 'M': 1000 }
  for (let i = 0; i < s.length; i++) {
    // XIII 13   XLIII 43
    if (dic[s[i] + s[i + 1]]) {
      result += dic[s[i] + s[i + 1]]
      i++
    } else {
      result += dic[s[i]]
    }
  }
  return result
};

let case1 = "LVIII",
  case2 = "MCMXCIV"

console.log(romanToInt(case2));