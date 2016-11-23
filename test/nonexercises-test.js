"use strict"

const assert = require('assert');

const ne = require('../nonexercises.js');

describe('nonexercises.js', function() {
	describe('#gcd()', function() {
		it('should return 6 when the parameters are 54 and 24', function() {
			assert.equal(6, ne.gcd(54, 24));
		});

		it('should return 1 when the parameters are 57 and 25', function() {
			assert.equal(6, ne.gcd(54, 24));
		});

		it('should return a TypeError when the parameters are "a" and 1', function() {
			assert.throws(() => {ne.gcd("a", 1)}, TypeError, 'No TypeError with parameters "a" and 1.');
		});

		it('should return a TypeError when the parameters are 5.7 and 1', function() {
			assert.throws(() => {ne.gcd(5.7, 1)}, TypeError, 'No TypeError with parameters 5.7 and 1.');
		});

		it('should return a RangeError when the parameters are 0 and 0', function() {
			assert.throws(() => {ne.gcd(0, 0)}, RangeError, 'No RangeError with parameters 0 and 0.');
		});
	});
});