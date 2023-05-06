const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('../pages/registrationPage');
const config = require('../../playwright.config');
const { users } = require('../../test-data/users');

const user = users[config.default.use.env].user;

let registrationPgae;

test.describe('Login tests', () => {
    test.beforeEach(async ({ page }) => {
        registrationPgae = new RegistrationPage(page);
        await registrationPgae.open();
     });

    test.only('Registration with valid data', async ({ page }) => {
        await registrationPgae.register('test hanna','testautonnn@test.com', 'Tester_123');
        await expect.toHaveURL('http://omega-stage.qa.nolimit.school/sign-in');
    });

    test('Open Sing Up page from Sign In', async ({ page }) => {
        await loginPage.clickSingnUplink();
        await expect.toHaveURL('http://omega-stage.qa.nolimit.school/sign-up');
    });

});
