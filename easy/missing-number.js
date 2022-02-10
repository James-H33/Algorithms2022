/**
    Time: O(n)
    Space: O(n)
    Note: Create hashmap of all values in nums1, since we know that there is 1 missing number. 
    We can start the next interation as nums.length + 1 and just iterate until we run into a number that is missing from our hashmap
    URL: https://leetcode.com/problems/missing-number/
 */
var missingNumber = function (nums) {
  let map = {};

  for (let n of nums) {
    map[n] = n;
  }

  for (let i = 0; i < nums.length + 1; i++) {
    if (!(i in map)) {
      return i;
    }
  }
};
