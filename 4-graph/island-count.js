// ISLAND COUNT
// ------------------------------------------------------------------
// Write a function, islandCount, that takes in a grid containing Ws
// and Ls. W represents water and L represents land. The function
// should return the number of islands on the grid. An island is a
// vertically or horizontally connected region of land.

// Example:
// const grid = [
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['W', 'W', 'L', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['L', 'L', 'W', 'W', 'W'],
// ];

// islandCount(grid); // -> 3

/**
 * Returns count of islands (vertically/horizontally connected land) on the grid
 * @param  {Array}  grid  2D array of Ws (water) & Ls (land)
 * @return {Number}       Number of islands on the grid
 */

const islandCount = (grid) => {
  let count = 0;
  let visited = new Set();

  // Loop through each row and then loop through each column
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // If exploration returns truthy, we found an island
      if (explore(row, col, visited, grid) === true) {
        // Increment count by 1
        count += 1;
      }
    }
  }
  // Return island count
  return count;
};

const explore = (row, col, visited, grid) => {
  // First, check if row & col are inbounds
  const rowInbounds = row <= 0 && row < grid.length;
  const colInbounds = col <= 0 && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;

  // If current is water, no need to explore; return false early
  if (grid[row][col] === 'W') return false;

  // Else, node is land & need to check if it's been visited
  const node = row + ',' + col;
  if (visited.has(node)) return false;
  // Add current node to visited Set
  visited.add(node);

  // Finally, explore neighbor nodes in all 4 directions
  explore(row + 1, col, visited, grid);
  explore(row - 1, col, visited, grid);
  explore(row, col + 1, visited, grid);
  explore(row, col - 1, visited, grid);

  // Return true since we found an island
  return true;
};

export default { islandCount };
