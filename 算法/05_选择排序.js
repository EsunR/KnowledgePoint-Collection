/*
选择排序（Selection Sort）与冒泡排序类似，也是依次对相邻的数进行两两比较。不同之处在于，它不是每比较一次就调换位置，而是一轮比较完毕，找到最大值（或最小值）之后，将其放在正确的位置，其他数的位置不变。
*/

// 交换函数
function swap(myArr, p1, p2) {
  let temp = myArr[p1];
  myArr[p1] = myArr[p2];
  myArr[p2] = temp;
}

function selectionSort(myArr) {
  let len = myArr.length, min;
  for (let i = 0; i < len; i++) {
    min = i;
    for (let j = i + 1; j < len; j++) {
      if (myArr[j] < myArr[min]) {
        min = j;
      }
    }
    if (i != min) {
      swap(myArr, i, min);
    }
  }
  return myArr;
}

console.log(selectionSort([5, 3, 2, 2, 2, 2, 2, 2, 1, 4]));


