import { chromium } from "playwright";
describe('Launch Browser', () => {

    test('Open signin page', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://plamento-login-pa47.vercel.app/signin')
        await browser.close()
    })

})