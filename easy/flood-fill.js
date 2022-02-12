/*
    Time: O(n)
    Space: O(n)
    Note: DFS, check grid bounds and change each pixel if the value of pixel matches the origin color.
    URL: https://leetcode.com/problems/flood-fill/
 */
var floodFill = function (image, sr, sc, newColor) {
  let originColor = image[sr][sc];

  colorImage(image, sr, sc);

  return image;

  function colorImage(grid, row, col) {
    if (!isInBounds(row, col)) {
      return;
    }

    if (grid[row][col] === newColor) {
      return;
    }

    if (grid[row][col] === originColor) {
      grid[row][col] = newColor;

      colorImage(grid, row, col - 1);
      colorImage(grid, row, col + 1);
      colorImage(grid, row - 1, col);
      colorImage(grid, row + 1, col);
    }
  }

  function isInBounds(row, col) {
    if (
      row <= image.length - 1 &&
      row >= 0 &&
      col <= image[0].length &&
      col >= 0
    ) {
      return true;
    } else {
      return false;
    }
  }
};
