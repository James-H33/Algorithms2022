/*
    Time: O(n)
    Space: O(n)
    Note: Create initial map with array nums and their occurrences; Then loop through first maps keys and 
    create a second map keeping track of occurrences counts.
    URL: https://leetcode.com/problems/unique-number-of-occurrences/
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = {};
  let sameNumberMap = {};

  for (let key of arr) {
    if (key in map) {
      map[key]++;
    } else {
      map[key] = 1;
    }
  }

  for (let key of Object.keys(map)) {
    let count = map[key];

    if (count in sameNumberMap) {
      return false;
    }

    sameNumberMap[count] = true;
  }

  return true;
};
