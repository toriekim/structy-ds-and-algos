// KNIGHTLY NUMBER
// -----------------------------------------------------------------
// A knight is on a chess board. Can you figure out the total
// number of ways the knight can move to a target position in
// exactly m moves? On a single move, the knight can move in an "L"
// shape; two spaces in any direction, then one space in a
// perpendicular direction. This means that on a single move, a
// knight has eight possible positions it can move to.

// The function should return the number of different ways the
// knight can move to the target in exactly m moves. The knight can
// revisit positions of the board if needed. The knight cannot move
// out-of-bounds of the board. You can assume that rows and columns
// are 0-indexed. This means that if n = 8, there are 8 rows and 8
// columns numbered 0 to 7.

// Example:
// knightlyNumber(8, 2, 4, 4, 5, 5); // -> 2

/**
 * Returns the number of different ways the knight can move to the
 * target in exactly m moves
 * @param   {number} n  The length of the chess board
 * @param   {number} m  The number of moves that must be used
 * @param   {number} kr The starting row of the knight
 * @param   {number} kc The starting column of the knight
 * @param   {number} pr The target row
 * @param   {number} pc The target column
 * @returns {number}    The number of different ways src to dest
 */

const knightlyNumber = (n, m, kr, kc, pr, pc, memo = {}) => {
  // If this position has been explored before, return value
  const key = m + ',' + kr + ',' + kc;
  if (key in memo) return memo[key];

  // Check if knight position is in bounds of board
  const rowInbounds = 0 <= kr && kr < n;
  const colInbounds = 0 <= kc && kc < n;
  if (!rowInbounds || !colInbounds) return 0;

  // If no moves left, check if current position is target position
  if (m === 0) {
    // If it is, return 1 (found one way to get to target)
    if (kr === pr && kc === pc) return 1;
    // Else return 0 (no way found)
    else return 0;
  }

  // Initialize a variable to keep track of ways from this position
  let count = 0;
  // Explore neighbors of this position (possible knight moves)
  const neighbors = [
    [kr + 1, kc + 2],
    [kr + 1, kc - 2],
    [kr - 1, kc + 2],
    [kr - 1, kc - 2],
    [kr + 2, kc + 1],
    [kr + 2, kc - 1],
    [kr - 2, kc + 1],
    [kr - 2, kc - 1],
  ];

  for (const [neighborRow, neighborCol] of neighbors) {
    // Add the possible way to the running count
    count += knightlyNumber(n, m - 1, neighborRow, neighborCol, pr, pc, memo);
  }

  // Add current position and moves to memo before returning count
  memo[key] = count;
  return count;
};

export default { knightlyNumber };

// n = length of the board
// m = number of moves
// Time: O(m * n^2)
// Space: O(m * n^2)
