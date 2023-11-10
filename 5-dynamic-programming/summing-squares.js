// SUMMING SQUARES
// -----------------------------------------------------------------
// Write a function, summingSquares, that takes a target number as
// an argument. The function should return the minimum number of
// perfect squares that sum to the target. A perfect square is a
// number of the form (i*i) where i >= 1.

// For example: 1, 4, 9, 16 are perfect squares, but 8 is not
// perfect square.

// Given 12: summingSquares(12) -> 3
// The minimum squares required for 12 is three, by doing 4 + 4 + 4.
// Another way to make 12 is 9 + 1 + 1 + 1, but that requires four perfect squares.

// Example:
// summingSquares(8); // -> 2

/**
 * Returns the minimum number of perfect squares that sum to the
 * input target
 * @param  {Number} target The target sum
 * @return {Number}        The min # of perfect squares
 */

const summingSquares = (n, memo = {}) => {
  // If n is in memo, return value
  if (n in memo) return memo[n];
  // Base case: If n is 0, return 0
  if (n === 0) return 0;

  // Create variable to hold current min squares
  let min = Infinity;
  // Explore possible squares using a loop and Math.sqrt(n)
  for (let i = 1; i <= Math.sqrt(n); i++) {
    const square = i * i;
    // Recursive call to find possible squares
    // Shrink input by subtracting current square in loop
    const possible = 1 + summingSquares(n - square, memo);
    // Reassign min -> take the min between running and current
    min = Math.min(min, possible);
  }

  // Add current to memo
  memo[n] = min;
  return min;
};

export default { summingSquares };
