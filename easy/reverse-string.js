/*
    Time: O(n)
    Space: O(1)
    Note: Two Pointers. Use left and right indexes and swap chars in place.
    URL: https://leetcode.com/problems/reverse-string/
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let leftChar = s[left];
    let rightChar = s[right];

    s[left] = rightChar;
    s[right] = leftChar;

    left++;
    right--;
  }

  return s;
};
