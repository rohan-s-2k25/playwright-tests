import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://plamento-login-pa47.vercel.app/signin');
  await page.getByRole('main').click();
  await page.getByRole('heading', { name: 'Plamento' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Forgot password?' }).click();
  await page.getByRole('link', { name: 'Back to Sign In' }).click();
  await page.getByRole('link', { name: 'Sign Up' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: '9876543210' }).click();
  await page.getByRole('combobox', { name: 'Phone Number' }).click();
  await page.locator('html').click();
  await page.getByRole('button', { name: 'Date of Birth' }).click();
  await page.getByRole('button', { name: 'Clear' }).click();
  await page.getByRole('button', { name: 'Today', exact: true }).click();
  await page.getByRole('button', { name: 'Date of Birth' }).click();
  await page.locator('input[name="password"]').click();
});