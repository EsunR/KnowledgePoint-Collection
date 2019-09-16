/**
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，
 * 垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * 暴力算法：从左向右对比
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {
//   let max = 0
//   for (let i = 0; i < height.length; i++) {
//     for (j = i + 1; j < height.length; j++) {
//       let h = Math.min(height[i], height[j])
//       let w = Math.abs(i - j)
//       let _max = h * w
//       max = _max > max ? _max : max
//     }
//   }
//   return max
// };

/**
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，
 * 垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 
 * 高效算法：同时从两边向中间运算
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0

  let L = 0
  let R = height.length - 1

  while (L < R) {
    h = Math.min(height[L], height[R])
    w = Math.abs(L - R)
    let _max = w * h
    max = _max > max ? _max : max
    if (height[L] < height[R]) {
      L++
    } else {
      R--
    }
  }
  return max
};

let case1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]

console.log(maxArea(case1));