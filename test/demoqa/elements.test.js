const {test,expect} = require('@playwright/test');
test("textbox test",async({page}) => {
    await page.goto('https://demoqa.com/text-box');
    await page.locator('#userName').fill('John');
    await page.locator('#userEmail').fill('john123@gmail.com');
    await page.locator('#currentAddress').fill('#123,SpringCreek,Portland');
    await page.locator('#permanentAddress').fill('#1234,Rose street, Denver');
    await page.locator('#submit').click();

    const name = page.locator('#name');
    const email = page.locator('#email');
    const currentAddress = page.locator('//p[@id="currentAddress"]')
    const permanentAddress = page.locator('//p[@id="permanentAddress"]');
    await expect(name).toHaveText('Name:John');
    await expect(email).toHaveText('Email:john123@gmail.com');
    await expect(currentAddress).toHaveText('Current Address :#123,SpringCreek,Portland');
    await expect(permanentAddress).toHaveText('Permananet Address :#1234,Rose street, Denver');
    

})