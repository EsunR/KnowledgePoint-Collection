/**
 * 函数节流
 * @param fn 要被节流的函数
 * @param delay 规定的时间
 */
function throttle(fn, delay) {
  var lastTime = 0;
  // 利用闭包存放lastTime的状态
  return function () {
    var nowTime = Date.now();
    if (nowTime - lastTime > delay) {
      console.log(arguments);
      fn.call(this); // 解决this问题，如果不绑定this，函数的调用者为window，如果绑定了this，函数的this就指向了调用者本身
      lastTime = Date.now();
    }
  };
}

var Fun = function () {
  this.a = 100;
}

Fun.prototype.test = throttle(function () {
  console.log("触发了！");
  console.log(this);
}, 500);

var obj = new Fun;
console.log(obj.a);
obj.test();



// setTimeout(function () {
//   fun();
// }, 400)

// setTimeout(function () {
//   fun();
// }, 600)

