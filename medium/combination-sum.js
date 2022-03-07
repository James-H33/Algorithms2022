/*
    Time: O(?)
    Space: O(n)
    Note: Backtracking, keeping track of a current sum for each iteration.
    URL: https://leetcode.com/problems/combination-sum/
 */
var combinationSum = function (c, target) {
  let output = [];

  backtrack(0, [], 0);

  return output;

  function backtrack(start, arr, currentSum) {
    if (currentSum > target) {
      return;
    }

    if (currentSum === target) {
      output.push(arr.slice());
      return;
    }

    for (let i = start; i < c.length; i++) {
      let n = c[i];
      arr.push(n);
      backtrack(i, arr, currentSum + n);
      arr.pop();
    }
  }
};
