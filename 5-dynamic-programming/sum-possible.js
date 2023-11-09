// SUM POSSIBLE
// -----------------------------------------------------------------
// Write a function sumPossible that takes in an amount and an array
// of positive numbers. The function should return a boolean
// indicating whether or not it is possible to create the amount by
// summing numbers of the array. You may reuse numbers of the array
// as many times as necessary.

// You may assume that the target amount is non-negative.

// Examples:
// sumPossible(8, [5, 12, 4]); // -> true, 4 + 4
// sumPossible(15, [6, 2, 10, 19]); // -> false

/**
 * sumPossible returns a boolean indicating whether or not it is possible
 * to create the amount by summing numbers of the array (can reuse numbers)
 * @param   {number} amount Target sum amount
 * @param   {Array}  array  Array of positive numbers
 * @returns {boolean}       Whether or not it is possible to sum
 */

const sumPossible = (amount, numbers, memo = {}) => {
  // Base case: If amount is 0, sum is possible
  if (amount === 0) return true;
  // Base case: If amount is negative, it's not possible
  if (amount < 0) return false;
  // If amount is in memo, return the value
  if (amount in memo) return memo[amount];

  // Otherwise, iterate through numbers and check possibilities
  for (let num of numbers) {
    // If recursive calls return true, sum is possible
    if (sumPossible(amount - num, numbers, memo)) {
      // Add to memo and return true
      memo[amount] = true;
      return true;
    }
  }
  // If no recursive calls return true, sum isn't possible
  // Memo the current amount and return false
  memo[amount] = false;
  return false;
};

// a = amount
// n = length of numbers
// Time: O(a*n)
// Space: O(a)

export default { sumPossible };
