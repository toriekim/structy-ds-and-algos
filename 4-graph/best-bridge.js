// BEST BRIDGE
// -----------------------------------------------------------------
// Write a function, bestBridge, that takes in a grid as an
// argument. The grid contains water (W) and land (L). There are
// exactly two islands in the grid. An island is a vertically or
// horizontally connected region of land. Return the minimum length
// bridge needed to connect the two islands. A bridge does not need
// to form a straight line.

// Example:
// const grid = [
//   ["W", "W", "W", "L", "L"],
//   ["L", "L", "W", "W", "L"],
//   ["L", "L", "L", "W", "L"],
//   ["W", "L", "W", "W", "W"],
//   ["W", "W", "W", "W", "W"],
//   ["W", "W", "W", "W", "W"],
// ];
// bestBridge(grid); // -> 1

/**
 * bestBridge returns the min length to connect the two islands in grid
 * @param   {Array}  grid 2D array representing a grid of water and land
 * @returns {Number}      Minimum length of "bridge"
 */

// Approach:
// 1. Find one island in the grid
// 2. BFS toward the other island -> queue
// 3. Count distance

const bestBridge = (grid) => {
  // 1. Find one island in the grid
  let mainIsland;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // Call recursive function to travese grid to find island
      // Set is passed in to find all the positions in island
      const potentialIsland = traverseIsland(grid, row, col, new Set());
      // If the returned Set is populated, set it as our mainIsland
      if (potentialIsland.size > 0) {
        mainIsland = potentialIsland;
      }
    }
  }
  // 2. Now that we have our mainIsland starting point, time to BFS
  // Create visited Set to keep track of nodes we've processed
  const visited = new Set(mainIsland);
  const queue = [];
  // Loop through mainIsland Set to populate our queue with starting positions
  for (let pos of mainIsland) {
    // Split position to get row & col (convert string to number)
    const [row, col] = pos.split(',').map(Number);
    queue.push([row, col, 0]);
  }

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();

    const pos = row + ',' + col;
    // If we find land that is not part of the mainIsland, we found the other island!
    if (grid[row][col] === 'L' && !mainIsland.has(pos)) {
      // Return the distance and decrement 1 (don't count island)
      return distance - 1;
    }

    // Explore neighboring positions in grid
    const deltas = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let delta of deltas) {
      const [deltaRow, deltaCol] = delta;
      const neighborRow = row + deltaRow;
      const neighborCol = col + deltaCol;
      const neighborPos = neighborRow + ',' + neighborCol;
      // If neighbor is in bounds and has not been visited yet...
      if (
        isInbounds(grid, neighborRow, neighborCol) &&
        !visited.has(neighborPos)
      ) {
        // Add to visited Set and the queue
        visited.add(neighborPos);
        queue.push([neighborRow, neighborCol, distance + 1]);
      }
    }
  }
};

// Helper function to make sure position is in bounds on grid
const isInbounds = (grid, row, col) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  return rowInbounds && colInbounds;
};

// Recursive traversal to find one island and mark all positions to Set
const traverseIsland = (grid, row, col, visited) => {
  if (!isInbounds(grid, row, col) || grid[row][col] === 'W') return visited;

  const pos = row + ',' + col;
  if (visited.has(pos)) return visited;
  visited.add(pos);

  traverseIsland(grid, row - 1, col, visited);
  traverseIsland(grid, row + 1, col, visited);
  traverseIsland(grid, row, col - 1, visited);
  traverseIsland(grid, row, col + 1, visited);

  return visited;
};

// r = # of rows
// c = # of columns
// Time: O(rc)
// Space: O(rc)

export default { bestBridge, traverseIsland, isInbounds };
