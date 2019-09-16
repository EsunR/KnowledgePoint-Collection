/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 * 字符串的解决方案
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {
//   x = x.toString().split("")
//   let isNegative = false
//   if (x[0] === '-') {
//     isNegative = true
//     x.shift()
//   }
//   x = parseInt(x.reverse().join(""))
//   if (isNegative) x = -x
//   if (x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31)) {
//     return 0
//   } else {
//     return x
//   }
// };

/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转
 * 数字的解决方案
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MAX = Math.pow(2, 31) - 1
  const MIN = -Math.pow(2, 31)
  let result = 0
  while (x != 0) {
    let pop = parseInt(x % 10)
    if (result > MAX / 10 || result == MAX / 10 && pop > 7) return 0
    if (result < MIN / 10 || result == MIN / 10 && pop < -8) return 0
    result = result * 10 + pop
    x = parseInt(x / 10)
  }
  return result
};

var case1 = 123,
  case2 = -123,
  case3 = 120,
  case4 = 1534236469

console.log(reverse(case2));