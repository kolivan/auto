const { config } = require('../configs/stage.config');
exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.email = page.locator("[placeholder='Login']");
        this.password = page.locator("[type='password']");
        this.loginButton = page.getByRole('button');
    }

    async open() {
        await this.page.goto(config.use.baseURL + 'sign-in');
    }

    async login(userEmail, userPassword) {
        await this.email.type(userEmail);
        await this.password.type(userPassword);
        await this.loginButton.click();
    }

}