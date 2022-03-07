/*
    Time: O(n)
    Space: O(1)
    Note: 
    URL: https://leetcode.com/problems/rotate-image/
 */
var rotate = function (matrix) {
  let rowStart = 0;
  let colStart = 0;
  let rowEnd = matrix.length - 1;
  let colEnd = matrix[0].length - 1;
  let offset = 0;

  let rotations = matrix.length - 1;
  let startingRotations = matrix.length - 1;

  while (rotations >= 0) {
    mapInputs();

    offset++;
    rotations--;

    if (rotations === 0) {
      offset = 0;
      rowStart++;
      colStart++;
      rowEnd--;
      colEnd--;
      rotations = startingRotations - 2;
      startingRotations = rotations;
    }
  }

  function mapInputs() {
    let top = matrix[rowStart][colStart + offset];
    let right = matrix[rowStart + offset][colEnd];
    let bottom = matrix[rowEnd][colEnd - offset];
    let left = matrix[rowEnd - offset][colStart];

    matrix[rowStart][colStart + offset] = left;
    matrix[rowStart + offset][colEnd] = top;
    matrix[rowEnd][colEnd - offset] = right;
    matrix[rowEnd - offset][colStart] = bottom;
  }
};
