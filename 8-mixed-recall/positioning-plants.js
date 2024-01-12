// POSITIONING PLANTS
// -----------------------------------------------------------------
// You've been hired to plant flowers in a garden with n different
// positions. There are m different flower types. The prices of
// flowers types vary depending on which position they are planted.
// Your bosses are picky, they tell you to never plant two of the
// same flower type right next to each other. What is the minimum
// cost we need to plant a flower in each position of the garden?

// Write a function, positioningPlants, that takes in a 2D array
// with dimensions n * m. Each row of the array represents the
// costs of the flower types at that position. This means that
// costs[i][j] represents the cost of planting flower type j at
// position i. For example:

// Given these costs,

// costs = [
//   [4, 3, 7],
//   [6, 1, 9],
//   [2, 5, 3]
// ]

// The costs of plants at position 1 are $6, $1, and $9.
// The cost of planting flower type 0 at position 1 is $6.
// The cost of planting flower type 2 at position 1 is $9.

// The function should return the minimum cost of planting flowers
// without placing the same flower type in adjacent positions.

// positioningPlants([
//   [4, 3, 7],
//   [6, 1, 9],
//   [2, 5, 3]
// ]); // -> 7, by doing 4 + 1 + 2.

// Approach:
// Similar to max increasing subsequence with some tweaks
// Think of it as a decision tree starting at level 0
// Each level represents the position (row or i)
// At each level, explore each plant type possibility and calculate the cost
// Compare the cost with the running minimum cost of planting
//   Reassign the minimum if current cost is less
// Return the cheapest planting cost

// Brute Force Solution:
// const positioningPlants = (costs, pos = 0, prevPlant = null) => {
//   if (pos === costs.length) return 0;

//   let min = Infinity;
//   for (let plant = 0; plant < costs[pos].length; plant++) {
//     if (plant !== prevPlant) {
//       const possible =
//         costs[pos][plant] + positioningPlants(costs, pos + 1, plant);
//       min = Math.min(min, possible);
//     }
//   }
//   return min;
// };

// Optimized (DP w/ memoization)
// We can use a memo to reduce recursive calls of repeating branches
const positioningPlants = (costs, pos = 0, prevPlant = null, memo = {}) => {
  // Define the key for memo -> current position + previous plant type
  const key = pos + ',' + prevPlant;
  // If this branch has been explored, then return stored value
  if (key in memo) return memo[key];

  // If current position is equal to the length of costs, done exploring
  if (pos === costs.length) return 0;

  // Initialize min value at Infinity to ensure that next value is less than
  let min = Infinity;
  // Explore the cost of each plant type in the current position
  for (let plant = 0; plant < costs[pos].length; plant++) {
    // If current plant is not the same type as the previous...
    if (plant !== prevPlant) {
      // Calculate the possible cost from that this plant position
      const possible =
        costs[pos][plant] + positioningPlants(costs, pos + 1, plant, memo);
      // If possible cost is less than current minimum, reassign value
      min = Math.min(min, possible);
    }
  }
  // Return the minimum planting cost possible with alternating
  memo[key] = min;
  return memo[key];
};

// Complexity:
// n = # positions
// m = # plant types

// Brute Force:
// Time: O(m^n)
// Space: O(n) -> size of recursion stack (height of the tree)

// Memoized:
// Time: O(nm) -> amount of unique function calls needed
// Space: O(nm) -> memoizing
// Even though space complexity increased, vastly improved time is worth it

export default { positioningPlants };
