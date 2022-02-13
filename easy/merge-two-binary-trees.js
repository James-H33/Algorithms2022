/*
    Time: O(n)
    Space: O(n)
    Note: DFS. Traverse both tree's at the same time; checking each node for nulls and adding values if not null. 
    URL: https://leetcode.com/problems/merge-two-binary-trees/
 */
var mergeTrees = function (root1, root2) {
  return merge(root1, root2);

  function merge(node1, node2) {
    if (!node1 && !node2) {
      return null;
    }

    if (!node1 || !node2) {
      return node1 || node2;
    }

    let node = new TreeNode();
    node.val = node1.val + node2.val;

    node.left = merge(node1.left, node2.left);
    node.right = merge(node1.right, node2.right);

    return node;
  }
};
