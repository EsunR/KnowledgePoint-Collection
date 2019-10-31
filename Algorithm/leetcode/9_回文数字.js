/**
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = x.toString()
  let result = true
  let L = Math.floor(x.length / 2) - 1
  let R = Math.ceil(x.length / 2)
  while (L >= 0 && result) {
    if (x[L] != x[R]) {
      result = false
      break
    }
    L--
    R++
  }
  return result
};

var case1 = 12321,
  case2 = 1221,
  case3 = 123,
  case3 = 1

// console.log(isPalindrome(case1));
// console.log(isPalindrome(case2));
console.log(isPalindrome(case3));