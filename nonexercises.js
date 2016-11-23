"use strict"

const nonexercises = {
	gcd: function(m, n) {
		if(typeof m !== "number" || typeof n !== "number")
			throw new TypeError("Parameters must be numbers.");

		if(!Number.isInteger(m) || !Number.isInteger(n))
			throw new TypeError("Parameters must be two integer values.");

		if(m <= 0 || n <= 0)
			throw new RangeError("Parameters must be greater than zero.");

		if(n > m) {
			var m_holder = m;
			
			m = n;
			n = m_holder;
		}

		var r = -1;

		do {
			r = m % n;
			m = n;
			if(r != 0)
				n = r;
		} while(r != 0);

		return n;
	}
}

module.exports = nonexercises;