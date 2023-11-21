//  SUBSETS
// -----------------------------------------------------------------
// Write a function, subsets, that takes in an array as an
// argument. The function should return a 2D array where each
// subarray represents one of the possible subsets of the array.

// The elements within the subsets and the subsets themselves may
// be returned in any order.

// You may assume that the input array contains unique elements.

// Example:
// subsets(['a', 'b']); // ->
// [
//   [],
//   [ 'b' ],
//   [ 'a' ],
//   [ 'a', 'b' ]
// ]

/**
 * Returns a 2D array where each subarray is a possible subset of
 * the input array (order doesn't matter)
 * @param   {Array} elements Array of unique elements
 * @returns {Array}          2D array of possible subsets
 */

const subsets = (elements) => {
  // If elements array is empty, return nested empty array
  if (elements.length === 0) return [[]];

  // Create variables to hold first element and remaining elements
  const first = elements[0];
  const remaining = elements.slice(1);
  // Get subsets of remaining elements without first
  const subsetsWithoutFirst = subsets(remaining);
  // Add first element to subsets without first
  const subsetsWithFirst = subsetsWithoutFirst.map((subset) => [
    first,
    ...subset,
  ]);
  // Return all possible combinations
  return [...subsetsWithFirst, ...subsetsWithoutFirst];
};

// n = length of elements array
// Time: ~O(2^n)
// Space: ~O(2^n)

export default { subsets };
