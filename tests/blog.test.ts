import { expect, test } from '@playwright/test';

test(`blog page expected h1 to contains 'Blog' as title`, async ({ page }) => {
	await page.goto('/blog');
	expect(await page.textContent('h1')).toBe(`Blog`);
});
