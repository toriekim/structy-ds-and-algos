// MINIMUM ISLAND
// ------------------------------------------------------------------
// Write a function, minimumIsland, that takes in a grid containing
// Ws and Ls. W represents water and L represents land. The function
// should return the size of the smallest island. An island is a
// vertically or horizontally connected region of land.

// You may assume that the grid contains at least one island.

// Example:
// const grid = [
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['W', 'W', 'L', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['L', 'L', 'W', 'W', 'W'],
// ];

// minimumIsland(grid); // -> 2

/**
 * Returns the size of the smallest island in the grid
 * @param   {Array}  grid  2D array of Ws and Ls
 * @returns {Number}       Size of the smallest island
 */

const minimumIsland = (grid) => {
  // Initialize Set to keep track of positions visited in grid
  const visited = new Set();
  // Set smallest to Infinity to properly handle smallest case
  let smallestIsland = Infinity;

  // Loop through each node in the grid
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // Explore for land and if found, get size of island
      const size = explore(grid, row, col, visited);
      // If the size is greater than 0 and less than current smallest
      if (size > 0 && size < smallestIsland) {
        // re-assign smallest to size returned from explore
        smallestIsland = size;
      }
    }
  }
  // Return the size of smallest island in grid
  return smallestIsland;
};

const explore = (grid, row, col, visited) => {
  // Make sure current position is inbounds
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return 0;

  // If current position is water, return
  if (grid[row][col] === 'W') return 0;

  // Check if current position has been visited already
  const pos = row + ',' + col;
  if (visited.has(pos)) return 0;
  // If not, add to visited Set
  visited.add(pos);

  // At this point, we've found land and have to explore
  // Set size to 1 (counting current pos) and explore deltas
  let size = 1;
  size += explore(grid, row - 1, col, visited);
  size += explore(grid, row + 1, col, visited);
  size += explore(grid, row, col - 1, visited);
  size += explore(grid, row, col + 1, visited);
  // Return size of current island
  return size;
};

export default { minimumIsland };
