/*
    Time: O(n)
    Space: O(1)
    Note: First find a node within the cycle, then find the length of the cycle, then use length to determine first node
    in the cycle.
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = function (head) {
  let cycleLength = 0;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (slow === fast) {
      getCycleLen(slow);
      break;
    }
  }

  return getStartOfCycle(head, cycleLength);

  function getCycleLen(slowPointer) {
    let node = slowPointer;

    while (node) {
      node = node.next;
      cycleLength++;

      if (node === slowPointer) {
        return;
      }
    }
  }

  function getStartOfCycle(startHead, len) {
    let slow = startHead;
    let fast = startHead;

    while (len > 0) {
      fast = fast.next;
      len--;
    }

    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow;
  }
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head;
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`);
