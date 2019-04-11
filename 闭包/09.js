function f1() {

  var n = 999;

  var f2 = function () {
    console.log(n);
    return n;
  }

  return f2;

}

// var result = f1();
// var b = result(); // 999
// console.log(b);
var result = f1();
// f2();
result();