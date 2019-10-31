/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let minIndex = findMinIndex(nums)
  if (target >= nums[minIndex] && target <= nums[nums.length - 1]) {
    let find = findTarget(nums.slice(minIndex), target)
    return find === -1 ? -1 : minIndex + find
  } else if (target >= nums[0] && target <= nums[minIndex - 1]) {
    return findTarget(nums.slice(0, minIndex), target)
  } else {
    return -1
  }
};

/**
 * 找到旋转点的最小值
 * @param {number[]} nums
 */
function findMinIndex(nums) {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    let center = Math.ceil((r - l) / 2) + l
    if (nums[center] > nums[center + 1]) {
      return center + 1
    }
    if (nums[r] > nums[r + 1]) {
      return r + 1
    }
    if (nums[l] < nums[center]) {
      l = center + 1
    } else {
      r = center - 1
    }
  }
  return l
}

/**
 * 通过二分法找到有序队列中某个数的坐标位置
 * 当 l 落到 target 上时 r 会被无限吸引到 l 的位置方向，此时最终的结果可能为：
 * 1. l 与 r 指向同一坐标，最终 center 也为同一位置，跳出循环
 * 2. center 与 l 同一坐标，r 在右边，center为目标值，跳出循环
 * 当 r 落到 target 上时，l 会无限接近 l，最终与 l 位于同一索引值
 * @param {number[]} nums 
 * @param {number} target 
 */
function findTarget(nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    let center = Math.floor((r - l) / 2) + l
    if (nums[center] === target) {
      return center
    }
    if (nums[center] > target) {
      r = center - 1
    } else {
      l = center + 1
    }
  }
  return -1
}



console.log(
  // search([5, 1, 3], 2)
  findTarget([1, 2, 3, 4, 5], 4)
);