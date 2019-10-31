/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    while (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1)
    }
  }
  return nums.length
};

removeDuplicates([1, 1, 2, 2, 2, 3, 4])