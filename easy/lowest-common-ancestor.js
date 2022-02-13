/*
    Time: O(n)
    Space: O(h)
    Note: DFS, since we have a balanced binary tree we can use that to check each node and set the lca
    when found.
    URL: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 */
var lowestCommonAncestor = function (root, p, q) {
  let lca = null;

  dfs(root);

  return lca;

  function dfs(node) {
    if (!node) {
      return;
    }

    if (p.val <= node.val && q.val >= node.val) {
      lca = node;
      return;
    }

    if (p.val >= node.val && q.val <= node.val) {
      lca = node;
      return;
    }

    dfs(node.left);
    dfs(node.right);
  }
};
