
/*
  Time: O(n)
  Space: O(1)
  Note: Multi-pointer; Build the evenHead and at end of the while loop run attach the evenHead to complete the list.
  URL: https://leetcode.com/problems/odd-even-linked-list
*/
var oddEvenList = function (head) {
  if (!head) {
    return null;
  }

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};
