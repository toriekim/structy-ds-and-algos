// COUNTING CHANGE
// -----------------------------------------------------------------
// Write a function, countingChange, that takes in an amount and an
// array of coins. The function should return the number of
// different ways it is possible to make change for the given
// amount using the coins.

// You may reuse a coin as many times as necessary.

// For example,
// countingChange(4, [1,2,3]) -> 4

// There are four different ways to make an amount of 4:
// 1. 1 + 1 + 1 + 1
// 2. 1 + 1 + 2
// 3. 1 + 3
// 4. 2 + 2

// Brute Force:
// const countingChange = (amount, coins, i = 0) => {
//   if (amount === 0) return 1

//   let totalWays = 0
//   const coin = coins[i]
//   for (let qty = 0; qty * coin <= amount; qty++) {
//     const remainder = amount - (qty * coin)
//     totalWays += countingChange(remainder, coins, i + 1)
//   }
//   return totalWays
// };

const countingChange = (amount, coins, i = 0, memo = {}) => {
  const key = amount + ',' + i;
  if (key in memo) return memo[key];

  // Base case -> If amount is 0, found a way to make amount
  if (amount === 0) return 1;
  if (i === coins.length) return 0;

  // Initialize variable to keep track of different ways
  let totalWays = 0;
  // Grab the current coin value to explore
  const coin = coins[i];
  // Explore different quantities of current coin
  for (let qty = 0; qty * coin <= amount; qty++) {
    // Make recursive call on the remaining amount
    const remainder = amount - qty * coin;
    // If we find a way to make amount, add to totalWays
    totalWays += countingChange(remainder, coins, i + 1, memo);
  }

  // Add current amount & coin index to memo before returning
  memo[key] = totalWays;
  return totalWays;
};

// a = amount
// c = # coins
// Time: O(a*c)
// Space: O(a*c)

export default { countingChange };
