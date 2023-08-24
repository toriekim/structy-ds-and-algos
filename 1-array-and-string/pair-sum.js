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
 * Approach:
 * sort the numbers array ascending value
 * initalize 2 pointers at start and end of numbers array
 * while loop i < j
 * if sum > target, j--
 * if sum < target, i++
 * if sum = target, return i, j
 */

const pairSum = (numbers, targetSum) => {};
