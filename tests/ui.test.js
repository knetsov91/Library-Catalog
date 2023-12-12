const { expect, test} = require('@playwright/test')

const pageUrl = "http://127.0.0.1:3000"
test("Verify \"All books\" link is visible", async ( {page }) => {
    await page.goto(pageUrl);
    await page.waitForSelector("#site-header > nav")
    const allBooksLink = await page.$("a[href='/catalog']")
    const allBooksLinkVisisble = await allBooksLink.isVisible()
    expect(allBooksLinkVisisble).toBe(true)
})


test("Verify Login button link is visible", async ( {page }) => {
    await page.goto(pageUrl);
    await page.waitForSelector("#site-header > nav")
    const loginButton = await page.$("a[href='/login']")
    const isLoginButtonVisible = await loginButton.isVisible()
    expect(isLoginButtonVisible).toBe(true)
})


test("Verify Reg button link is visible", async ( {page }) => {
    await page.goto(pageUrl);
    // await page.waitForSelector("#site-header > nav")
    await page.locator("xpath=/html/body/div/header/nav/section/div[1]/a[2]")

    const registerButton = await page.$("a[href='/register']")
    const isRegisterButtonVisible = await registerButton.isVisible()
    expect(isRegisterButtonVisible).toBe(true)
})