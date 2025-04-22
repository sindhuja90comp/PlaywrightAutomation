const {test, expect} = require('@playwright/test');
test("practice form test", async({page})=> {
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.locator('#firstName').fill('John');
    await page.locator('#lastName').fill('Peter');
    await page.locator('#userEmail').fill('john@gmail.com');
    await page.locator('#userNumber').fill('1234');
    await page.click('#dateOfBirthInput');
    await page.locator('//div[@aria-label="Choose Wednesday, April 23rd, 2025"]').click(); 
    await page.locator('//div[@class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"]').all('com');
    await page.getByRole('checkbox', {name: "Sports"}).check();
    // await page.getByRole('checkbox', {name: 'Reading'}).check();
    // await page.getByRole('checkbox', {name: 'Music'}).check();
    //await page.getByRole('button', {name: 'Choose File'}).click();
    await page.locator('#currentAddress').fill('3367,SprinCreek, Denver');
    await page.locator('//div[contains(text(),"Select State")]').selectOption('Haryana');
    await page.locator('//div[contains(text(),"Select Ci")]').selectOption('Agra');
    // await page.getByRole('button',{name: 'Submit'}).click();
  








})