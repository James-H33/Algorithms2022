/**
  Time: O(log n)
  Space: O(1)
  Note: Binary search with more complexity do to the rotation.
  URL: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array
 */
 var findMin = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    
    if (nums[0] < nums[nums.length - 1]) {
      return nums[0];
    }
    
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      let midNum = nums[mid]; // 6
      let rightNum = nums[mid + 1]; // 7
      let leftNum = nums[mid - 1]; // 5
      
      // 6 > 7
      if (midNum > rightNum) {
        return rightNum;
      }
      
      // 5 > 6
      if (leftNum > midNum) {
        return midNum;
      }
      
      // 4 < 6 -> go right
      if (nums[0] < midNum) {
        left = mid + 1;
      } else {
        // -> go left
        right = mid - 1;
      }
    }
    
    return -1;
  };