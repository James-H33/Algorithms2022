/*
    Time: O(n * 2^n)
    Space: O(n), this is because we don't count the output array
    Note: Backtracking, we call backtrack with an arr and starting value of 0. We iterate over each value of nums and push nums[i] to arr,
    then call backtrack and repeat.
    URL: https://leetcode.com/problems/subsets/
 */
var subsets = function (nums) {
  let output = [];

  backtrack([], 0);

  return output;

  function backtrack(arr, start) {
    output.push(arr.slice());

    for (let i = start; i < nums.length; i++) {
      arr.push(nums[i]);
      backtrack(arr, i + 1);
      arr.pop();
    }
  }
};
