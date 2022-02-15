/*
    Time: O(n) 
    Space: O(1)
    Note: Two pointers. Keep track of zeroIndex and keep moving foward replacing nums[zeroIndex] with current number(not zero).
    URL: https://leetcode.com/problems/move-zeroes/
 */
var moveZeroes = function (nums) {
  let zeroIndex = 0;
  let i = 0;

  while (i < nums.length) {
    let num = nums[i];

    if (num !== 0) {
      nums[i] = 0;
      nums[zeroIndex] = num;
      zeroIndex++;
    }

    i++;
  }
};
