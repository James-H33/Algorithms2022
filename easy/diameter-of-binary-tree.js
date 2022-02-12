/**
    Time: O(n)
    Space: O(h)
    Note: DFS, bubble up longest branch and compare max diameter at each node.
    URL: https://leetcode.com/problems/diameter-of-binary-tree/
 */
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;

  dfs(root);

  return maxDiameter;

  function dfs(node) {
    if (!node) {
      return 0;
    }

    let leftLen = dfs(node.left);
    let rightLen = dfs(node.right);
    let maxForCurrentNode = leftLen + rightLen;

    maxDiameter = Math.max(maxDiameter, maxForCurrentNode);

    return Math.max(leftLen, rightLen) + 1;
  }
};
