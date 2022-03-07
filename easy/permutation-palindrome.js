/**
    Time: O(n)
    Space: O(n)
    Note: Hashmap, count matches
    URL: https://leetcode.com/problems/palindrome-permutation/
 */
var canPermutePalindrome = function (s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (map.has(char)) {
      map.delete(char);
    } else {
      map.set(char, true);
    }
  }

  return map.size <= 1;
};
