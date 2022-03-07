/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let ways = 0;

  dfs(0, 0);

  return ways;

  function dfs(total, index) {
    if (total === target && index === nums.length) {
      ways++;
      return;
    }

    if (index > nums.length) {
      return;
    }

    dfs(total - nums[index], index + 1);
    dfs(total + nums[index], index + 1);
  }
};
