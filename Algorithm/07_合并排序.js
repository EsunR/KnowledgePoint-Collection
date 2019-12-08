/*
合并排序（Merge sort）则是一种被广泛使用的排序方法。

【！需要用递归思想！】

它的基本思想是，将两个已经排序的数组合并，要比从头开始排序所有元素来得快。因此，可以将数组拆开，分成n个只有一个元素的数组，然后不断地两两合并，直到全部排序完成。

*/

// 合并两个已排序的数组
function merge(left, right) {
  var result = [],
    il = 0,
    ir = 0;
  // 左边数组与右边数组单个元素逐个比较，将大的推入result数组中
  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }
  // 当一个数组中的元素对比完了，则停止了上面的循环对比，但是此时肯定有一方的数组还有未进行对比的冗余元素，这些冗余元素肯定是比已对比的所有元素都大，所以用 concat() 方法，直接将这些冗余元素追加到 result 数组后
  return result.concat(left.slice(il)).concat(right.slice(ir));
}


function mergeSort(myArr) {
  if (myArr.length < 2) {
    return myArr;
  }

  let middle = Math.floor(myArr.length / 2);
  let left = myArr.slice(0, middle);
  let right = myArr.slice(middle);
  let params = merge(mergeSort(left), mergeSort(right));

  // 在返回的数组头部，添加两个元素，第一个是0，第二个是返回的数组长度
  params.unshift(0, params.length);

  // splice用来替换数组元素，它接受多个参数，
	// 第一个是开始替换的位置，第二个是需要替换的个数，后面就是所有新加入的元素。
	// 因为splice不接受数组作为参数，所以采用apply的写法。
	// 这一句的意思就是原来的myArray数组替换成排序后的myArray
  myArr.splice.apply(myArr, params);
  return myArr;
}

let myArr = [4, 5, 1, 6, 3, 2, 1, 1, 1]
console.log(mergeSort(myArr));
