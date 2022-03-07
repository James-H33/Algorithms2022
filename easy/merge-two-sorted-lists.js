/*
    Time: O(n)
    Space: (1)
    Note: Iteration while keeping three pointers for list1 list2 and next node
    URL: https://leetcode.com/problems/merge-two-sorted-lists/
 */
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode();
  let node = head;
  let listNode1 = null;
  let listNode2 = null;

  while (list1 || list2) {
    listNode1 = list1 || new ListNode(Infinity);
    listNode2 = list2 || new ListNode(Infinity);

    if (listNode1.val < listNode2.val) {
      node.next = list1;
      list1 = list1.next;
    } else {
      node.next = list2;
      list2 = list2.next;
    }

    node = node.next;
  }

  return head.next;
};

/*
    Time: O(n)
    Space: O(n)
    Note: DFS
    URL: https://leetcode.com/problems/merge-two-sorted-lists/
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
