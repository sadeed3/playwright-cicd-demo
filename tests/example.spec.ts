import { test, expect } from '@playwright/test';

test.describe('Playwright Demo Store', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');
  });

  test('should display the home page', async ({ page }) => {
    await expect(page).toHaveTitle(/STORE/i);
    await expect(page.locator('#nava')).toContainText('PRODUCT STORE');
  });

  test('should display product categories', async ({ page }) => {
    await expect(page.getByText('Phones')).toBeVisible();
    await expect(page.getByText('Laptops')).toBeVisible();
    await expect(page.getByText('Monitors')).toBeVisible();
  });

  test('should open a product', async ({ page }) => {
    await page.getByText('Samsung galaxy s6', { exact: true }).click();

    await expect(page.locator('.name')).toHaveText('Samsung galaxy s6');
    await expect(page.getByText('Add to cart')).toBeVisible();
  });

});