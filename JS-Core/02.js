/**
 * 函数防抖
 * @param fn 添加防抖的函数
 * @param delay 防抖间隔时间
 */
function debounce(fn, delay) {
  // 记录上一次的延时器
  var timer = null;
  return function () {
    // 清除上一次的延时器
    clearTimeout(timer);
    // 获取传入方法内部的参数
    var args = Array.prototype.slice.apply(arguments);
    // 重新设定新的延时器
    timer = setTimeout(function () {
      fn.apply(this, args);
    }, delay);
  }
}

var fun = debounce(function (a, b) {
  console.log(a);
  console.log(b);
  console.log('触发了！');
}, 1000)

setTimeout(function () {
  fun()
}, 200)

setTimeout(function () {
  fun()
}, 300)

setTimeout(function () {
  fun()
}, 400)

setTimeout(function () {
  fun(111, 222)
}, 1402)