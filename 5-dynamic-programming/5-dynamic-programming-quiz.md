# 5\. Dynamic Programming

## What is memoization?

Memoization is a design pattern where we cache return values based on the arguments of a function in order to avoid duplicate computation.

## Is memoization the only way to implement dynamic programming?

No. However, Alvin thinks memoization is the most versatile and easiest to master. Another design pattern is tabulation.

## What is Alvin's first step to coding any dynmaic programming solution?

- Write a brute force recursive solution first.
- Don't try to optimize out of the gate! When you bite off more than you can chew, you'll choke.
- Torie: Create a decisin tree and diagram out the problem

## How can we identify that a problem requires dynamic programming?

- If we see similar nodes in decision tree diagram
- Try to draw out the logic as a recursion tree. Finding duplicate subtrees means that there are duplicate subproblems, so dynamaic programming can apply.

## For memoization, how can you identify what value to store in the memo?

You should always store the value that is returned in the recursive case

## For memoization, how can you identify what argument(s) to use as the memo keys?

The memo keys should always contain the arguments that vary during recursion. Arguments that don't change, do not need to be in the key.
