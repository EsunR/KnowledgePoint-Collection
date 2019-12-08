// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function (nums) {
//   let result = []
//   for (let i = 0; i < nums.length - 2; i++) {
//     let a = nums[i]
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       let b = nums[j]
//       for (let k = j + 1; k < nums.length; k++) {
//         let c = nums[k]
//         if (a + b + c === 0) {
//           result.push([a, b, c])
//         }
//       }
//     }
//   }
//   return merg(result)
// };

// /**
//  * @param {Array[]} numArr
//  */
// function merg(numArr) {
//   let indexArr = []
//   let [...cpNumArr] = numArr
//   for (let i in cpNumArr) {
//     cpNumArr[i] = cpNumArr[i].sort()
//     for (let j = i - 1; j >= 0; j--) {
//       if (cpNumArr[j].toString() === cpNumArr[i].toString()) {
//         indexArr.push(i)
//         break
//       }
//     }
//   }
//   indexArr = indexArr.sort(function (a, b) { return b - a })
//   for (let i in indexArr) {
//     numArr.splice(indexArr[i], 1)
//   }
//   return numArr
// }

var threeSum = function (nums) {
  let res = []
  let length = nums.length;
  nums.sort((a, b) => a - b) // 先排个队，最左边是最弱（小）的，最右边是最强(大)的
  if (nums[0] <= 0 && nums[length - 1] >= 0) { // 优化1: 整个数组同符号，则无解
    for (let i = 0; i < length - 2;) {
      if (nums[i] > 0) break; // 优化2: 最左值为正数则一定无解
      let first = i + 1
      let last = length - 1
      do {
        if (first >= last || nums[i] * nums[last] > 0) break // 两人选相遇，或者三人同符号，则退出
        let result = nums[i] + nums[first] + nums[last]
        if (result === 0) { // 如果可以组队
          res.push([nums[i], nums[first], nums[last]])
        }
        if (result <= 0) { // 实力太弱，把菜鸟那边右移一位
          while (first < last && nums[first] === nums[++first]) { } // 如果相等就跳过
        } else { // 实力太强，把大神那边右移一位
          while (first < last && nums[last] === nums[--last]) { }
        }

      } while (first < last)
      while (nums[i] === nums[++i]) { }
    }
  }
  return res
}

let nums = [0, 0, 0, 0]
nums2 = [-13, 11, 11, 0, -5, -14, 12, -11, -11, -14, -3, 0, -3, 12, -1, -9, -5, -13, 9, -7, -2, 9, -1, 4, -6, -13, -7, 10, 10, 9, 7, 13, 5, 4, -2, 7, 5, -13, 11, 10, -12, -14, -5, -8, 13, 2, -2, -14, 4, -8, -6, -13, 9, 8, 6, 10, 2, 6, 5, -10, 0, -11, -12, 12, 8, -7, -4, -9, -13, -7, 8, 12, -14, 10, -10, 14, -3, 3, -15, -14, 3, -14, 10, -11, 1, 1, 14, -11, 14, 4, -6, -1, 0, -11, -12, -14, -11, 0, 14, -9, 0, 7, -12, 1, -6]

console.log(threeSum(nums));