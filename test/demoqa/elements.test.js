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

test("checkbox test", async({page})=> {
    await page.goto('https://demoqa.com/checkbox');
    await page.locator('//span[@class="rct-title"]').check();

})

test("radiobutton test",async({page})=> {
    await page.goto('https://demoqa.com/radio-button');
    await page.locator('//label[@for="impressiveRadio"]').check();
    await page.locator('//label[@for="yesRadio"]').check();

})

test("webtables test",async({page})=> {
    await page.goto('https://demoqa.com/webtables');
    await page.locator('#addNewRecordButton').click();
    await page.locator('#firstName').fill('John');
    await page.locator('#lastName').fill('Cena');
    await page.locator('#userEmail').fill('john@gmail.com');
    await page.locator('#age').fill('25');
    await page.locator('#salary').fill('800000');
    await page.locator('#department').fill('IT');
    await page.locator('#submit').click();
    
    await page.locator('//div[contains(text(),"Fir")]').click();
    await page.locator('//div[contains(text(),"Last")]').click();
    await page.locator('//div[contains(text(),"Age")]').click();
    await page.locator('//div[contains(text(),"Ema")]').click();
    await page.locator('//div[contains(text(),"Salary")]').click();
    await page.locator('//div[contains(text(),"Depa")]').click();
    await page.locator('//div[contains(text(),"Act")]').click();
    await page.locator('#searchBox').fill('test');


})