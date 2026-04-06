import { test } from "@playwright/test";

test.use({ headless: false });

test.describe('Launch Browser', () => {
    test('Open', async ({ page }) => {
        await page.goto('https://plamento-login-pa47.vercel.app/signin')
        await page.waitForEvent('close')
    })
})