var test = function () {
  var a = 1;
  return function () {
    return a
  };
}

var b = new test;
console.log(b());