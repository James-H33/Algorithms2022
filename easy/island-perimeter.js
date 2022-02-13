/**
    Time: O(m + n)
    Space: O(m + n)
    Note: Matrix problem, Find start positions by iterating the grid. Use start position to do DFS and determine whether each cell visited
    is a perimeter or not. Mark cells as visited.
    URL: https://leetcode.com/problems/island-perimeter/
 */
var islandPerimeter = function (grid) {
  let rowLen = grid.length;
  let colLen = grid[0].length;
  let visited = new Map();
  let startRow = 0;
  let startCol = 0;

  let perimeterCount = 0;

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      const cell = grid[i][j];

      if (cell === 1) {
        startRow = i;
        startCol = j;
        break;
      }
    }
  }

  getPerimeters(startRow, startCol);

  return perimeterCount;

  function getPerimeters(row, col) {
    if (hasBeenVisited(row, col)) {
      return;
    }

    visited[makeKey(row, col)] = true;

    if (isPerimeter(row, col - 1)) {
      perimeterCount++;
    } else {
      getPerimeters(row, col - 1);
    }

    if (isPerimeter(row, col + 1)) {
      perimeterCount++;
    } else {
      getPerimeters(row, col + 1);
    }

    if (isPerimeter(row - 1, col)) {
      perimeterCount++;
    } else {
      getPerimeters(row - 1, col);
    }

    if (isPerimeter(row + 1, col)) {
      perimeterCount++;
    } else {
      getPerimeters(row + 1, col);
    }
  }

  function isInBounds(row, col) {
    return row < rowLen && row >= 0 && col < colLen && col >= 0;
  }

  function hasBeenVisited(row, col) {
    const key = makeKey(row, col);

    return key in visited;
  }

  function makeKey(row, col) {
    return `${row}-${col}`;
  }

  function isPerimeter(row, col) {
    if (isInBounds(row, col)) {
      const cell = grid[row][col];

      return cell === 0;
    } else {
      return true;
    }
  }
};
