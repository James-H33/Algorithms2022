/*
    Time: O(n log n)
    Space: O(n)
    Note: Create map of nums with n being the keys and where value is the times n is seen in nums.
    Then sort, where if the frequency is the same, we sort decreasing, if the frequency is different we sort ascending by frequency.
    URL: https://leetcode.com/problems/sort-array-by-increasing-frequency/
 */
var frequencySort = function (nums) {
  let map = new Map();

  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  return nums.sort((a, b) => {
    let frequencyA = map.get(a);
    let frequencyB = map.get(b);

    if (frequencyA === frequencyB) {
      return b - a;
    }

    return frequencyA - frequencyB;
  });
};
