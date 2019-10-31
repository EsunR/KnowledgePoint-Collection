/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let sum = 0
  let counter = 0 // 除数累加器
  let sign = Math.sign(dividend) * Math.sign(divisor)
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  let adder = divisor // 增量
  let multiple = 1 // 增量倍数
  while (sum <= dividend) {
    if (sum + adder > dividend) {
      adder = divisor
      multiple = 1
    }
    sum += adder
    counter += multiple // 获取当前除数
    adder += divisor // 增量成倍递增
    multiple += 1 // 获取增量增加的倍数
  }
  let result = (counter - 1) * sign
  if (result > Math.pow(2, 31) - 1) result = Math.pow(2, 31) - 1
  return result
};

console.log(
  divide(100, 2)
);