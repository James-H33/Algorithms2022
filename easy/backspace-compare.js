/*
    Time: O(m + n)
    Space: O(1)
    Note: 
    URL: https://leetcode.com/problems/backspace-string-compare/
 */
var backspaceCompare = function (s, t) {
  let sIdx = s.length - 1;
  let tIdx = t.length - 1;

  while (sIdx >= 0 || tIdx >= 0) {
    let sChar = s[sIdx];
    let tChar = t[tIdx];

    if (sChar === "#") {
      sIdx = moveIndexPointer(s, sIdx);
      continue;
    }

    if (tChar === "#") {
      tIdx = moveIndexPointer(t, tIdx);
      continue;
    }

    if (sChar !== tChar) {
      return false;
    }

    sIdx--;
    tIdx--;
  }

  return true;

  function moveIndexPointer(str, i) {
    let backspaceChars = 1;
    i--;

    while (backspaceChars > 0) {
      let char = str[i];

      if (char === "#") {
        backspaceChars++;
      } else {
        backspaceChars--;
      }

      i--;
    }

    return i;
  }
};
