// BINARY SEARCH
// -----------------------------------------------------------------
// Write a function, binarySearch, that takes in a sorted array of
// numbers and a target. The function should return the index where
// the target can be found within the array. If the target is not
// found in the array, then return -1.

// You may assume that the input array contains unique numbers sorted in increasing order.

// Your function must implement the binary search algorithm.

// binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 6); // -> 6

// Approach:
// Because the input array is already sorted in increasing order,
// we can find the middle element of the array and compare it to the target value
// This way, we don't need to look at every element of the array
// Decrease and conquer by "dividing" the array

const binarySearch = (numbers, target) => {
  // Intialize 2 pointers at start and end of array
  let start = 0;
  let end = numbers.length - 1;

  // Loop through input array while start index <= end index pointer
  while (start <= end) {
    // Find the middle element with the middle index
    const mid = Math.floor((start + end) / 2);
    // If the middle element is the target, return middle index
    if (numbers[mid] === target) {
      return mid;
      // If the target is less than the middle element...
    } else if (target < numbers[mid]) {
      // Change our end pointer to the index before middle
      end = mid - 1;
    } else {
      // Else, if target is greater than the middle element
      // Change our start pointer to the index after middle
      start = mid + 1;
    }
  }
  // If target is not found, return -1
  return -1;
};

// n = length of numbers array
// Time: O(logn)
// Space: O(1)

export default { binarySearch };
