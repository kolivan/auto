const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const config = require('../../playwright.config');
const { users } = require('../../test-data/users');

const user = users[config.default.use.env].user;

let loginPage;

test.describe('Login tests', () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.open();
     });

    test('Login with valid data', async ({ page }) => {
        await loginPage.open();
        await expect(page.locator('h2')).toHaveText('Login form');
        await loginPage.login(user.email, user.password);
    });
});
