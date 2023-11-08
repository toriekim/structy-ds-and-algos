// FIB
// -----------------------------------------------------------------
// Write a function `fib` that takes in a number argument, n, and
// returns the n-th number of the Fibonacci sequence.

// The 0-th number of the sequence is 0.

// The 1-st number of the sequence is 1.

// To generate further numbers of the sequence, calculate the sum
// of previous two numbers.

// Solve this recursively.

// Examples:
// fib(0); // -> 0
// fib(1); // -> 1
// fib(2); // -> 1
// fib(3); // -> 2
// fib(46); // -> 1836311903

/**
 * fib returns the n-th number in Fibonacci sequence using recursion
 * @param   {number} n n-th number
 * @returns {number}   n-th number value in sequence
 */

const fib = (n, memo = {}) => {
  // Base case: If n is 0 or 1, return self
  if (n === 0 || n === 1) return n;
  // If n is in memo, return value
  if (n in memo) return memo[n];

  // Else, add n to memo -> add previous 2 nums
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  // Return memo value
  return memo[n];
};

export default { fib };
