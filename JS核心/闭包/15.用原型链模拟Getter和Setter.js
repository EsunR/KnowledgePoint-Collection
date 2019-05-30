function GetSet(vailidator) {
  this.vailidator = vailidator;
  this.value = null;
}

GetSet.prototype.get = function () {
  return this.value;
}

GetSet.prototype.set = function (v) {
  if (this.vailidator && !this.vailidator(v)) {
    throw Error(`cant set a value of ${v}`);
  } else {
    this.value = v;
  }
}

var o = new GetSet(function (x) {
  return typeof (x) === "string" ? true : false
})

o.set("cxk");

console.log(o.get());