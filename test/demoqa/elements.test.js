const {test,expect} = require('@playwright/test');
test("test",async({page}) => {
    await page.goto('https://demoqa.com/text-box');
    await page.locator('#userName').fill('John');
    await page.locator('#userEmail').fill('john123@gmail.com');
    await page.locator('#currentAddress').fill('#123,SpringCreek,Portland');
    await page.locator('#permanentAddress').fill('#1234,Rose street, Denver');
    await page.locator('#submit').click();
    

})