/*
    Time: O(n)
    Space: O(n)
    Note: DFS; Calc Max depth at each node. Return that max depth.
    URL: https://leetcode.com/problems/maximum-depth-of-binary-tree/
*/
var maxDepth = function (root) {
  let maximumDepth = 0;

  dfs(root, 1);

  return maximumDepth;

  function dfs(node, depth) {
    if (!node) {
      return;
    }

    maximumDepth = Math.max(maximumDepth, depth);

    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }
};
