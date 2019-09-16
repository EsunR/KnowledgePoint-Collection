/**
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
   请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
   你可以假设 nums1 和 nums2 不会同时为空。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let nums = nums1.concat(nums2);
  nums = nums.sort((a, b) => { return a - b })
  console.log('nums: ', nums);
  let len = nums.length
  if (nums.length % 2 === 0) {
    return (nums[len / 2 - 1] + nums[len / 2]) / 2
  } else {
    return nums[Math.floor(len / 2)]
  }
};

nums1 = [1,1,1,1,1,1,1,1,1,1,4,4]
nums2 = [1,3,4,4,4,4,4,4,4,4,4]
var result = findMedianSortedArrays(nums1, nums2)
console.log(result);