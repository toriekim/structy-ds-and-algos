/**
 * Write a function, pairProduct, that takes in an array and a
 * target product as arguments. The function should return an
 * array containing a pair of indices whose elements multiply
 * to the given target. The indices returned must be unique.
 *
 * Be sure to return the indices, not the elements themselves.
 *
 * There is guaranteed to be one such pair whose product is the
 * target.
 *
 * EX) pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
 */

/**
 * @param {Array} numbers -> array of numbers
 * @param {number} targetProduct -> resulting product of 2 numbers
 * @returns {Array} -> array of indices of the 2 numbers
 *
 * Guaranteed to be one such pair whose product is the target
 * Shouldn't sort input array b/c we need indices
 *
 * Any negative numbers? No
 *
 * Approach:
 * Initialize map for keeping track of possible pairs
 * Loop through numbers array
 * Calculate pair = targetProduct / numbers[i]
 * If pair is in map, return map[pair], i
 * Else add numbers[i], i to map
 */

const pairProduct = (numbers, targetProduct) => {};

export default pairProduct;
