// STRING SEARCH
// -----------------------------------------------------------------
// Write a function, stringSearch, that takes in a grid of letters
// and a string as arguments. The function should return a boolean
// indicating whether or not the string can be found in the grid as
// a path by connecting horizontal or vertical positions. The path
// can begin at any position, but you cannot reuse a position more
// than once in the path.

// You can assume that all letters are lowercase and alphabetic.

// const grid = [
//   ['e', 'y', 'h', 'i', 'j'],
//   ['q', 'x', 'e', 'r', 'p'],
//   ['r', 'o', 'l', 'l', 'n'],
//   ['p', 'r', 'x', 'o', 'h'],
//   ['a', 'a', 'm', 'c', 'm']
// ];
// stringSearch(grid, 'hello'); // -> true

// Approach:
// DFS grid algorithm by exploring each cardinal direction
// Each position can only be used once -> use visited set?
// Start by iterating through 2D grid, if grid position's letter is the same as the current string, add to visited map, search 4 directions
// Base base: If done with string, return true and check out of bounds return false

const stringSearch = (grid, s) => {
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (dfs(grid, s, r, c)) return true;
    }
  }
  return false;
};

const dfs = (grid, s, row, col) => {
  // Base case: If s is empty, done, found all letters, return true
  if (s === '') return true;

  // Check inbounds for column and rows
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;

  // Check if the current char is same as first letter in string
  const char = grid[row][col];
  if (char !== s[0]) return false;
  // Shrink string: Create suffix to pass into recursive calls
  const suffix = s.slice(1);
  // Mark current position to keep track of visited positions
  // Using a Set like we have in the past will time out in large input cases due to having to copy a Set with every call
  grid[row][col] = '*';

  // If I find the suffix in any direction, can return true
  const result =
    dfs(grid, suffix, row + 1, col) ||
    dfs(grid, suffix, row - 1, col) ||
    dfs(grid, suffix, row, col + 1) ||
    dfs(grid, suffix, row, col - 1);

  // Restore current position's character
  grid[row][col] = char;
  return result;
};

// r = # grid rows
// c = # grid columns
// Time: O(3^(r*c))
// Space: O(r*c)

export default { stringSearch, dfs };
