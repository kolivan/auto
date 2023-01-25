const {config} = require('../configs/stage.config');
exports.RegistrationPage = class RegistrationPage
{

    constructor(page) {
        this.page = page;
        this.fullName = page.getByPlaceholder('Full name');
        this.email = page.locator("[type='email']");
        this.password = page.locator("[type='password']");
        this.registerButton = page.getByRole('button');
    }

    async open() {
        await this.page.goto(config.use.baseURL+'sign-up');
      }

    async  register(userName, userEmail, userPassword) {
        await this.fullName.fill(userName);
        await this.email.type(userEmail);
        await this.password.type(userPassword);
        await this.registerButton.click();
    }  

}