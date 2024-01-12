// MAX INCREASING SUBSEQ
// -----------------------------------------------------------------
// Write a function, maxIncreasingSubseq, that takes in an array of
// numbers as an argument. The function should return the length of
// the longest subsequence of strictly increasing numbers.

// A subsequence of an array can be created by deleting any
// elements of the array, while maintaining the relative order of
// elements.

// const numbers = [4, 18, 20, 10, 12, 15, 19];
// maxIncreasingSubseq(numbers); // -> 5

// Brute Force:
// const maxIncreasingSubseq = (numbers, i = 0, prev = -Infinity) => {
//   // if at end of arr, return 0
//   if (i === numbers.length) return 0

//   const options = []
//   const dontTakeFirst = maxIncreasingSubseq(numbers, i + 1, prev)
//   options.push(dontTakeFirst)

//   const current = numbers[i]
//   if (current > prev) {
//     const takeFirst = 1 + maxIncreasingSubseq(numbers, i + 1, current)
//     options.push(takeFirst)
//   }

//   return Math.max(...options)
// };

const maxIncreasingSubseq = (numbers, i = 0, prev = -Infinity, memo = {}) => {
  const key = i + ',' + prev;
  if (key in memo) return memo[key];
  // if at end of arr, return 0
  if (i === numbers.length) return 0;

  const options = [];
  const dontTakeFirst = maxIncreasingSubseq(numbers, i + 1, prev, memo);
  options.push(dontTakeFirst);

  const current = numbers[i];
  if (current > prev) {
    const takeFirst = 1 + maxIncreasingSubseq(numbers, i + 1, current, memo);
    options.push(takeFirst);
  }

  memo[key] = Math.max(...options);
  return memo[key];
};

// Complexity:
// n = length of array
// Time: O(n^2)
// Space: O(n^2)

export default { maxIncreasingSubseq };
