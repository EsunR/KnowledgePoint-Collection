/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  function h(ps, l, r) {
    if (l == n && r == n) {
      res.push(ps);
      return;
    }
    if (l < n) {
      h(ps + '(', l + 1, r);
    }
    if (l > r) {
      h(ps + ')', l, r + 1);
    }
  }
  h('', 0, 0);
  return res;
};

generateParenthesis(3)