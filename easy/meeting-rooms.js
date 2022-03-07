/**
    Time: O(log(n))
    Space: O(1)
    Note: Sort by last values in each interval, the access if there is overlapping values with another for loop.
    URL: https://leetcode.com/problems/meeting-rooms/
 */
var canAttendMeetings = function (intervals) {
  intervals.sort((a, b) => {
    let valA = a[1];
    let valB = b[1];

    return valA - valB;
  });

  for (let i = 1; i < intervals.length; i++) {
    let valA = intervals[i - 1][1];
    let valB = intervals[i][0];

    if (valB < valA) {
      return false;
    }
  }

  return true;
};
