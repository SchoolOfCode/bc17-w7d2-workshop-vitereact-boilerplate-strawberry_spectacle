- Install Playwright in your project: “npm init playwright@latest” ✅

- Plan out two or three key user journeys through the website that you would like to test. ✅

    - load the home page then interact with the reviews component. 
    - load the home page, then interact with the menu component and navigate to the different pages. 
    - load the home page, click into the booking page, fill out the form, submit the form etc etc. 

- Make a user journey map in Figjam for each flow. 

- Initialise Playwright in your project, check it works. 

- Write an empty test for a user journey, write a plan in the test for each thing the test should do. 

- Write the test and check it passes. 

- Rinse and repeat. 




TEST EXAMPLES:

```
import { test, expect } from "@playwright/test";

test("Practice test should pass", async ({ page }) => {
  await page.goto("http://localhost:3000");
});

```
