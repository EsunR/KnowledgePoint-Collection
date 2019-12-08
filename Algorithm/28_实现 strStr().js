/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === "") return 0
  let reg = new RegExp(needle)
  if (reg.test(haystack)) {
    return reg.exec(haystack).index
  } else {
    return -1
  }
};

console.log(strStr("hello", "lll"));