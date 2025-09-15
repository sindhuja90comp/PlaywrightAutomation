const { test, expect } = require('@playwright/test');

test("browser windows test", async ({page}) => {

    const context = await browser.newContext();
    const newTab2 = await context.newPage();

    await page.goto('https://demoqa.com/browser-windows');
    const [newTab] = await Promise.all([page.context().waitForEvent('page'), page.click('button:has-text("New Tab")')]);
    await newTab.close();

    await page.goto('https://demoqa.com/browser-windows');
    const [newWindow] = await Promise.all([page.context().waitForEvent(), page.click('#windowButton')]);
    await newWindow.close();

})