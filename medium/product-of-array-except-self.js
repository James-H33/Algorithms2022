/*
  Time: O(n)
  Space: O(n)
  Note: Get products from left to right and store them a seperate array, then get products from right to left and store those
  in a seperate array, then multiply the results at each index of the seperate arrays and replace nums[i] with arr1[i] * arr2[i];
  URL: https://leetcode.com/problems/product-of-array-except-self
*/
 var productExceptSelf = function(nums) {
    let leftNums = Array(nums.length);
    let rightNums = Array(nums.length);
    
    leftNums[0] = 1;
    rightNums[rightNums.length - 1] = 1;
    
    for (let i = 1; i < nums.length; i++) {
      let num = nums[i - 1];
      let lNum = leftNums[i - 1];
      leftNums[i] = num * lNum;
    }
    
    for (let i = nums.length - 2; i >= 0; i--) {
      let num = nums[i + 1];
      let rNum = rightNums[i + 1];
      rightNums[i] = num * rNum;
    }
    
    for (let i = 0; i < nums.length; i++) {
      let lNum = leftNums[i];
      let rNum = rightNums[i];
      nums[i] = lNum * rNum;
    }
    
    return nums;  
  };
  