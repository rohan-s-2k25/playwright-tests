import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://factsnap-frontend.vercel.app/');
  await page.locator('.fixed.inset-0.z-40 > div:nth-child(2)').click();
  await page.getByText('FactSnap-V').click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Analyze File' }).click();
  await page.getByRole('link', { name: 'Analyze Text' }).click();
  await page.getByRole('link', { name: 'Live' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Try Text Mode' }).click();
  await page.getByRole('textbox', { name: 'Paste or type your text here' }).click();
  await page.getByText('Characters0').click();
});