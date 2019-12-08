/**
 * 请你来实现一个 atoi 函数，使其能将字符串转换成整数。
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  str = str.replace(/^\s+|\s+&/, "")
  let reg = /^[/+/-]?\d+/
  let result = str.match(reg)
  if (result) {
    result = parseInt(result[0])
    let max = Math.pow(2, 31) - 1
    let min = -Math.pow(2, 31)
    if (result > max) {
      return max
    } else if (result < min) {
      return min
    } else {
      return result
    }
  } else {
    return 0
  }
};

let case1 = "  4193 with words",
  case2 = "words and 987"

console.log(myAtoi(case1));

