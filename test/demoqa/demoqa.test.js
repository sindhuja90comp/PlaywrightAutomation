import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('.card-up').first().click();
  await page.goBack();
  await page.locator('div:nth-child(2) > div > .card-up').click();
  await page.goBack();
  await page.locator('div:nth-child(3) > div > .card-up').click();
  await page.goBack();
  await page.locator('div:nth-child(4) > div > .card-up').click();
  await page.goBack();
  await page.locator('div').filter({ hasText: /^Interactions$/ }).first().click();
  await page.goBack();
  await page.locator('div').filter({ hasText: /^Book Store Application$/ }).nth(1).click();
  await page.goBack();
  await page.getByRole('link').filter({ hasText: /^$/ }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Selenium Online Training' }).click();
  const page1 = await page1Promise;
});