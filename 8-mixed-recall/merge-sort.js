// MERGE SORT
// -----------------------------------------------------------------
// Write a function, mergeSort, that takes in an array of numbers as
// an argument. The function should return a new array containing
// elements of the original array sorted in ascending order. Your
// function must implement the merge sort algorithm.

// const numbers = [10, 4, 42, 5, 8, 100, 5, 6, 12, 40];
// mergeSort(numbers);
// -> [ 4, 5, 5, 6, 8, 10, 12, 40, 42, 100 ]

const mergeSort = (nums) => {
  // Base case: An array with one element is already sorted
  if (nums.length <= 1) return nums;

  // Split nums at the middle into 2 arrays -> divide & conquer
  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);
  // Continue to split until only 1 element remaining
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);
  // Merge the left and right
  return merge(leftSorted, rightSorted);
};

// Assuming input arrays are already sorted and increasing order
// n^2 runtime due to nested .shift() in while loop
// .shift() is an O(n) operation
// const merge = (arr1, arr2) => {
//   const merged = [];

//   while (arr1.length > 0 && arr2.length > 0) {
//     if (arr1[0] < arr2[0]) {
//       merged.push(arr1.shift());
//     } else {
//       merged.push(arr2.shift());
//     }
//   }

//   merged.push(...arr1);
//   merged.push(...arr2);

//   return merged;
// };

// How to optimize the above to linear run time O(n)?
// .pop() is O(1) operation
// .reverse() is O(n) operation, but better than loop-nested shift
// Remove from the back of the array instead of the front
const merge = (arr1, arr2) => {
  // Reverse each array to be decreasing order
  arr1.reverse();
  arr2.reverse();

  const merged = [];

  while (arr1.length > 0 && arr2.length > 0) {
    // Compare the last elements of each array
    if (arr1[arr1.length - 1] < arr2[arr2.length - 1]) {
      merged.push(arr1.pop());
    } else {
      merged.push(arr2.pop());
    }
  }

  // Push any remaining elements
  merged.push(...arr1.reverse());
  merged.push(...arr2.reverse());

  return merged;
};

// n = array size
// Time: O(nlogn)
// Space: O(n)

export default { mergeSort, merge };
