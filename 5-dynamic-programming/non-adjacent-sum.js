// NON ADJACENT SUM
// -----------------------------------------------------------------
// Write a function, nonAdjacentSum, that takes in an array of
// numbers as an argument. The function should return the maximum
// sum of non-adjacent elements in the array. There is no limit on
// how many elements can be taken into the sum as long as they are
// not adjacent.

// For example, given: [2, 4, 5, 12, 7]
// The maximum non-adjacent sum is 16, because 4 + 12.
// 4 and 12 are not adjacent in the array.

// const nums = [2, 4, 5, 12, 7];
// nonAdjacentSum(nums); // -> 16

/**
 * `nonAdjacentSum` returns the max sum of non-adjacent elements in
 * input array. No limit to how many elements can be taken into the
 * sum as long as they are not adjacent.
 * @param   {Array}  nums Array of numbers
 * @returns {Number}      Maximum sum of non-adjacent elements
 */

// Brute force -> Will time out; non efficient solution
// Don't want to be creating a new array with each call
// Time: O(2^n) | Space: O(n)
// const nonAdjacentSum = (nums, i = 0, memo = {}) => {
//   if (nums.length === 0) return 0

//   const include = nums[0] + nonAdjacentSum(nums.slice(2))
//   const exclude = nonAdjacentSum(nums.slice(1))

//   return Math.max(include, exclude)
// };

// Optimized -> Dynamic Programming memoization using index
const nonAdjacentSum = (nums, i = 0, memo = {}) => {
  // If index path has already been computed, return value
  if (i in memo) return memo[i];
  // Base case: If i is out of bounds, return 0 (nothing to add)
  if (i >= nums.length) return 0;

  // 2 decisions: Include first element or exclude first element
  const include = nums[i] + nonAdjacentSum(nums, i + 2, memo);
  const exclude = nonAdjacentSum(nums, i + 1, memo);

  // Add current element to memo with max val from two subtrees
  memo[i] = Math.max(include, exclude);
  return memo[i];
};

// n = length of nums
// Time: O(n)
// Space: O(n)

export default { nonAdjacentSum };
