// MAX PATH SUM
// -----------------------------------------------------------------
// Write a function, maxPathSum, that takes in a grid as an argument.
// The function should return the maximum sum possible by traveling
// a path from the top-left corner to the bottom-right corner. You
// may only travel through the grid by moving down or right.

// You can assume that all numbers are non-negative.

// Example:
// const grid = [
//   [1, 3, 12],
//   [5, 1, 1],
//   [3, 6, 1],
// ];
// maxPathSum(grid); // -> 18

/**
 * Calculates max sum possible by traveling a path from top-left corner
 * to bottom-right corner in a grid
 * @param   {Array}  grid 2D array representing a grid
 * @returns {number}      The maximum sum possible of a path
 */

const maxPathSum = (grid, row = 0, col = 0, memo = {}) => {
  // If current position is in memo, return value
  const pos = row + ',' + col;
  if (pos in memo) return memo[pos];

  // Base case: If row or col position hits a wall (out of bounds)
  if (row === grid.length || col === grid[0].length) return -Infinity;
  // Base case: Hit target (bottom right corner), return its value
  if (row === grid.length - 1 && col === grid[0].length - 1)
    return grid[row][col];

  // Can go either down or right -> get those path sums
  const downSum = maxPathSum(grid, row + 1, col, memo);
  const rightSum = maxPathSum(grid, row, col + 1, memo);
  // Memo current position with current sum plus max of down or right
  memo[pos] = grid[row][col] + Math.max(downSum, rightSum);
  // Return current position's max sum
  return memo[pos];
};

export default maxPathSum;
