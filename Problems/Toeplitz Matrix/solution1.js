/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  // a function to check from any given coordinates row,col on the matrix if it is equal to all descending diagonals
  let isDiagonal = (row, col) => {
    let value = matrix[row][col];
    console.log(value);

    while (row < matrix.length && col < matrix[0].length) {
      if (matrix[row][col] !== value) {
        return false;
      }
      row++;
      col++;
    }
    return true;
  };

  // loop through the first row of the matrix and determine if the each value is equal to all descending diagonals
  for (let col = 0; col < matrix[0].length; col++) {
    if (!isDiagonal(0, col)) {
      return false;
    }
  }

  // loop through the first column of the matrix and determine if the each value is equal to all descending diagonals, we exclude the first element in the column  because we already checked our initial iteration covered it
  for (let row = 1; row < matrix.length; row++) {
    if (!isDiagonal(row, 0)) {
      return false;
    }
  }
  return true;
};

console.log(
  isToeplitzMatrix([
    [1, 2],
    [2, 2],
  ])
);
