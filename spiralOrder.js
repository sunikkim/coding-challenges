/*

Given an m x n matrix, return all elements of the matrix in spiral order.

O matrix in spiral order (1D array)
I 2D array of integers
C none
E none

order of traversal: right, down, left, up
traverse in that order while shifting boundaries inwards after every iteration, until output array contains every element from input array (using array lengths to check)

O(M x N) time complexity
O(1) space complexity
*/

const spiralOrder = (matrix) => {
  let output = [];

  const rows = matrix.length;
  const columns = matrix[0].length;

  let up = 0;
  let left = 0;
  let right = columns - 1;
  let down = rows - 1;

  while (output.length < rows * columns) {
      for (let col = left; col <= right; col++) {
          output.push(matrix[up][col]);
      }

      for (let row = up + 1; row <= down; row++) {
          output.push(matrix[row][right]);
      }

      if (up !== down) {
          for (let col = right - 1; col >= left; col--) {
              output.push(matrix[down][col]);
          }
      }

      if (left !== right) {
          for (let row = down - 1; row > up; row--) {
              output.push(matrix[row][left]);
          }
      }

      left++;
      right--;
      up++;
      down--;
  }

  return output;
};
