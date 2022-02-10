/**
    Time: O(m + n)
    Space: O(n)
    Note: Create a hashmap of nums2 with each value being the index of the key within nums2.
    Then interate through nums1 and use nums1[i] to find the starting position to find the
    next greatest element withing nums2.
    URL: https://leetcode.com/problems/next-greater-element-i/
 */
var nextGreaterElement = function (nums1, nums2) {
  let output = [];
  let nums2Map = {};

  for (let i = 0; i < nums2.length; i++) {
    let key = nums2[i];

    nums2Map[key] = i;
  }

  for (let i = 0; i < nums1.length; i++) {
    const curr = nums1[i];
    let index = nums2Map[curr];
    let foundNext = false;

    while (index < nums2.length) {
      const next = nums2[index];

      if (curr < next) {
        output.push(next);
        foundNext = true;
        break;
      }

      index++;
    }

    if (!foundNext) {
      output.push(-1);
    }
  }

  return output;
};
