/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

O input matrix rotated 90 degrees clockwise
I matrix (2D array)
C must rotate in place
E none
*/

const rotate = (matrix) => {
  let n = matrix.length;

  for (let i = 0; i < Math.floor(n / 2) + n % 2; i++) {
      for (let j = 0; j < Math.floor(n / 2); j++) {
         let temp = matrix[n - j - 1][i];
         matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
         matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
         matrix[j][n - i - 1] = matrix[i][j];
         matrix[i][j] = temp;
      }
  }
};