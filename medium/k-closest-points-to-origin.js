/*
    Time: O(log n)
    Space: O(1), 
    Note: Sort, then compare values as there squart root
    URL: https://leetcode.com/problems/find-the-duplicate-number/
*/
var kClosest = function (points, k) {
  points.sort((a, b) => whoIsClosest(a, b));

  return points.slice(0, k);

  function distance(p) {
    let [x, y] = p;

    return Math.pow(Math.abs(x), 2) + Math.pow(Math.abs(y), 2);
  }

  function whoIsClosest(point1, point2) {
    let max1 = distance(point1);
    let max2 = distance(point2);

    return max1 - max2;
  }
};
