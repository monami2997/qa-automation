import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('tta_secret');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-tta-bolt-tshirt"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('Monami');
    await page.locator('[data-test="firstName"]').press('Tab');
    await page.locator('[data-test="lastName"]').fill('Chatterjee');
    await page.locator('[data-test="lastName"]').press('Tab');
    await page.locator('[data-test="postalCode"]').fill('700136');
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('[data-test="payment-info-value"]')).toBeVisible();
    await page.locator('[data-test="payment-info-value"]').click();
    await page.locator('[data-test="finish"]').click();
    await page.locator('[data-test="back-to-products"]').click();
});