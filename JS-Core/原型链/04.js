function Fn(){
  var n = 10;
  this.m = 20;
  this.aa = function(){
      console.log(this.m);
  }
}

Fn.prototype.bb = function(){
  console.log(this.n);
}

var f1 = new Fn;

Fn.prototype = {
  aa: function(){
      console.log(this.m + 10);
  }
};

var f2 = new Fn;
console.log(f1.constructor);  // [Function: Fn]
console.log(f2.constructor);  // f2.constructor => 找不到 => f2._prototype_.constructor => [Function: Object]
f1.bb();  // undefined
f1.aa();  // 20
f2.bb();  // TypeError: f2.bb is not a function
f2.aa();  // 20
f2.__proto__.aa(); // TypeError: f2.__proto__.aa() is not a function