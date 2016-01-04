import chai from 'chai';
import assert from 'assert';



import sanatize from '../app/sanatize.js';
describe('Sanatize', () => {
	it('returns lowercase of a string', () => {
		const input = 'HELLO WORLD',
			expected = 'hello world',
			actual = sanatize(input);
		assert.equal(actual, expected)
	});

});