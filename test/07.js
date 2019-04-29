var tmp = {};
var A = function () { };
A.prototype = tmp;

// var a = new A();
A.prototype = {};

var b = Object.create(tmp);
// b.constructor = A.constructor;

// console.log(a instanceof A);
console.log(b instanceof A);