var longestSubarray = function (nums, limit) {
  let count = 0;
  let result = 0;
  let current = [];
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  for (let index = 0; index < nums.length; index++) {
    current.push(nums[index]);

    if (current.length < result) {
      continue;
    }

    min = Math.min(min, nums[index]);
    max = Math.max(max, nums[index]);

    let diff = Math.abs(max - min);

    if (diff <= limit) {
      count = current.length;
    } else {
      let removedNum = current.shift();

      if (removedNum === min) {
        min = Math.min(...current);
      } else if (removedNum === max) {
        max = Math.max(...current);
      }
    }

    result = Math.max(result, count);
  }

  return result;
};
