/**
    Time: O(n)
    Space: O(n + m)
    Note: Create a hashmap of all the values of nums1 with the value set to false, the iterterate 
    through nums2 and for each matching value push to the output array. Mark the matching value in numsMap to true,
    so we don't push duplicates.
    URL: https://leetcode.com/problems/intersection-of-two-arrays/
 */
var intersection = function (nums1, nums2) {
  let numsMap = {};
  let output = [];

  for (let key of nums1) {
    numsMap[key] = false;
  }

  for (let n of nums2) {
    if (n in numsMap && numsMap[n] === false) {
      output.push(n);
      numsMap[n] = true;
    }
  }

  return output;
};
