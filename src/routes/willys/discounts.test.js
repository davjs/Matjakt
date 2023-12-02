import { describe, it, expect } from 'vitest';
import { getWillysDiscountedItems } from './discounts.js';

describe('game test', () => {
	it('returns true when a valid word is entered', async () => {
		let discountedItems = await getWillysDiscountedItems();
		console.log(discountedItems);
		expect(2).toBe(2);
	});
});
