// TRIBONACCI
// -----------------------------------------------------------------
// Write a function tribonacci that takes in a number argument, n,
// and returns the n-th number of the Tribonacci sequence.

// The 0-th and 1-st numbers of the sequence are both 0.

// The 2-nd number of the sequence is 1.

// To generate further numbers of the sequence, calculate the sum
// of previous three numbers.

// Solve this recursively.

// Examples:
// tribonacci(0); // -> 0
// tribonacci(1); // -> 0
// tribonacci(2); // -> 1
// tribonacci(5); // -> 4
// tribonacci(20); // -> 35890

/**
 * tribonacci returns the n-th number in Tribonacci sequence using recursion
 * @param {number} n n-th number
 * @returns {number} n-th number of the sequence
 */

const tribonacci = (n, memo = {}) => {
  // Base cases:
  if (n === 0 || n === 1) return 0;
  if (n === 2) return 1;
  // If n is in memo, return value
  if (n in memo) return memo[n];

  // Otherwise, calculate sum of prev three and add n to memo
  memo[n] =
    tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);
  // Return n's memo value
  return memo[n];
};

export default { tribonacci };
