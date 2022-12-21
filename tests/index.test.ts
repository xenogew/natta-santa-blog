import { expect, test } from '@playwright/test';

test(`index page expected [Home] to contains 'Natta Santa Blog'`, async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('Natta Santa Blog')).toBeVisible();
});

test(`index page expected [Home] to contains 2 buttons [Blog, About]`, async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('Blog', { exact: true })).toBeVisible();
	await expect(page.getByText('About', { exact: true })).toBeVisible();
});
