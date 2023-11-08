// KNIGHT ATTACK
// -----------------------------------------------------------------
// A knight and a pawn are on a chess board. Can you figure out the
// minimum number of moves required for the knight to travel to the
// same position of the pawn? On a single move, the knight can move
// in an "L" shape; two spaces in any direction, then one space in
// a perpendicular direction. This means that on a single move, a
// knight has eight possible positions it can move to.

// The function should return a number representing the minimum
// number of moves required for the knight to land ontop of the
// pawn. The knight cannot move out-of-bounds of the board. You can
// assume that rows and columns are 0-indexed. This means that if
// n = 8, there are 8 rows and 8 columns numbered 0 to 7. If it is
// not possible for the knight to attack the pawn, then return null.

// Example:
// knightAttack(8, 1, 1, 2, 2); // -> 2

/**
 * knightAttack
 * @param   {number}   n    The length of the chess board
 * @param   {number}   kr   The starting row of the knight
 * @param   {number}   kc   The starting column of the knight
 * @param   {number}   pr   The row of the pawn
 * @param   {number}   pc   The column of the pawn
 * @returns {(number|null)} Minimum moves from src to dest or null
 */

const knightAttack = (n, kr, kc, pr, pc) => {
  // Create visited Set to keep track of nodes
  const visited = new Set();
  // Add src node (knight's position) to visited
  visited.add(kr + ',' + kc);

  // Breadth-first search w/ queue - mark distance from src node
  const queue = [[kr, kc, 0]];
  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();
    // If the current node is dest node (pawn's position), return distance
    if (row === pr && col === pc) return distance;

    // Explore neighbor nodes (knight's moves)
    const deltas = [
      [-2, 1],
      [-2, -1],
      [2, 1],
      [2, -1],
      [-1, 2],
      [-1, -2],
      [1, 2],
      [1, -2],
    ];
    for (let delta of deltas) {
      const [deltaRow, deltaCol] = delta;
      const neighborRow = row + deltaRow;
      const neighborCol = col + deltaCol;
      // Check that knight's move is inbounds of board
      const neighborInbounds = isInbounds(n, neighborRow, neighborCol);
      const neighborPos = neighborRow + ',' + neighborCol;

      // If the neighbor position is inbounds & not in visited...
      if (neighborInbounds && !visited.has(neighborPos)) {
        // Add to queue & visited Set
        queue.push([neighborRow, neighborCol, distance + 1]);
        visited.add(neighborPos);
      }
    }
  }
  // If there are no moves to pawn, return null
  return null;
};

const isInbounds = (length, row, col) => {
  const rowInbounds = 0 <= row && row < length;
  const colInbounds = 0 <= col && col < length;
  return rowInbounds && colInbounds;
};

export default { isInbounds, knightAttack };
