/**
 * 辗转相除术用于计算最大公约数：
 * 首先，我们先计算出a除以b的余数c，把问题转化成求出b和c的最大公约数；
 * 然后计算出b除以c的余数d，把问题转化成求出c和d的最大公约数；
 * 再然后计算出c除以d的余数e，把问题转化成求出d和e的最大公约数……
 * 以此类推，逐渐把两个较大整数之间的运算简化成两个较小整数之间的运算，直到两个数可以整除，或者其中一个数减小到1为止。
 */
function gcd(a, b) {
  if (a < b) {
    var tmp = a;
    a = b;
    b = tmp;
  }
  if (a % b === 0)
    return b;
  else
    return gcd(a, a % b);
}

console.log(gcd(4, 2));
console.log(gcd(222, 333));
console.log(gcd(123, 321));