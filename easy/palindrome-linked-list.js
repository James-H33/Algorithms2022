/*
    Time: O(n)
    Space: O(n)
    Note: Sliding window, loop through linked list and make copy of values in an array.
    Loop through array and linked list simultaneously and check the values are the same.
 */
var isPalindrome = function (head) {
  let arr = [];
  let node = head;

  while (node) {
    arr.unshift(node.val);
    node = node.next;
  }

  let index = 0;

  while (head) {
    if (head.val === arr[index]) {
      index++;
      head = head.next;
    } else {
      return false;
    }
  }

  return true;
};

/*
    Time: O(n)
    Space: O(n)
    Note: Slightly faster than via not using unshift method that requires moving all items of an array each time a 
    item is inserted into front of the array.
*/
var isPalindrome = function (head) {
  let arr = [];
  let node = head;

  while (node) {
    arr.push(node.val);
    node = node.next;
  }

  let index = arr.length - 1;

  while (head) {
    if (head.val === arr[index]) {
      index--;
      head = head.next;
    } else {
      return false;
    }
  }

  return true;
};
