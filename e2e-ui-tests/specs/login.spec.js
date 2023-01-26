const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { config } = require('../configs/stage.config');
const { users } = require('../../test-data/users');

test.describe("Registration Tests", () => {

    /* test.beforeEach(async ({ page }) => { //чому так не працює?)
         const loginPage = new LoginPage(page);
         await loginPage.open();
     });*/

    test('Login with valid data', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.login(users.stage.admin.email, users.stage.admin.password);
        //await expect(page.locator('h2')).toHaveText('Login form');
    });

});
