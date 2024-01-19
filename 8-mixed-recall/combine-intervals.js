// COMBINE INTERVALS
// -----------------------------------------------------------------
// Write a function, combineIntervals, that takes in an array of
// intervals as an argument. Each interval is an array containing
// a pair of numbers representing a start and end time. Your function
// should combine overlapping intervals and return an array containing
// the combined intervals.

// For example:

// Given two intervals:

// [1, 4] and [3, 7]

// The intervals overlap and should be combined into:
// [1, 7]
// You may return the combined intervals in any order.

// You can assume that the input array contains at least one interval
// and all intervals are valid with start < end.

// const intervals = [
//   [1, 4],
//   [12, 15],
//   [3, 7],
//   [8, 13],
// ];
// combineIntervals(intervals);
// -> [ [1, 7], [8, 15] ]

// Approach:
// Order intervals by start value increasing -> [1,4],[3,7],[8,13],[12,15] / .sort() is O(nlogn)
// Initialize combinedIntervals array with first interval of sorted
// Loop through remaining intervals to compare current & last intervals
// If there's overlap, adjust combined to reflect overlap
// Else, push current interval into combined array
// Return combined intervals

const combineIntervals = (intervals) => {
  // First, sort intervals by start value increasing
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
  // Initialize new array with first interval of sorted
  const combined = [sortedIntervals[0]];

  // Loop through remaining intervals to compare values
  for (let currentInterval of sortedIntervals.slice(1)) {
    const [currentStart, currentEnd] = currentInterval;
    // The last interval is be the last element in combined array
    const lastInterval = combined[combined.length - 1];
    const [lastStart, lastEnd] = lastInterval;

    // If the current start is less than the last end, there's overlap
    if (currentStart <= lastEnd) {
      // If the current end is greater than the last end, adjust the last interval in combined
      if (currentEnd >= lastEnd) {
        // combined.pop()
        // combined.push([lastStart, currentEnd])
        lastInterval[1] = currentEnd;
      }
    } else {
      // Otherwise, there is no overlap, add current interval to combined
      combined.push(currentInterval);
    }
  }

  return combined;
};

export default { combineIntervals };
