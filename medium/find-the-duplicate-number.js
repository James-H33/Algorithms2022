/*
    Time: O(log n)
    Space: O(n)
    Note: Sort, then compare two values at a time.
    URL: https://leetcode.com/problems/find-the-duplicate-number/
 */
var findDuplicate = function (nums) {
  nums.sort();

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      return nums[i];
    }
  }

  return -1;
};


/*
    Time: O(n)
    Space: O(1)
    Note: Negative Marking, mark values as we go as negative 
    URL: https://leetcode.com/problems/find-the-duplicate-number/
 */
 var findDuplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
      let index = Math.abs(nums[i]);
      
      if (nums[index] > 0) {
        nums[index] *= -1;
      } else {
        return index;
      }
    }
  };