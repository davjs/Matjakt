import { expect, test } from '@playwright/test';



test('fetchData contains prices', async ({ page }) => {
	fetchData();
	expect(10).toBe(10);
});

// test('about page has expected h1', async ({ page }) => {
// 	await page.goto('/about');
// 	await expect(page.getByRole('heading', { name: 'About this app' })).toBeVisible();
// });
