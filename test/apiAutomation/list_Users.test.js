const {test, expect} = require('@playwright/test');


test.describe("Api Post Request", async()=>{

    test("list users api test", async({request}) => {

        const response = await request.get('https://reqres.in/api/users?page=2');
        await expect(response.status()).toBe(200);
        
        const text = await response.text();
        await expect(text).toContain('michael');
    
        console.log(await response.json());
    
    })

   

})
