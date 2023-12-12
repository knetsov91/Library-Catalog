const { expect, test} = require('@playwright/test')

test("Verify \"All books\" link is visible", async ( {page }) => {
    await page.goto("http://127.0.0.1:3000");
    await page.waitForSelector("#site-header > nav")
    const allBooksLink = await page.$("a[href='/catalog']")
    const allBooksLinkVisisble = await allBooksLink.isVisible()
    expect(allBooksLinkVisisble).toBe(true)
})