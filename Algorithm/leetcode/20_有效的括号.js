/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let dic = { "{": "}", "(": ")", "[": "]" }
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (dic[s[i]]) {
      stack.push(s[i])
    } else {
      let stackTop = stack[stack.length - 1]
      if (s[i] === dic[stackTop]) {
        stack.pop()
        continue
      } else {
        return false
      }
    }
  }
  return stack.length === 0
};

console.log(isValid("{[]}"));