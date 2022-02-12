/*
    Time: O(n)
    Space: O(h)
    Note: Dfs, add each nodes value to the total if within range.
    URL: https://leetcode.com/problems/range-sum-of-bst/

 */
var rangeSumBST = function (root, low, high) {
  let total = 0;

  dfs(root);

  return total;

  function dfs(node) {
    if (!node) {
      return;
    }

    if (node.val >= low && node.val <= high) {
      total += node.val;
    }

    dfs(node.left);
    dfs(node.right);
  }
};

// Slight optimization

/**
    Similar to above but this version does not traverse all nodes if current node was lower/higher than range.
 */
var rangeSumBST = function (root, low, high) {
  let total = 0;

  dfs(root);

  return total;

  function dfs(node) {
    if (!node) {
      return;
    }

    if (node.val >= low && node.val <= high) {
      total += node.val;
      dfs(node.left);
      dfs(node.right);
    } else {
      if (node.val < low) {
        dfs(node.right);
      } else {
        dfs(node.left);
      }
    }
  }
};
