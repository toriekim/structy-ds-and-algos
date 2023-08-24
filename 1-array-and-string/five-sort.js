/**
 * Write a function, fiveSort, that takes in an array of numbers
 * as an argument. The function should rearrange elements of the
 * array such that all 5s appear at the end. Your function
 * should perform this operation in-place by mutating the
 * original array. The function should return the array.
 *
 * Elements that are not 5 can appear in any order in the
 * output, as long as all 5s are at the end of the array.
 *
 * EX) fiveSort([12, 5, 1, 5, 12, 7]);
 *     // -> [12, 7, 1, 12, 5, 5]
 */

/**
 * @param {Array} nums -> array of numbers
 * @returns {Array} nums -> mutated input array
 *
 * All elements that are 5 at the end of the array
 * All other elements can be in any order
 * In-place mutations
 *
 * Approach:
 * 2 pointers -> i: start front, j: starts back
 * while loop i < j
 * check if nums[i] === 5
 *   if it is 5, swap with nums[j] & j--, i++
 *   else, i++
 * return nums
 */

// n = array size (length of array)
// Time Complexity: O(n)
// Space Complexity: O(1) -> mutating input array

const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[j] === 5) {
      j--;
    } else if (nums[i] === 5) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j--;
      i++;
    } else {
      i++;
    }
  }
  return nums;
};

export default fiveSort;
