/**
 * 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let sum = 0
  let counter = 0
  let sign = Math.sign(dividend) * Math.sign(divisor)
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  while (sum <= dividend) {
    sum += divisor
    counter++
  }
  let result = (counter - 1) * sign
  if (result > Math.pow(2, 31) - 1) result = Math.pow(2, 31) - 1
  return result
};

console.log(divide(2147483647, 2));