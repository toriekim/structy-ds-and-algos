/**
 * Write a function, intersection, that takes in two arrays,
 * a,b, as arguments. The function should return a new array
 * containing elements that are in both of the two arrays.
 *
 * You may assume that each input array does not contain
 * duplicate elements.
 *
 * EX) intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]
 */

/**
 * @param {Array} a -> array of unique numbers
 * @param {Array} b -> array of unique numbers
 * @returns {Array} -> new array of elements that are in both
 *
 * No duplicate elements in each input array
 * The arrays may or may not be in some order
 * The arrays may not be the same length
 * It's possible that there are no intersections
 *
 * Approach:
 * Create Set from shorter array
 * Initialize results array
 * Loop through longer array and check if it's in the set
 *   If it is, add to results array
 * Return results array
 */

const intersection = (a, b) => {
  const setA = new Set(a);
  const results = [];

  for (let num of b) {
    if (setA.has(num)) results.push(num);
  }

  return results;
};

export default intersection;
