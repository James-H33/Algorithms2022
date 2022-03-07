/**
    Time: O(n * 2^n)
    Space: O(n), this is because we don't count the output array. Call stack of backtrack is perhaps the most space we could use.
    Note: Backtracking, we call backtrack with an arr and starting value of 0. We iterate over each value of nums and push nums[i] to arr,
    then call backtrack and repeat.
    URL: https://leetcode.com/problems/subsets-ii/
 */
var subsetsWithDup = function (nums) {
  let output = [];
  let seen = {};
  nums.sort();

  backtrack([], 0, "");

  return output;

  function backtrack(arr, start, key) {
    if (!seen[key]) {
      seen[key] = true;
      output.push(arr.slice());
    }

    for (let i = start; i < nums.length; i++) {
      let n = nums[i];
      arr.push(n);
      backtrack(arr, i + 1, key + n);
      arr.pop();
    }
  }
};
