/*
  Time: O(n)
  Space: O(1)
  Note: General approach is to mark each value as "seen" in headA then return on the first node that has "seen" property in headB.
  URL: https://leetcode.com/problems/intersection-of-two-linked-lists
*/
var getIntersectionNode = function (headA, headB) {
  let node = headA;

  while (node) {
    node.seen = true;
    node = node.next;
  }

  node = headB;

  while (node) {
    if (node.seen) {
      return node;
    }
    node = node.next;
  }

  return null;
};
