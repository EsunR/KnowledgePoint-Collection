/*
编写一个Javascript函数，传入一个数组，对数组中的元素进行去重并返回一个无重复元素的数组，数组的元素可以是数字、字符串、数组和对象。举例说明：

1. 如传入的数组元素为[123, "meili", "123", "mogu", 123],则输出：[123, "meili", "123", "mogu"]
2. 如传入的数组元素为[123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"],则输出：[123, [1, 2, 3], [1, "2", 3], "meili"]
3. 如传入的数组元素为[123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"],则输出：[123, {a: 1}, {a: {b: 1}}, {a: "1"}, "meili"]
*/

// ES6实现：
function removeDuplicate(arr) {
  return [...(new Set(arr.map(n => JSON.stringify(n))))].map(n => JSON.parse(n))
}

console.log(removeDuplicate([123, { a: 1 }, { a: { b: 1 } }, { a: "1" }, { a: { b: 1 } }, "meili"]));


Array.prototype.unique = function () {
  let hash = new Map()
  let result = []
  let item
  for (let i = 0; i < this.length; i++) {
    // console.log(Object.prototype.toString.call(this[i]))
    if (Object.prototype.toString.call(this[i]) === '[object Object]'
      || Object.prototype.toString.call(this[i]) === '[object Array]') {
      item = JSON.stringify(this[i])
      console.log('item(JSON): ', item);
    } else {
      item = this[i]
      console.log('item: ', item);
    }
    if (!hash.has(item)) {
      hash.set(item, true)
      result.push(this[i])
    }
  }
  return result
}

console.log([123, { a: 1 }, { a: { b: 1 } }, { a: "1" }, { a: { b: 1 } }, "meili"].unique()[1]);


// ES5 实现：
function unique(arr) {
  var arr2 = [];
  var arr3 = [];
  var flag = true;
  var item;
  for (var i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) == "object") {
      item = JSON.stringify(arr[i]);
    } else {
      item = arr[i];
    }
    if (arr3.indexOf(item) == -1) {
      // 创建arr3的目的是为了检测是否传入了重复项，但是arr3中不能排除NaN类型，且数据为字符串类型
      arr3.push(item);
      //考虑NaN，如果为 NaN，则 NaN !== NaN，且在之后不会再想数组中添加NaN
      if (arr[i] !== arr[i] && flag) {
        arr2.push(arr[i]);
        flag = false;
      }
      if (arr[i] === arr[i]) {
        arr2.push(arr[i]);
      }
    }
  }
  return [arr, arr2, arr3];
}

var arr = [123, { a: 1 }, { a: { b: 1 } }, { a: "1" }, { a: { b: 1 } }, "meili", NaN, NaN]
console.log(unique(arr));