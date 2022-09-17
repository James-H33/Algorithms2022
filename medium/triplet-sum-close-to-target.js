/*
    Time: O(n^2), we sort but we iterate through the left and right pointers for every element in the array.
    Space: O(n) -> Due to sorting
    Note: Two Pointer strategy; while keeping track of the minimum distance.
    URL: https://leetcode.com/problems/3sum-closest
*/
const triplet_sum_close_to_target = function (arr, target) {
  let closestSum = Infinity;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }

    if (find(i)) {
      return closest;
    }
  }

  function find(index) {
    let val = arr[index];
    let left = index + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = val + arr[left] + arr[right];
      closestSum =
        getDistance(closestSum) > getDistance(sum) ? sum : closestSum;

      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        return true;
      }
    }

    return false;
  }

  function getDistance(n) {
    return n < 0 ? target - n : Math.abs(n - target);
  }

  return closestSum;
};
