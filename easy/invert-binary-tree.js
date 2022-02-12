/*
    Time: O(n)
    Space: O(h)
    Note: Invert nodes by setting the left and the right nodes equal to each other.
    URL: https://leetcode.com/problems/invert-binary-tree/
*/
var invertTree = function (tree) {
  dfs(tree);

  return tree;

  function dfs(node) {
    if (!node) {
      return;
    }

    let left = node.left;
    let right = node.right;

    node.left = invertTree(right);
    node.right = invertTree(left);
  }
};
