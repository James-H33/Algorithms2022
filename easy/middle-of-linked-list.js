/*
    Time: O(n)
    Space: O(1)
    Note: Iterate through linked list while keeping track of the middle node by referencing a middleIndex; middleIndex is 
    calculated by (total list nodes traversed / 2).
    URL: https://leetcode.com/problems/middle-of-the-linked-list/
 */
var middleNode = function (head) {
  let middle = null;
  let index = 0;
  let total = 0;

  while (head) {
    if (!middle) {
      middle = head;
    }

    if (Math.ceil(total / 2) !== index) {
      middle = middle.next;
      index++;
    }

    head = head.next;
    total += 1;
  }

  return middle;
};
