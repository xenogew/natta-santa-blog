import { expect, test } from '@playwright/test';

test(`about page expected
    - h1 to contains 'Hello I'm Natta' and
    - p to contains 'This is about page'`, async ({ page }) => {
	await page.goto('/about');
	expect(await page.textContent('h1')).toBe(`Hello I'm Natta`);
	expect(await page.textContent('p')).toBe(`This is about page`);
});
