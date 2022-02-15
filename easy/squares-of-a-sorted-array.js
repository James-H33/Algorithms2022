/*
    Time: O(n)
    Space: O(n)
    Note: Stack. Initialize array of length nums where values are set to 0. Iterate through nums pushing negative numbers into stack.
    Then compare those negative numbers with each positively squared nums[i]. 
    URL: https://leetcode.com/problems/squares-of-a-sorted-array/
 */
var sortedSquares = function (nums) {
  let arr = Array(nums.length).fill(0);
  let stack = [];
  let arrIndex = 0;

  let i = 0;

  while (i < nums.length) {
    let curr = nums[i];

    if (curr < 0) {
      stack.push(curr * curr);
      i++;
      continue;
    }

    let squared = curr * curr;

    if (stack.length) {
      if (stack[stack.length - 1] > squared) {
        arr[arrIndex] = squared;
        arrIndex++;
      } else {
        arr[arrIndex] = stack.pop();
        arrIndex++;
        continue;
      }
    }

    if (!stack.length) {
      arr[arrIndex] = squared;
      arrIndex++;
    }

    i++;
  }

  while (stack.length) {
    arr[arrIndex] = stack.pop();
    arrIndex++;
  }

  return arr;
};
