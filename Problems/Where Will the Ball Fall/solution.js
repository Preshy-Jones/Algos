/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  let n = grid.length;
  let m = grid[0].length;
  let resultArray = new Array(grid[0].length);
  resultArray.fill(-1);

  for (let i = 0; i < m; i++) {
    let row;
    let col;
    row = 0;
    col = i;
    while (true) {
      // if we have reached the last row in the grid
      if (row >= n) {
        //we input the result which is the colunn the ball passes through
        resultArray[i] = col;
        //        }
        break;
      } else {
        //if incrementing the current  index does not exceed outside the upper bounds of the defined width of the box and
        // if the current box and the next box to the right are equal to 1 then the ball passes and we move
        //diagonally to the right by incrementing the rows and columns
        if (col + 1 < m && grid[row][col] == 1 && grid[row][col + 1] == 1) {
          row++;
          col++;

          // if decrementing the current index does not go lower than the loew bounds of the box and
          // if the current box and the next box to the left are equal to -1 then the ball passes and we move down
          // diagonally to the left by incrementing the rows and decrementing the columns
        } else if (
          col - 1 >= 0 &&
          grid[row][col] == -1 &&
          grid[row][col - 1] == -1
        ) {
          row++;
          col--;
        } else {
          break;
        }
      }
    }
  }
  return resultArray;
};

console.log(
  findBall([
    [1, 1, 1, -1, -1],
    [1, 1, 1, -1, -1],
    [-1, -1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [-1, -1, -1, -1, 1],
  ])
);
