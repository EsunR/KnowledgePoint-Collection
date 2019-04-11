// 命名准则加一个前缀，区分原生Javascript提供的方法，`myUnique`可有可无
Array.prototype.myUnique = function myUnique() {
  // 一般情况下（不使用__proto__和prototype调用方法），this指的就是调用该方法的数组本身
  var obj = {};
  for (var i = 0; i < this.length; i++) {
    var item = this[i];
    if (obj.hasOwnProperty(item)) {
      ary[i] = ary[ary.length - 1];
      ary.pop();
      i--; // 处理数组塌陷
      continue;
    }
    obj[item] = item;
  }
  obj = null; // 手动释放内存
  return this;
  // 不需要return，改变this就相当于操作原有数组
}

var ary = [11, 22, 22, 33, 1, 1, 111, 11, 2, 3, 4];
ary.myUnique()
console.log(ary.myUnique());