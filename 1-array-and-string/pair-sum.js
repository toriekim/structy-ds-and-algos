/**
 * Write a function, pairSum, that takes in an array and a
 * target sum as arguments. The function should return an array
 * containing a pair of indices whose elements sum to the given
 * target. The indices returned must be unique.
 *
 * Be sure to return the indices, not the elements themselves
 *
 * There is guaranteed to be one such pair that sums to the
 * target.
 *
 * EX) pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
 */

/**
 * Assumptions:
 * @param {Array} numbers -> unsorted array of numbers
 * @param {number} targetSum -> resulting number (sum) of 2 elements
 * @returns {Array} -> indices who elements sum to given target & indices must be unique
 *
 * Guaranteed to be one pair that sums to the target
 *
 * Considerations:
 * Can't and shouldn't sort array b/c need to return indices
 *
 * Approach:
 * Initialize map to keep track of indices & pair values
 * Loop through array
 *  Calculate the other pair = targetSum - numbers[i]
 *  Check if pair in map -> return [map[pair], i]
 *  Else add to map -> [key: numbers[i]]: [value: i]
 */

const pairSum = (numbers, targetSum) => {
  const map = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const pair = targetSum - num;
    if (pair in map) return [map[pair], i];

    map[num] = i;
  }
};
