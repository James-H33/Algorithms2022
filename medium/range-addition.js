/*
    Time: O(n * k), where k is the number of iteration needs to fill in each inc of range(startIndex, endIndex).
    Space: O(n)
    Note: Trivial yet niave solution.
    URL: https://leetcode.com/problems/range-addition/
 */
var getModifiedArray = function (length, updates) {
  let arr = new Array(length).fill(0);

  while (updates.length) {
    let [startIndex, endIndex, inc] = updates.pop();
    let i = startIndex;

    while (i <= endIndex) {
      arr[i] += inc;
      i++;
    }
  }

  return arr;
};
