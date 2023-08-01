import { describe, it, expect } from 'vitest';
import { getWillysDiscounts } from './discounts.js';

describe('game test', () => {
	it('returns true when a valid word is entered', () => {
		let discounts = getWillysDiscounts();
		expect(1).toBe(2);
	});
});
