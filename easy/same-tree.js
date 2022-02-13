/*
    Time: O(m + n)
    Space: O(m + n)
    Note: DFS. Do DFS on each tree and populate an array with the nodes. Compare the arrays to see if each values matches.
    URL: https://leetcode.com/problems/same-tree/
*/
var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }

  if (!p || !q) {
    return false;
  }

  let nodes1 = [];
  let nodes2 = [];

  dfs(p, nodes1);
  dfs(q, nodes2);

  if (nodes1.length !== nodes2.length) {
    return false;
  }

  for (let i = 0; i < nodes1.length; i++) {
    let n1 = nodes1[i];
    let n2 = nodes2[i];

    if (n1 !== n2) {
      return false;
    }
  }

  return true;

  function dfs(node, nodes) {
    if (!node) {
      return;
    }

    nodes.push(node.val);

    if (!node.left && !node.right) {
      return;
    }

    if (!node.left) {
      nodes.push(null);
    } else {
      dfs(node.left, nodes);
    }

    if (!node.right) {
      nodes.push(null);
    } else {
      dfs(node.right, nodes);
    }
  }
};

/*
    Better solution
    Time: O(n)
    Space: O(h)
    Note: Better version. Also DFS but this time we compare both tree's nodes simultaneously.
    URL: https://leetcode.com/problems/same-tree/
*/
const isSameTree = function (p, q) {
  const data = { isBalanced: true };

  dfs(p, q, data);

  return data.isBalanced;
};

function dfs(node, mirrorNode, treeInfo) {
  if (!treeInfo.isBalanced) {
    return;
  }

  if (!node && !mirrorNode) {
    return;
  }

  if ((!node && mirrorNode) || (node && !mirrorNode)) {
    treeInfo.isBalanced = false;
    return;
  }

  if (node.val !== mirrorNode.val) {
    treeInfo.isBalanced = false;
  }

  if (!treeInfo.isBalanced) {
    return;
  }

  dfs(node.left, mirrorNode.left, treeInfo);
  dfs(node.right, mirrorNode.right, treeInfo);
}
