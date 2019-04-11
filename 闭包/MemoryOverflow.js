function obj() {
  var a = 1;
  return function () {
    return a;
  }
}

for (let i = 0; i < 100000000; i++) {
  let a = obj();
  a();
}