/*
  Time: O(n log n)
  Space: O(1), if you are not counting the result.
  Note: Sort values by the first index of each element, then loop through checking if last added to output and current intercal overlap.
  URL: https://leetcode.com/problems/merge-intervals
 */
var merge = function (intervals) {
  intervals.sort((a, b) => {
    let valA = a[0];
    let valB = b[0];

    return valA - valB;
  });

  let length = intervals.length;
  let output = [];

  let i = 0;

  while (i < length) {
    let interval = intervals[i];
    let last = output[output.length - 1];

    if (!output.length || last[1] < interval[0]) {
      output.push(interval);
    } else {
      last[1] = Math.max(last[1], interval[1]);
    }

    i++;
  }
  return output;
};
