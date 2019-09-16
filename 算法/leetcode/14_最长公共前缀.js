/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ""
  let result = ""
  for (let i = 0; i < strs[0].length; i++) {
    let flag = strs[0][i]
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] === flag) {
        if (j === strs.length - 1) result += flag
      } else {
        flag = false
        break
      }
    }
    if (!flag) break
  }
  return result
};

let case1 = ["aaa", "baab", "aaaweq"]

console.log(longestCommonPrefix(case2));

