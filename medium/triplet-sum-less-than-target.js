/*
    Time: O(n^2), we sort but we iterate through the left and right pointers for every element in the array.
    Space: O(n) -> Due to sorting
    Note: Two Pointer strategy, tricky bit is right - left. Check below for details.
    URL: https://leetcode.com/problems/3sum-smaller
*/
const triplet_with_smaller_sum = function (arr, target) {
  let count = 0;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    count += find(i);
  }

  function find(index) {
    let currTarget = target - arr[index];
    let left = index + 1;
    let right = arr.length - 1;
    let sum = 0;

    while (left < right) {
        // If true, then we know that there are right - left, pairs that are less than the currTarget;
        // so we left++ to check if there are more pair where right - (left + 1) is also less then currTarget
      if (arr[left] + arr[right] < currTarget) {
        sum += 1;
        left++;
      } else {
        right--;
      }
    }

    return sum;
  }

  return count;
};

console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5));
