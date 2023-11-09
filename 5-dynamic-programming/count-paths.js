// COUNT PATHS
// -----------------------------------------------------------------
// Write a function, countPaths, that takes in a grid as an argument.
// In the grid, 'X' represents walls and 'O' represents open spaces.
// You may only move down or to the right and cannot pass through
// walls. The function should return the number of ways possible to
// travel from the top-left corner of the grid to the bottom-right
// corner.

// Example:
// const grid = [
//   ["O", "O"],
//   ["O", "O"],
// ];
// countPaths(grid); // -> 2

/**
 * Returns the number of ways possible to travel from the top-left to
 * the bottom-right corner of the grid
 * @param  {Array} grid 2D array representing grid w/ 'X' and 'O'
 * @return {Number}     Number of paths possible
 */

const countPaths = (grid, row = 0, col = 0, memo = {}) => {
  // If current position is in memo, return value
  const pos = row + ',' + col;
  if (pos in memo) return memo[pos];

  // If we hit wall of grid or current position is a wall, return 0
  if (row === grid.length || col === grid[0].length || grid[row][col] === 'X')
    return 0;

  // If current position is the target (bottom right corner), return 1
  const targetRow = grid.length - 1;
  const targetCol = grid[0].length - 1;
  if (row === targetRow && col === targetCol) return 1;

  // Memo current position's possible paths (can only go down or right)
  const downCount = countPaths(grid, row + 1, col, memo);
  const rightCount = countPaths(grid, row, col + 1, memo);
  memo[pos] = downCount + rightCount;
  return memo[pos];
};

// r = # rows
// c = # columns
// Time: O(r*c)
// Space: O(r*c)

export default { countPaths };
