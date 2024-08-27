const { test, expect } = require('@playwright/test');

test("practise test should pass", async ({ page }) => {
    //barebones test - just open a page
    await page.goto("http://localhost:3000/");

});

test('has title', async ({ page }) => {
    await page.goto("http://localhost:3000/");
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/╰(*°▽°*)╯Fireplace Palace/);
  });
  
//   test('get started link', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
  
//     // Click the get started link.
//     await page.getByRole('link', { name: 'Get started' }).click();
  
//     // Expects page to have a heading with the name of Installation.
//     await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
//   });