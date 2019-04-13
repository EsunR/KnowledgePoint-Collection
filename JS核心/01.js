/**
 * 函数节流
 * @param fn 要被节流的函数
 * @param delay 规定的时间
 */
function throttle(fn, delay) {
  var lastTime = 0;
  return function () {
    var nowTime = Date.now();
    if (nowTime - lastTime > delay) {
      fn();
      lastTime = Date.now();
    }
  };
}

var fun = throttle(function () {
  console.log("触发了！");
}, 500);

fun();

setTimeout(function () {
  fun();
}, 400)

setTimeout(function () {
  fun();
}, 600)

