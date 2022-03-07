/*
    Time: O(n) 
    Space: O(1)
    Note: Negative Marking. Use nums[i] - 1, as the index of the value you and mark that index as negative. If another nums[i] - 1, comes to 
    be the same index then we know we have seen this value before.
    URL: https://leetcode.com/problems/find-all-duplicates-in-an-array/
 */
var findDuplicates = function (nums) {
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;

    if (nums[index] > 0) {
      nums[index] *= -1;
    } else {
      output.push(index + 1);
    }
  }

  return output;
};
