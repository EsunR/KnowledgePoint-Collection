var str1 = "bbbbbbb" // 1
var str2 = "abcabcbb" // 3
var str3 = "pwwkew" // 3
var str4 = " " // 1
var str5 = "dvdf" // 2

/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} str 
 */
function findLongerstString(str) {
  let max = 0
  let start = 0
  let current = 0
  for (; current < str.length; current++) {
    let _max = 1
    for (let j = current - 1; j >= start; j--) {
      if (str[j] == str[current]) {
        start = j + 1;
        break
      } else {
        _max++
      }
    }
    if (_max > max) max = _max
  }
  return max
}

let result = findLongerstString(str3)
console.log(result);


