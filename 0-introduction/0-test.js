/* eslint-env mocha */
import { expect } from 'chai';
import maxValue from './max-value.js';
import isPrime from './is-prime.js';

describe('0-Introduction', () => {
  describe('maxValue', () => {
    it('returns the max value', () => {
      expect(maxValue([4, 7, 2, 8, 10, 9])).to.equal(10);
    });

    it('handles floats', () => {
      expect(maxValue([10, 5, 40, 40.3])).to.equal(40.3);
    });

    it('handles negative values', () => {
      expect(maxValue([-5, -2, -1, -11])).to.equal(-1);
    });

    it('returns the only element when array length is one', () => {
      expect(maxValue([42])).to.equal(42);
    });

    it('returns the numeric max value not alphabetic max value', () => {
      expect(maxValue([1000, 8])).to.equal(1000);
      expect(maxValue([1000, 8, 9000])).to.equal(9000);
    });

    it(`returns the max value when it occurs early in the array`, () => {
      expect(maxValue([2, 5, 1, 1, 4])).to.equal(5);
    });
  });

  describe('isPrime', () => {
    it('returns a boolean indicating if a number is a prime', () => {
      expect(isPrime(2)).to.equal(true);
      expect(isPrime(3)).to.equal(true);
      expect(isPrime(4)).to.equal(false);
      expect(isPrime(5)).to.equal(true);
      expect(isPrime(6)).to.equal(false);
      expect(isPrime(7)).to.equal(true);
      expect(isPrime(8)).to.equal(false);
    });

    it('handles double numbers', () => {
      expect(isPrime(25)).to.equal(false);
      expect(isPrime(31)).to.equal(true);
    });

    it('handles large numbers', () => {
      expect(isPrime(2017)).to.equal(true);
      expect(isPrime(2048)).to.equal(false);
      expect(isPrime(713)).to.equal(false);
    });

    it('correctly handles values less than 2', () => {
      expect(isPrime(0)).to.equal(false);
      expect(isPrime(1)).to.equal(false);
    });
  });
});
