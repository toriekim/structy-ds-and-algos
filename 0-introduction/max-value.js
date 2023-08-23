/**
 * Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.
 *
 * Solve this without using any built-in array methods.
 *
 * You can assume that the array is non-empty.
 */

// Example 00: maxValue([4, 7, 2, 8, 10, 9]); // -> 10

const maxValue = (nums) => {
  let max = -Infinity;
  for (let num of nums) {
    if (num > max) max = num;
  }
  return max;
};

module.exports = {
  maxValue,
};
