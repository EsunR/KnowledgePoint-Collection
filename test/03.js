// 数组去重

var arr = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4]
var obj = {}
var finalArr = []
arr.forEach(current => {
  obj[current] = current;
})


for (var i = 0; i < Object.keys(obj).length; i++) {
  finalArr[i] = obj[i + 1];
}
console.log(finalArr);