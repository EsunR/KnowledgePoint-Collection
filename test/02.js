function isFunction(x) {
  return Object.prototype.toString.call(x);
  // return x.prototype
}

var a = 1;

console.log(isFunction(a));


console.log(Object.prototype.toString)