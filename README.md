This repository will have projects on Software Testing Automation.

### Prerequisites to Run a Playwright File

1. **Install Node.js**
   - Ensure you have Node.js installed on your machine. You can download it from [Node.js Official Website](https://nodejs.org/).
   - Verify installation by running:
     ```bash
     node -v
     npm -v
     ```

2. **Initialize a Node.js Project**
   - Create a new project or navigate to an existing one. Run:
     ```bash
     npm init -y
     ```
   - This will create a `package.json` file.

3. **Install Playwright Test Runner**
   - Install Playwright's test runner as a development dependency:
     ```bash
     npm install -D @playwright/test
     ```

4. **Install Browser Dependencies**
   - Playwright may require browser dependencies. Use the following command to install them:
     ```bash
     npx playwright install-deps
     ```
   - This is particularly necessary for Linux systems.

5. **Set Up a Playwright Configuration (Optional)**
   - You can generate a configuration file using:
     ```bash
     npx playwright init
     ```
   - This will create a `playwright.config.ts` file to manage test settings.

6. **Write a Playwright Test File**
   - Create a test file, e.g., `example.spec.js`:
     ```javascript
     const { test, expect } = require('@playwright/test');

     test('basic test', async ({ page }) => {
         await page.goto('https://example.com');
         const title = await page.title();
         expect(title).toBe('Example Domain');
     });
     ```

7. **Run the Test**
   - Run your test file using:
     ```bash
     npx playwright test
     ```
   - Or, if you're not using the test runner:
     ```bash
     node example.spec.js
     ```

8. **(Optional) Install Additional Libraries**
   - Depending on your requirements, you may need libraries like:
     - `dotenv` for managing environment variables.
     - `jest` or `mocha` for custom test runners.

---

Let me know if you need further assistance in setting up or running Playwright!
