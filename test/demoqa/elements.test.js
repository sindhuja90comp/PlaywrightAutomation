const { test, expect } = require('@playwright/test');
const { assert } = require('console');

test.describe("elements", () => {

    test.beforeEach("before test", async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
    })


    //test text box functionality
    test("textbox test", async ({ page }) => {
        
        await page.goto('https://demoqa.com/text-box');
        await page.locator('#userName').fill('John');
        await page.waitForTimeout(1000);
        await page.locator('#userEmail').fill('john123@gmail.com');
        await page.waitForTimeout(1000);
        await page.locator('#currentAddress').fill('#123,SpringCreek,Portland');
        await page.waitForTimeout(1000);
        await page.locator('#permanentAddress').fill('#1234,Rose street, Denver');
        await page.locator('#submit').click();
        await page.waitForTimeout(1000);

        const name = page.locator('#name');
        const email = page.locator('#email');
        const currentAddress = page.locator('//p[@id="currentAddress"]')
        const permanentAddress = page.locator('//p[@id="permanentAddress"]');
        await expect(name).toHaveText('Name:John');
        await expect(email).toHaveText('Email:john123@gmail.com');
        await expect(currentAddress).toHaveText('Current Address :#123,SpringCreek,Portland');
        await expect(permanentAddress).toHaveText('Permananet Address :#1234,Rose street, Denver');
    })


    //test checkbox funationality
    test("checkbox test", async ({ page }) => {
        await page.goto('https://demoqa.com/checkbox');
        await page.locator('//span[@class="rct-title"]').check();
        await page.waitForTimeout(1000);

    })


    //test radiobutton functionality
    test("radiobutton test", async ({ page }) => {
        await page.goto('https://demoqa.com/radio-button');
        await page.locator('//label[@for="impressiveRadio"]').check();
        await page.waitForTimeout(1000);
        await page.locator('//label[@for="yesRadio"]').check();
        await page.waitForTimeout(1000);

    })


    //test webtables functionality
    test("webtables test", async ({ page }) => {
        await page.goto('https://demoqa.com/webtables');
        await page.locator('#addNewRecordButton').click();
        await page.waitForTimeout(1000);
        await page.locator('#firstName').fill('John');
        await page.waitForTimeout(1000);
        await page.locator('#lastName').fill('Cena');
        await page.waitForTimeout(1000);
        await page.locator('#userEmail').fill('john@gmail.com');
        await page.waitForTimeout(1000);
        await page.locator('#age').fill('25');
        await page.waitForTimeout(1000);
        await page.locator('#salary').fill('800000');
        await page.waitForTimeout(1000);
        await page.locator('#department').fill('IT');
        await page.waitForTimeout(1000);
        await page.locator('#submit').click();

        await page.locator('//div[contains(text(),"Fir")]').click();
        await page.waitForTimeout(1000);
        await page.locator('//div[contains(text(),"Last")]').click();
        await page.waitForTimeout(1000);
        await page.locator('//div[contains(text(),"Age")]').click();
        await page.waitForTimeout(1000);
        await page.locator('//div[contains(text(),"Ema")]').click();
        await page.locator('//div[contains(text(),"Salary")]').click();
        await page.locator('//div[contains(text(),"Depa")]').click();
        await page.waitForTimeout(1000);
        await page.locator('//div[contains(text(),"Act")]').click();
        await page.waitForTimeout(1000);
        await page.locator('#searchBox').fill('test');

    })


    //test buttons functionality
    test("buttons test", async ({ page }) => {
        await page.goto('https://demoqa.com/buttons');
        await page.locator('#doubleClickBtn').dblclick();        //double clicks the button
        await page.waitForTimeout(1000);
        await page.locator('#rightClickBtn').click({ button: 'right' });
        await page.waitForTimeout(1000);
        await page.locator('text="Click Me"').click();   //Clicks button with text(useful for - whose id changes continuously)
    })


    //test links functionality
    test.only("links test", async ({ page }) => {
        await page.goto('https://demoqa.com/links');

        const [newPage1] = await Promise.all([ 
            page.context().waitForEvent('page'), // waits for the new page to open
            page.click('#simpleLink'),   // click the link that opens the new page
            page.setViewportSize({width:1920 , height:1080})
          ]);
        await newPage1.close();
        await page.waitForTimeout(1000);
        await page.goto('https://demoqa.com/links');

        await page.setViewportSize({width:1920 , height:1080});
        const [newPage2] = await Promise.all([ 
            page.context().waitForEvent('page'), // waits for the new page to open
            page.click('#dynamicLink')   // click the link that opens the new page
          ]);
        await newPage2.close();

        await page.setViewportSize({width:1920 , height:1080});
        await page.goto('https://demoqa.com/links');
        const linkResponse = page.locator('#linkResponse');
        await page.click('#created');
        await page.waitForTimeout(1000);
        await expect(linkResponse).toHaveText('Link has responded with staus 201 and status text Created');
        await page.click('#no-content');
        await page.waitForTimeout(1000);
        await expect(linkResponse).toHaveText('Link has responded with staus 204 and status text No Content');
        await page.click('#moved');
        await page.waitForTimeout(1000);
        await expect(linkResponse).toHaveText('Link has responded with staus 301 and status text Moved Permanently');
        await page.click('#bad-request');
        await page.waitForTimeout(1000);
        await expect(linkResponse).toHaveText('Link has responded with staus 400 and status text Bad Request');
        await page.click('#unauthorized');
        await page.waitForTimeout(1000);
        await expect(linkResponse).toHaveText('Link has responded with staus 401 and status text Unauthorized');
        await page.click('#forbidden');
        await page.waitForTimeout(1000);
        await expect(linkResponse).toHaveText('Link has responded with staus 403 and status text Forbidden');
        await page.click('#invalid-url');
        await page.waitForTimeout(1000);
        await expect(linkResponse).toHaveText('Link has responded with staus 404 and status text Not Found');

    })


    //test broken links functionality
    test("broken links - images test", async ({ page }) => {

        await page.goto('https://demoqa.com/broken');
        await page.locator('//a[@href="http://demoqa.com"]').click();
        await expect(page).toHaveTitle('DEMOQA');
        await page.waitForTimeout(1000);
        await page.goto('https://demoqa.com/broken');
        await page.locator('//a[contains(text(),"Click Here for Broken")]').click();
        await page.waitForTimeout(1000);
        await expect(page.locator('body')).toContainText('This page returned a 500 status code');   //check if page has a particular text
        await page.goto('https://demoqa.com/broken');

    })


    //test upload and doanload functionality
    test("upload-download test", async ({ page }) => {
        await page.goto('https://demoqa.com/upload-download');
        await page.locator('#downloadButton').click();
        await page.waitForTimeout(1000);
        await page.locator('#uploadFile').setInputFiles('test/demoqa/uploadedFiles/sample.pdf');
        const uploadedFilePath = page.locator('#uploadedFilePath');
        await page.waitForTimeout(1000);
        await expect(uploadedFilePath).toHaveText('C:\\fakepath\\sample.pdf')      //path website is displaying after uploading file
    })


    //test dynamic properties 
    test("dynamic-properties test", async ({ page }) => {
        await page.goto("https://demoqa.com/dynamic-properties");
        await page.locator('#enableAfter').click();
        await page.locator('#colorChange').click();
        await page.locator('#visibleAfter').click();
    })

})
