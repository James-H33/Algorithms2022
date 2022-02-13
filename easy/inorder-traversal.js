/*
    Time: O(n)
    Space: O(n)
    Note: Inorder Traversal, DFS.
    URL: https://leetcode.com/problems/binary-tree-inorder-traversal/
 */
var inorderTraversal = function (root) {
  let output = [];

  traverse(root);

  return output;

  function traverse(node) {
    if (!node) {
      return null;
    }

    if (node.left) {
      traverse(node.left);
    }

    output.push(node.val);

    if (node.right) {
      traverse(node.right);
    }
  }
};
