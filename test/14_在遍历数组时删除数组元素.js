// 使用 i in arr 塌缩无法挽救
let arr = [1, 2, 3, 4, 5, 6];
for (var i in arr) {
  // 输出并删除了“3”之后不会输出“4”，也就是跳过了遍历元素“4”
  console.log(`arr[${i}] = ${arr[i]}`);
  if (arr[i] == 2) {
    arr.splice(i, 1);
    // 当前arr[i]已经指向“4”
    i--;
  }
}
console.log(arr);



let arr2 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr2.length; i++) {
  console.log(`arr2[${i}] = ${arr2[i]}`);
  if (arr2[i] == 2) {
    arr2.splice(i, 1);
    // 在此将i回退-1，在下次循环中重新遍历新的arr2[2]
    i--;
  }
}
console.log(arr2);

