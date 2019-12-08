/*
冒泡排序（Bubble Sort）是最易懂的排序算法，但是效率较低，生产环境中很少使用。

它的基本思想是：

1. 依次比较相邻的两个数，如果不符合排序规则，则调换两个数的位置。这样一遍比较下来，能够保证最大（或最小）的数排在最后一位。

2. 再对最后一位以外的数组，重复前面的过程，直至全部排序完成。
*/
function swap(myArr, p1, p2) {
  let temp = myArr[p1];
  myArr[p1] = myArr[p2];
  myArr[p2] = temp;
}

// 从小到大排序，
function bubbleSort(myArr) {
  for (let i = 0; i < myArr.length - 1; i++) {
    for (let j = 0; j < myArr.length - i - 1; j++) {
      if (myArr[j] > myArr[j + 1]) {
        swap(myArr, j, j + 1);
      }
    }
  }
  return myArr;
}
let arr = [5, 4, 3, 2, 1]
console.log(bubbleSort(arr));



// 原型链调用法
Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        swap(this, j, j + 1);
      }
    }
  }
  return this;
}

let arr2 = [5, 4, 3, 2, 1];
console.log(arr2.bubbleSort());