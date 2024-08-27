// @ts-check
const { test, expect } = require('@playwright/test');

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


test("practise test should pass", async ({ page }) => {
    //barebones test - just open a page
    await page.goto("http://localhost:3000/");

});

test('has title', async ({ page }) => {
    await page.goto("http://localhost:3000/");
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Fireplace Palace/);
  });

  test("Navigating To Different Pages", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.goto("http://localhost:3000/founders");
    await page.goto("http://localhost:3000/design-booking");
  });