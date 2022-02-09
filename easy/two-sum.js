/*
    Time: O(n)
    Space: O(n)
    Note: Create hash table where key = num[i] and value = i, and then 
    intertate until you find a difference via substraction within the hash table
*/
var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];

    const diff = target - curr;

    if (diff in map && map[diff] !== i) {
      return [i, map[diff]];
    }
  }
};
