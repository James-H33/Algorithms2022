/*
    Time: 
    Space: 
    Note: 
    URL: https://leetcode.com/problems/valid-palindrome-ii/

 */
var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return isValid(left + 1, right) || isValid(left, right - 1);
    }

    left += 1;
    right -= 1;
  }

  function isValid(l, r) {
    while (l < r) {
      if (s[l] !== s[r]) {
        return false;
      }

      l += 1;
      r -= 1;
    }

    return true;
  }

  return true;
};
