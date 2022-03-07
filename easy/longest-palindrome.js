/**
    Time: O(n)
    Space: O(n)
    Note: Iterate through the string and keep track of the count of each char found. For each char that has more than 1 we delete 
    the matching key in our hashmap and add two to the count.
    URL: https://leetcode.com/problems/longest-palindrome/
 */
var longestPalindrome = function (s) {
  let map = new Map();
  let count = 0;

  if (s.length === 1) {
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (map.has(char)) {
      count += 2;
      map.delete(char);
    } else {
      map.set(char, true);
    }
  }

  return map.size > 0 ? count + 1 : count;
};
