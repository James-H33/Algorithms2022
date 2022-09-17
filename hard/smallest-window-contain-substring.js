/*
    Time: O(m + n)
    Space: O(m + n)
    Note: Sliding window with Hashmap. Loop through str until all matches found then reduce size of 
    window and check matches.
    URL: https://www.educative.io/courses/grokking-the-coding-interview/3wDJAYG2pAR
 */
const find_substring = function (str, pattern) {
  let start = 0;
  let patternMap = {};
  let matchMap = {};
  let matchCount = 0;
  let indices = [0, Infinity];

  for (let char of pattern) {
    patternMap[char] = patternMap[char] + 1 || 1;
  }

  let totalMatchesNeeded = Object.keys(patternMap).length;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char in patternMap) {
      matchMap[char] = matchMap[char] + 1 || 1;

      if (patternMap[char] === matchMap[char]) {
        matchCount++;
      }
    }

    if (totalMatchesNeeded <= matchCount) {
      while (totalMatchesNeeded <= matchCount && start < i) {
        indices = getShortest(indices, [start, i]);
        let startChar = str[start];

        if (startChar in patternMap) {
          matchMap[startChar]--;

          if (patternMap[startChar] > matchMap[startChar]) {
            matchCount--;
          }
        }

        start++;
      }
    }
  }

  if (indices[1] === Infinity) {
    return "";
  }

  return str.slice(indices[0], indices[1] + 1);
};

function getShortest(prev, curr) {
  let prevRange = prev[1] - prev[0];
  let currRange = curr[1] - curr[0];

  return currRange < prevRange ? curr : prev;
}
