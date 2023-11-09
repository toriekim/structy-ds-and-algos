// MIN CHANGE
// -----------------------------------------------------------------
// Write a function minChange that takes in an amount and an array
// of coins. The function should return the minimum number of coins
// required to create the amount. You may use each coin as many times
// as necessary.

// If it is not possible to create the amount, then return -1.

// Examples:
// minChange(8, [1, 5, 4, 12]); // -> 2, because 4+4 is the minimum coins possible
// minChange(13, [1, 9, 5, 14, 30]); // -> 5

/**
 * Returns the minimum number of coins required to create the amount
 * @param   {Number} amount Target amount
 * @param   {Array}  coins  Array of coin values
 * @returns {Number}        Min # of coins required to create the amount or -1
 */

const minChange = (amount, coins) => {
  const answer = _minChange(amount, coins);
  // If Infinity is returned, it's not possilbe to create amount
  return answer === Infinity ? -1 : answer;
};

const _minChange = (amount, coins, memo = {}) => {
  // Base case: If amount is negative, then it's not possible to create amount
  if (amount < 0) return Infinity;
  // Base case: If amount is 0, it's possible
  // Return 0 because it takes 0 coins to make 0
  if (amount === 0) return 0;

  // If the amount is in memo, return stored value
  if (amount in memo) return memo[amount];

  // Create variable to keep track of min amount of coins
  let minCoins = Infinity;
  // Loop through coin options to explore possibile combos
  for (let coin of coins) {
    // Add 1 (to include current coin) to returned count
    const possible = _minChange(amount - coin, coins, memo) + 1;
    // Reassign min amount if possible is less than current min
    minCoins = Math.min(possible, minCoins);
  }

  // Memo the min for the current coin & return
  memo[amount] = minCoins;
  return minCoins;
};

// a = amount
// c = # coins
// Time: O(a*c)
// Space: O(a)

export default { minChange };
