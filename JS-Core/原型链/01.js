var obj = function () {
  this.name = "huahua";
  this.age = "18"
}

var a = new obj();
a.name = "liming"
console.log(obj);
console.log(a);
console.log(a.__proto__.constructor.age);
