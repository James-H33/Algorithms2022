/*
    Time: O(n)
    Space: O(n)
    Note: DFS. Keep track of the closest value to the target; we do this by comparing
    the closest and the potentialClosest which is made up by get the absolute value of subtracting node.val - target.
    URL: https://leetcode.com/problems/closest-binary-search-tree-value/
 */
var closestValue = function (root, target) {
  let closest = Infinity;

  search(root);

  return closest;

  function search(node) {
    if (!node) {
      return;
    }

    const potentialClosest = Math.abs(node.val - target);
    const currentClosest = Math.abs(closest - target);

    if (potentialClosest < currentClosest) {
      closest = node.val;
    }

    search(node.left);
    search(node.right);
  }
};
