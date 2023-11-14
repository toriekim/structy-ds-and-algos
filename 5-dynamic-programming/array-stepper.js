// ARRAY STEPPER
// -----------------------------------------------------------------
// Write a function, arrayStepper, that takes in an array of
// numbers as an argument. You start at the first position of the
// array. The function should return a boolean indicating whether
// or not it is possible to reach the last position of the array.
// When situated at some position of the array, you may take a
// maximum number of steps based on the number at that position.

// For example, given:
//     idx =  0  1  2  3  4  5
// numbers = [2, 4, 2, 0, 0, 1]

// The answer is true.
// We start at idx 0, we could take 1 step or 2 steps forward.
// The correct choice is to take 1 step to idx 1.
// Then take 4 steps forward to the end at idx 5.

/**
 * Returns whether it's possible to reach the last position of array
 * @param   {Array}   nums Array of numbers (max # of possible steps)
 * @returns {Boolean}      True if it's possible to reach the last index
 */

const arrayStepper = (nums, i = 0, memo = {}) => {
  // If current index is in memo, return value
  if (i in memo) return memo[i];
  // Base case: If index is greater than or equal to last index, return true
  if (i >= nums.length - 1) return true;

  // Loop through possible steps we can take
  const maxStep = nums[i];
  for (let step = 1; step <= maxStep; step++) {
    // If recursive call returns true, it's possible to reach last position
    if (arrayStepper(nums, i + step, memo)) {
      // Add to memo and return true
      memo[i] = true;
      return true;
    }
  }

  // If we don't find a possible way, return false
  memo[i] = false;
  return false;
};

// n = length of numbers
// Time: O(n^2)
// Space: O(n)

export default { arrayStepper };
