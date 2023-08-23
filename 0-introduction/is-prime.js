/**
 * Write a function, isPrime, that takes in a number as an argument.
 * The function should return a boolean indicating whether or not the given number is prime.
 *
 * A prime number is a number that is only divisible by two distinct numbers: 1 and itself.
 *
 * For example, 7 is a prime because it is only divisible by 1 and 7.
 * For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.
 *
 * You can assume that the input number is a positive integer.
 */

// Approach:
// Can check factors up to sqrt(n) only
// isPrime is trying to see if n can be divisible, so if n / a is possible
// n / a = b, so n = a * b
// Pair of factors that multiply to result in n

const isPrime = (n) => {
  // Prime numbers are greater than 1
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

export default isPrime;
