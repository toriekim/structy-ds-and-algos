// CREATE COMBINATIONS
// -----------------------------------------------------------------
// Write a function, createCombinations, that takes in an array and
// a length as arguments. The function should return a 2D array
// representing all of the combinations of the specifized length.

// The items within the combinations and the combinations
// themselves may be returned in any order.

// You may assume that the input array contains unique elements and
// 1 <= k <= items.length.

// Example:
// createCombinations(["a", "b", "c"], 2); // ->
// [
//   [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'b', 'c' ]
// ]

/**
 * Returns a list of all combinations possible from input array of
 * the specified length
 * @param   {Array}  items Array of unique elements
 * @param   {Number} k     Length of possible combo, 1 <= k <= items.length
 * @returns {Array}        2D array of all combinations w/ length of k
 */

const createCombinations = (items, k) => {
  // Base case: If there aren't enough items to fulfill combo w/ length of k,
  // return empty array (there are no possible combinations)
  if (items.length < k) return [];
  // Base case: If k is 0, there's 1 possible combination (an empty array)
  if (k === 0) return [[]];

  // Store first element of array in variable
  const first = items[0];
  // Initialize an array to hold all combinations including first element
  const combosWithFirst = [];
  // Loop through combinations not including first w/ length of k - 1 to add
  // the first element and add to combosWithFirst array
  for (let combo of createCombinations(items.slice(1), k - 1)) {
    combosWithFirst.push([first, ...combo]);
  }
  // Get all possible combinations not including the first element
  const combosWithoutFirst = createCombinations(items.slice(1), k);
  // Return all combinations with and without the first element
  return [...combosWithFirst, ...combosWithoutFirst];
};

// n = length of items
// k = target length
// Time: ~O(n choose k)
// Space: ~O(n choose k)
// Note: "n Choose k" refers to the binomial coefficient

export default { createCombinations };
