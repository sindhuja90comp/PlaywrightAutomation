const { test, expect } = require('@playwright/test');

test.describe("Playwright API Automation", async () => {

    test(" API GET Request", async ({ request }) => {
        const response = await request.get('https://reqres.in/api/users/2');
        await expect(response.status()).toBe(200);

        const text = await response.text();
        await expect(text).toContain('Janet');

        console.log(await response.json());

    })

    test("API POST Request", async ({ request }) => {
        const response = await request.post('https://reqres.in/api/users', {
            data: {
                "name": "John",
                "job": "Trainer"
            },
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        });

        await expect(response.status()).toBe(201);
        const text = await response.text();
        await expect(text).toContain('John');
        console.log(await response.json());

    })

    //put : complete replacement of the resource
    test("API PUT Request", async ({ request }) => {
        const response = await request.put('https://reqres.in/api/users/2', {
            data:
            {
                "name": "John",
                "job": "Tutor"
            },
            headers: {
                "x-api-key": "reqres-free-v1"
            }
        })
        
        await expect(response.status()).toBe(200);
        const text = await response.text();
        await expect(text).toContain('John');
        console.log(await response.json());

    })


})