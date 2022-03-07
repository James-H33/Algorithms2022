/*
    Time: O(n * n!)
    Space: O(n * n!)
    Note: Backtracking, 
 */
var permuteUnique = function (nums) {
  let output = [];
  let seen = {};

  backtrack([], nums.slice(), "");

  return output;

  function backtrack(arr, values, key) {
    if (arr.length === nums.length && !seen[key]) {
      seen[key] = true;
      output.push(arr.slice());
    }

    for (let i = 0; i < nums.length; i++) {
      let n = values[i];

      if (n !== null) {
        arr.push(n);

        let copiedValues = values.slice();
        let seenKey = key + n;
        copiedValues[i] = null;

        backtrack(arr, copiedValues, seenKey);
        
        arr.pop();
      }
    }
  }
};
