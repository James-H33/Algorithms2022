/*
    Time: O(n)
    Space: O(1)
    Note: Dynamic Programming; We set prev and max to the first element in the array. We then iterate starting at index 1. 
    For each iteration, we first compare the prev, which is the previous max one could reach from index - 1, and prev + nums[index] and store the 
    max value between the two. Then we compare the new best max we can achieve at nums[index] thus far and compare it to max.
    URL: https://leetcode.com/problems/maximum-subarray/
 */
 var maxSubArray = function(nums) {
    let index = 1;
    let prev = nums[0];
    let max = nums[0];
    
    while (index < nums.length) {
      let num = nums[index];
      
      prev = Math.max(prev + num, num);
      max = Math.max(max, prev);
      index++;
    }
    
    return max;
  };