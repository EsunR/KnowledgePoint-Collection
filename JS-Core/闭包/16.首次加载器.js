// 创建一个判断是否是首次加载的方法
// 闭包实际应用中主要用于封装变量，收敛权限

function isFirstLoad() {
  var _list = [];
  return function (id) {
    if (_list.indexOf(id) >= 0) {
      // 如果传递进入的参数id存在于_list中，_list.indexOf(id)的值是id在_list中的索引值，如果不存在返回值是-1
      return false;
    } else {
      _list.push(id);
      return true;
    }
  }
}

var firstLoad = isFirstLoad();

console.log(firstLoad(100)); // true
console.log(firstLoad(100)); // false
console.log(firstLoad(200)); // true













