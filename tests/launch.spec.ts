import { test, expect } from '@playwright/test';

test('Login page should load correctly', async ({ page }) => {
  // Navigate to your URL
  await page.goto('https://plamento-login-pa47.vercel.app/signin');

  // Verify URL
  await expect(page).toHaveURL(/signin/);

  // Check if page has some visible element (adjust selector based on your UI)
  await expect(page.locator('text=Sign In')).toBeVisible();
});