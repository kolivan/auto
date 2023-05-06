const {BasePage} = require("./basePage");
exports.RegistrationPage = class RegistrationPage extends BasePage {

    constructor(page) {
        super(page, '/sign-up');
        this.fullName = page.getByPlaceholder('Full name');
        this.email = page.locator("[type='email']");
        this.password = page.locator("[type='password']");
        this.registerButton = page.getByRole('button');
    }

    async register(userName, userEmail, userPassword) {
        await this.fullName.fill(userName);
        await this.email.type(userEmail);
        await this.password.type(userPassword);
        await this.registerButton.click();
    }

}