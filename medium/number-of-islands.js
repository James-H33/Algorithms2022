/*
    Time: O(m x n)
    Space: O(1)
    Note: DFS on each '1' we encounter, set each cell to '0' in order to not count duplicates.
    URL: https://leetcode.com/problems/number-of-islands/
 */
var numIslands = function (grid) {
  let row = grid.length;
  let col = grid[0].length;
  let count = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (isIsland(i, j)) {
        count++;
      }
    }
  }

  return count;

  function isIsland(x, y) {
    if (!isInBound(x, y)) {
      return false;
    }

    if (grid[x][y] === "0") {
      return false;
    }

    grid[x][y] = "0";

    isIsland(x + 1, y);
    isIsland(x - 1, y);
    isIsland(x, y + 1);
    isIsland(x, y - 1);

    return true;
  }

  function isInBound(x, y) {
    return x >= 0 && x < row && y >= 0 && y < col;
  }
};
