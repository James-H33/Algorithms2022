/*
    Time: O(n)
    Space: O(n)
    Note: Two DFS's, one DFS for the left branch and one for the right branch, put values in array and compare.
 */
var isSymmetric = function (root) {
  if (!root.left && !root.right) {
    return true;
  }

  if (!root.left || !root.right) {
    return false;
  }

  let left = [];
  let right = [];

  dfsLeft(root.left);
  dfsRight(root.right);

  let length = Math.max(left.length, right.length);

  for (let i = 0; i < length; i++) {
    let l = left[i];
    let r = right[i];

    if (l !== r) {
      return false;
    }
  }

  return true;

  function dfsLeft(node) {
    if (!node) {
      left.push(null);
      return;
    }

    left.push(node.val);

    if (node.left || node.right) {
      dfsLeft(node.left);
      dfsLeft(node.right);
    }
  }

  function dfsRight(node) {
    if (!node) {
      right.push(null);
      return;
    }

    right.push(node.val);

    if (node.left || node.right) {
      dfsRight(node.right);
      dfsRight(node.left);
    }
  }
};
