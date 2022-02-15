/*
    Time: O(n)
    Space: O(n)
    Note: DFS. At each node, add node val and sum, check if it matches the target && is node a leaf node.
    URL: https://leetcode.com/problems/path-sum/
*/
var hasPathSum = function (root, targetSum) {
  let pathExists = false;

  findPath(root, 0);

  return pathExists;

  function findPath(node, sum) {
    if (!node) {
      return;
    }

    sum += node.val;

    if (sum === targetSum && isLeafNode(node)) {
      pathExists = true;
      return;
    }

    findPath(node.left, sum);
    findPath(node.right, sum);
  }

  function isLeafNode(n) {
    return !n.left && !n.right;
  }
};
