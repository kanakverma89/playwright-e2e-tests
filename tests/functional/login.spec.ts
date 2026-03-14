import { test, expect } from '@playwright/test';

test('Should Login Successfully...', async ({ page }) => {
    // 1. 
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await page.locator('#menu-toggle').click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('#menu-toggle').click();
  await page.locator('h1').click();
});