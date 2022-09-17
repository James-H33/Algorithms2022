const find_permutations = function(nums) {
  const results = [];

  backtrack([], new Map());

  function backtrack(arr, seen) {
    if (arr.length === nums.length) {
      results.push(arr.slice());
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      let n = nums[i];

      if (seen.get(n)) {
        continue;
      }

      seen.set(n, true);
      arr.push(n);
      backtrack(arr, seen);
      arr.pop();
      seen.set(n, false);
    }
  }

  return results;
};

find_permutations([1, 3, 5]);