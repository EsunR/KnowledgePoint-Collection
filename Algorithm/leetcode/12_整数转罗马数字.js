/**
 * 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。
 * 给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  if (num < 1 || num > 3999) return false
  let nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  let result = ""
  let i = 0

  while (num > 0) {
    while (num >= nums[i]) {
      result += romans[i]
      num -= nums[i]
    }
    i++
  }

  return result
};

let case1 = "3999",
  case2 = "58"

console.log(intToRoman(case1));