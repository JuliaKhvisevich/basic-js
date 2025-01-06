const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    result.push(new Array(cols).fill(0));
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === true) {
        for (let dRow = -1; dRow <= 1; dRow++) {
          for (let dCol = -1; dCol <= 1; dCol++) {
            if (dRow === 0 && dCol === 0) continue;

            const newRow = row + dRow;
            const newCol = col + dCol;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
              result[newRow][newCol]++;
            }
          }
        }
      }
    }
  }

  return result;
}


module.exports = {
  minesweeper
};
