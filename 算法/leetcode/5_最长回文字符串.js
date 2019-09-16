/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s == "" || s == null || s == undefined) return ""
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = 0, len2 = 0
    if (s[i - 1] === s[i + 1]) {
      // 查看当前字符左右两个字符是否相等
      len1 = expandAroundCenter(s, i - 1, i + 1)
    }
    if (s[i] === s[i + 1]) {
      // 查看当前字符与下一个字符是否相等
      len2 = expandAroundCenter(s, i, i + 1)
    }
    let len = Math.max(len1, len2)
    if (len > end - start) {
      start = i - parseInt((len - 1) / 2) // 获取回文字符串的起始坐标
      end = i + parseInt(len / 2) // 获取回文字符串的结束坐标
    }
  }
  return s.slice(start, end + 1)
};

/**
 * 传入两个紧邻的索引，返回以这两个紧邻的索引的回文字符串的长度
 * @param {String} s
 * @param {Number} left 
 * @param {Number} right 
 * @returns {Number} 当前回文字符的长度
 */
function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--
    right++
  }
  return right - left - 1
}



var s1 = "oloolil"
var s2 = "olooolil"
var s3 = "ccc"
var s4 = "aaaa"
var s5 = "abacdfgdcaba"
var s6 = "ab"
console.log(longestPalindrome(s1));
console.log(longestPalindrome(s2));