function getSet(name, vailidator) {
  var value;
  var o = {};
  o['get' + name] = function () {
    return value;
  };
  o['set' + name] = function (v) {
    if (vailidator && !vailidator(v)) {
      throw Error(`cant set a value of ${v}`);
    } else {
      value = v;
    }
  }
  return o;
}

var o = getSet("Name", function (x) { return typeof(x) === "string" ? true : false })
o.setName("123");
console.log(o.getName());