import { test, expect } from '@playwright/test';

test('User should be able to attempt login', async ({ page }) => {
  await page.goto('https://plamento-login-pa47.vercel.app/signin');

  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password123');

  await page.click('button[type="submit"]');

  await expect(page).not.toHaveURL(/signin/);
});