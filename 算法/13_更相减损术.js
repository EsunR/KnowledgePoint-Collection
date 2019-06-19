/**
 * 更相减损术， 出自于中国古代的《九章算术》，也是一种求最大公约数的算法。
 * 原理：两个正整数a和b（a>b），它们的最大公约数等于a-b的差值c和较小数b的最大公约数。比如10和25，25减去10的差是15,那么10和25的最大公约数，等同于10和15的最大公约数。
 */
function gcd(a, b) {
  if (a < b) {
    var tmp = a;
    a = b;
    b = tmp;
  }
  if (a % b == 0)
    return b;
  else
    return gcd(b, a - b);
}

console.log(gcd(4, 2));
console.log(gcd(222, 333));
console.log(gcd(123, 321));