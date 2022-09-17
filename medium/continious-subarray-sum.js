/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  if (nums.length === 1) {
    return false;
  }

  let sum = nums[0];
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let currentSum = sum + nums[i];
    let remainder = currentSum % k;

    if (map.has(remainder)) {
      return true;
    }

    let prevRemainder = sum % k;
    map.set(prevRemainder, i - 1);
    sum = currentSum;
  }

  return false;
};
