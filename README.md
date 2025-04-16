This repository will have projects on Software Testing Automation.

### Prerequisites to Run a Playwright File (JavaScript in VS Code)

1. **Install Node.js**
   - Ensure you have Node.js installed on your machine. You can download it from [Node.js Official Website](https://nodejs.org/).
   - Verify installation by running:
     ```bash
     node -v
     npm -v
     ```

2. **Set Up a New Playwright Project**
   - Run the following command to initialize a Playwright project:
     ```bash
     npm init playwright@latest
     ```
   - Follow the prompts during the setup:
     - Choose **JavaScript** as your language (or TypeScript if preferred).
     - Specify the name of your tests folder (default is `tests` or `e2e` if a `tests` folder already exists).
     - Optionally, add a **GitHub Actions workflow** for CI/CD integration.
     - Install Playwright browsers (default is **true**).

3. **Open the Project in VS Code**
   - If you are using Visual Studio Code, open the project folder:
     ```bash
     code .
     ```

4. **Run a Playwright Test**
   - To ensure everything is set up correctly, run the Playwright example tests:
     ```bash
     npx playwright test
     ```

5. **(Optional) Install Browser Dependencies**
   - If you're running Playwright on a Linux environment, install browser dependencies:
     ```bash
     npx playwright install-deps
     ```

6. **Write Your Own Tests**
   - Create a test file in the `tests` folder (e.g., `example.spec.js`) and write your test cases using the Playwright testing library.

7. **Run Your Custom Tests**
   - Execute tests using:
     ```bash
     npx playwright test
     ```

---

This streamlined process with `npm init playwright@latest` makes it easy to set up and run Playwright tests in a JavaScript project. Let me know if you need further assistance!

  
