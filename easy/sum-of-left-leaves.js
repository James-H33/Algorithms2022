/*
    Time: O(n)
    Space: O(n)
    Note: DFS. Trick is to pass isLeft to each left branch until the left most leaf is found.
    URL: https://leetcode.com/problems/sum-of-left-leaves/
 */
var sumOfLeftLeaves = function (root) {
  let total = 0;

  calcLeftLeaves(root, false);

  return total;

  function calcLeftLeaves(node, isLeft) {
    if (!node) {
      return;
    }

    if (isLeft && !node.left && !node.right) {
      total += node.val;
    }

    calcLeftLeaves(node.left, true);
    calcLeftLeaves(node.right, false);
  }
};
