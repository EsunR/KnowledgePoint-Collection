// 1. 构造发布者
function Dep() {
  this.subArr = [];
}
Dep.prototype.addSub = function (sub) {
  this.subArr.push(sub);
}
Dep.prototype.carry = function () {
  this.subArr.forEach(sub => {
    sub.update();
  });
}

// 2. 构造订阅者
function Watcher(fn) {
  this.fn = fn;
}
Watcher.prototype.update = function () {
  this.fn();
}

// 3. 创建订阅者
let watcher_1 = new Watcher(function () {
  console.log(1);
})
let watcher_2 = new Watcher(function () {
  console.log(2);
})

// 4. 创建发布者
let dep = new Dep();

// 5. 添加订阅
dep.addSub(watcher_1);
dep.addSub(watcher_2);

// 6. 发布事件
dep.carry();