/*
    Time: O(m + n)
    Space: O(m + n)
    Note: Sliding window with Hashmap. Loop through str and keep track of unique chars; update max on each iteration.
    window and check matches.
    URL: https://www.educative.io/courses/grokking-the-coding-interview/3wDJAYG2pAR
 */
const non_repeat_substring = function (str) {
  let max = 0;
  let l = 0;
  let r = 0;
  let seen = {};

  while (r < str.length) {
    let char = str[r];

    if (r === 0) {
      max = 1;
      seen[char] = true;
      r++;
      continue;
    }

    if (char in seen) {
      while (char in seen && l < r) {
        let prevChar = str[l];
        delete seen[prevChar];
        l++;
      }
    }

    seen[char] = true;
    max = Math.max(max, r - l + 1);
    r++;
  }

  return max;
};
