/**
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let index = findTarget(nums, target)
  if (index != -1) {
    let l = index, r = index
    while (nums[l - 1] == target) {
      l--
    }
    while (nums[r + 1] == target) {
      r++
    }
    return [l, r]
  } else {
    return [-1, -1]
  }
};

function findTarget(nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    let center = Math.floor((r - l) / 2) + l
    if (nums[center] === target) {
      return center
    }
    if (nums[l] === target) {
      return l
    }
    if (nums[r] === target) {
      return r
    }
    if (nums[center] > target) {
      r = center - 1
    } else {
      l = center + 1
    }
  }
  return -1
}

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
findTarget([5, 7, 7, 8, 8, 10], 8)