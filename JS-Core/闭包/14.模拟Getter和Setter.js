function getSet(vailidator) {
  // 当getSet()方法在外部执行时，value和vailidator都会被闭包函数占用，不会被javascript的垃圾回收机制删除
  var value;
  var o = {};
  o.get = function () {
    // 返回闭包中value的值
    return value;
  };
  o.set = function (v) {
    if (vailidator && !vailidator(v)) {
      // 验证存放于闭包的验证规则检查是否通过
      throw Error(`cant set a value of ${v}`);
    } else {
      // 如果调用的值符合验证，则将存放于闭包中的value设置为set方法中传入的值
      value = v;
    }
  }
  return o;
}

// o是一个对象，里面包含了一个get()方法和一个set()方法
var o = getSet(function (x) {
  return typeof (x) === "string" ? true : false
})

o.set("cxk");

console.log(o.get());