// PERMUTATIONS
// -----------------------------------------------------------------
// Write a function, permutations, that takes in an array an
// argument. The function should return a 2D array where each
// subarray represents one of the possible permutations of the array.

// The subarrays may be returned in any order.

// You may assume that the input array contains unique elements.

// Example:
// permutations(['a', 'b', 'c']); // ->
// [
//   [ 'a', 'b', 'c' ],
//   [ 'b', 'a', 'c' ],
//   [ 'b', 'c', 'a' ],
//   [ 'a', 'c', 'b' ],
//   [ 'c', 'a', 'b' ],
//   [ 'c', 'b', 'a' ]

/**
 * Returns a 2D array where each subarray is a possible permutation
 * of the input array (order matters)
 * @param   {Array} items Array of unique elements
 * @returns {Array}       2D array of all possible permutations
 */

const permutations = (items) => {
  // Base case: If items is empty, return nested empty array
  if (items.length === 0) return [[]];

  // Take the first element & pass the rest into recursive call
  const first = items[0];
  const perms = permutations(items.slice(1));

  // Initialize a variable to hold all possible permutations
  const allPerms = [];
  // Loop through permutations returned from recursive call without first element
  for (let perm of perms) {
    // We need to access the index to insert the first element at every possible position
    for (let i = 0; i <= perm.length; i++) {
      // Insert the first element at the current position & add to result
      allPerms.push([...perm.slice(0, i), first, ...perm.slice(i)]);
    }
  }
  // Return all possible permutations of input array
  return allPerms;
};

// n = length of items array
// Time: ~O(n!)
// Space: ~O(n!)

export default { permutations };
