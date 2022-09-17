/*
  Time: O(log n)
  Space: O(1)
  Note: Divide and Conquer. Find inflection point, then determine if you should like in the left or right side of the divided point.
  URL: https://leetcode.com/problems/search-in-rotated-sorted-array
*/
var search = function (nums, target) {
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  let left = 0;
  let right = nums.length - 1;

  if (nums[0] === target) {
    return 0;
  }

  if (nums[nums.length - 1] === target) {
    return nums.length - 1;
  }

  let pivotPoint = -1;

  for (let i = 1; i < nums.length; i++) {
    let prev = nums[i - 1];
    let curr = nums[i];

    if (prev > curr) {
      pivotPoint = i;
    }
  }

  if (target >= nums[0] && target <= nums[pivotPoint - 1]) {
    left = 0;
    right = pivotPoint - 1;
  } else {
    left = pivotPoint;
    right = nums.length - 1;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midNum = nums[mid];

    if (midNum === target) {
      return mid;
    }

    if (midNum > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};
