const {test, expect} = require('@playwright/test');

test("browser test", async({page})=>{
    await page.goto('https://demoqa.com/browser-windows');

})

test.only("alerts test", async({page})=>{
    await page.goto('https://demoqa.com/alerts');
    await page.locator('#alertButton').click();
    //await page.press('Escape');


})

// test("frames test", async({page})=> {
//     await page.goto('https://demoqa.com/frames');

// })
// test("nested frames test", async({page})=> {
//     await page.goto('https://demoqa.com/nestedframes');
// })
test("modal Dialogs test", async({page})=> {
    await page.goto('https://demoqa.com/modal-dialogs');
    await page.locator('button:has-text("Small modal")').click();
    await page.click('#closeSmallModal');
    await page.locator('button:has-text("Large modal")').click();
    await page.click('#closeLargeModal');

})
