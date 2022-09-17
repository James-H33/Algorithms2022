/*
    Time: O(n)
    Space: O(1)
    Note: Node Swapping.
    URL: https://leetcode.com/problems/remove-linked-list-elements
 */
var removeElements = function (head, val) {
  let mainHead = new ListNode(0, head);
  let prev = mainHead;
  let node = head;

  while (node) {
    if (node.val === val) {
      prev.next = node.next;
      node = node.next;
    } else {
      prev = node;
      node = node.next;
    }
  }

  return mainHead.next;
};
