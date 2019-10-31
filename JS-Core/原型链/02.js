function Fn() {
  this.x = 100;
  this.y = 200;
  this.getX = function () {
    console.log(this.x)
  }
}

Fn.prototype.getX = function () {
  console.log(this.x);
};
Fn.prototype.getY = function () {
  console.log(this.y);
}
var f1 = new Fn;
var f2 = new Fn;
console.log(f1.getX === f2.getX);  // false
console.log(f1.getY === f2.getY);  // true
console.log(f1.__proto__.getY === Fn.prototype.getY);   // true
console.log(f1.__proto__.getX === f2.getX);  // false
console.log(f1.getX === Fn.prototype.getX);  // false
console.log(f1);    // Fn {x: 100, y: 200, getX: [Function]}
console.log(f1.constructor);    // [Function: Fn]
console.log(Fn.prototype.__proto__.constructor);    // [Function: Object]
f1.getX();  // 100
f1.__proto__.getX();    // undefined
f2.getY();  // 200
Fn.prototype.getY(); // undefined