// @ts-check
const { test, expect } = require('@playwright/test');

test('verify sign in not success', async ({ page }) => {
  await page.goto('https://twitter.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("X. It’s what’s happening / X");

  //   // Click the sign in menu.
  await page.getByRole('link', { name: 'Sign in' }).click();

  //   // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Sign in to X' })).toBeVisible();

  //  // Click the close or x button at the left-hand corner
  await page.getByTestId('app-bar-close').click();
});
