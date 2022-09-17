/*
  Time: O(n)
  Space: O(1)
  Note: Iterate through node and on each node we check if seen property has been set. If seen is true, then yes we have a
  cycle.
  URL: https://leetcode.com/problems/linked-list-cycle
*/
var hasCycle = function (head) {
  while (head) {
    if (head.seen) {
      return true;
    }

    head.seen = true;
    head = head.next;
  }

  return false;
};
