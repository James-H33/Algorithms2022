/*
  Time: O(n)
  Space: O(n)
  Note: Use two stacks and push values from linked lists two corresponding stacks and then iterate through stacks
  using the length of the longest stack as the max value for i, and build the new nodes as we iterate.
  URL: https://leetcode.com/problems/combination-sum/
*/
var addTwoNumbers = function (l, r) {
  let lStack = [];
  let rStack = [];

  while (r || l) {
    if (r) {
      rStack.push(r.val);
      r = r.next;
    }

    if (l) {
      lStack.push(l.val);
      l = l.next;
    }
  }

  let rem = 0;
  let output = new ListNode();
  let list = output;

  let n = Math.max(lStack.length, rStack.length);
  let i = 0;

  while (i < n) {
    let left = lStack[i] || 0;
    let right = rStack[i] || 0;
    let sum = left + right + rem;
    rem = 0;

    if (sum >= 10) {
      rem = 1;
      sum = sum % 10;
    }

    let node = new ListNode(sum);
    list.next = node;
    list = list.next;
    i++;
  }

  if (rem > 0) {
    let node = new ListNode(rem);
    list.next = node;
    list = list.next;
  }

  return output.next;
};
