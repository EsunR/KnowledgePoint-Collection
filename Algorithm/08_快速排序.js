/*
  快速排序的思想是选择数组的 “中间值” ，将中间值左右的数组分成leftArr和rightArr左右两部分，如果leftArr中的数字有比中间值大的就将其插入到rightArr中，同理，如果rightArr中的数字有比中间值小的就将其插入到leftArr中。

  【！需要用递归思想！】

  之后再在leftArr和rightArr中以同样的方式进行排序，最终将排序好的数组串联起来就可以生成一个完整的已排序数组。
*/


function quickSort(myArr) {
  if (myArr.length <= 1) {
    return myArr;
  }

  let center = Math.floor(myArr.length / 2);
  let leftArr = myArr.slice(0, center);
  let rightArr = myArr.slice(center + 1);

  // 获取传入数组的左部集合
  for (let i = 0; i < leftArr.length; i++) {
    if (leftArr[i] > myArr[center]) {
      rightArr.push(leftArr[i]);
      leftArr.splice(i, 1);
      i--;
    }
  }
  // 获取传入数组的右部集合
  for (let i = 0; i < rightArr.length; i++) {
    if (rightArr[i] < myArr[center]) {
      leftArr.push(rightArr[i]);
      rightArr.splice(i, 1);
      i--;
    }
  }

  // 将左中右部分连接并返回数组
  return quickSort(leftArr).concat([myArr[center]]).concat(quickSort(rightArr));

}


let myArr = [1, 3, 4, 2, 0, 5, 2, 1];
console.log(quickSort(myArr));


