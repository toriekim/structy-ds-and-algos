// CLOSET CARROT
// ------------------------------------------------------------------
// Write a function, closestCarrot, that takes in a grid, a starting
// row, and a starting column. In the grid, 'X's are walls, 'O's are
// open spaces, and 'C's are carrots. The function should return a
// number representing the length of the shortest path from the
// starting position to a carrot. You may move up, down, left, or
// right, but cannot pass through walls (X). If there is no possible
// path to a carrot, then return -1.

// Example:
// const grid = [
//   ['O', 'O', 'O', 'O', 'O'],
//   ['O', 'X', 'O', 'O', 'O'],
//   ['O', 'X', 'X', 'O', 'O'],
//   ['O', 'X', 'C', 'O', 'O'],
//   ['O', 'X', 'X', 'O', 'O'],
//   ['C', 'O', 'O', 'O', 'O'],
// ];

// closestCarrot(grid, 1, 2); // -> 4

/**
 * Returns the shortest path to a carrot from starting position in grid
 * @param   {Array}  grid     2D array w/ X (wall), O (space), and C (carrot)
 * @param   {Number} startRow Index of starting row
 * @param   {Number} startCol Index of starting col
 * @returns {Number}          The shortest path to C or -1 if not found
 */

// Shortest path -> Breath-first search
// Why -> To explore all directions equally from starting position
const closestCarrot = (grid, startRow, startCol) => {
  // Initialize Set to keep track of visited positions
  const startPos = startRow + ',' + startCol;
  const visited = new Set([startPos]);
  // Create queue for breadth-first search with starting position & distance
  const queue = [[startRow, startCol, 0]];

  // Explore grid while there are positions to explore in queue
  while (queue.length) {
    // Process positions off the queue
    const [row, col, distance] = queue.shift();

    // If the current position is a carrot, return the distance
    if (grid[row][col] === 'C') return distance;

    // Otherwise, explore the deltas (up, down, left, right)
    const deltas = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    // Loop through the deltas to process neighbors of current position
    for (const [deltaRow, deltaCol] of deltas) {
      const neighborRow = row + deltaRow;
      const neighborCol = col + deltaCol;
      const neighbor = neighborRow + ',' + neighborCol;

      const rowInbounds = 0 <= neighborRow && neighborRow < grid.length;
      const colInbounds = 0 <= neighborCol && neighborCol < grid[0].length;

      // If the neighbor is inbounds, hasn't been visited, and is not a wall...
      if (
        rowInbounds &&
        colInbounds &&
        !visited.has(neighbor) &&
        grid[neighborRow][neighborCol] !== 'X'
      ) {
        // Add neighbor position to the visited set
        visited.add(neighbor);
        // And add neighbor to the queue, incrementing distance by 1
        queue.push([neighborRow, neighborCol, distance + 1]);
      }
    }
  }

  // If we're done exploring and haven't found a path to a carrot, return -1
  return -1;
};

// r = number of rows
// c = number of columns
// Time: O(rc)
// Space: O(rc)

export default { closestCarrot };
