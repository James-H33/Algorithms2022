/*
    Time: O(n)
    Space: O(n)
    Note: Hashmap, and keep track of the values that we have found.
    URL: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */
var findDisappearedNumbers = function (nums) {
  let map = new Map();
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    map.set(num, num);
  }

  for (let i = 1; i < nums.length + 1; i++) {
    if (!map.has(i)) {
      output.push(i);
    }
  }

  return output;
};

/*
    Time: O(n)
    Space: O(1)
    Note: Use each nums[i] as the index of the value we have seen and change that value at index of nums[i] to a negative number. 
    URL: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */
var findDisappearedNumbers = function (nums) {
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    let newIndex = Math.abs(nums[i]) - 1;

    if (nums[newIndex] > 0) {
      nums[newIndex] *= -1;
    }
  }

  for (let i = 1; i < nums.length + 1; i++) {
    if (nums[i - 1] > 0) {
      output.push(i);
    }
  }

  return output;
};
