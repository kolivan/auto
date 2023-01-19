exports.RegistrationPage = class RegistrationPage
{

    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('http://stage.qa.nolimit.school/sign-up');
      }

    async  register(fulName, email, password) {
        await this.page.getByPlaceholder('Full name').fill(fulName);
        await this.page.locator("[type='email']").type(email);
        await this.page.locator("[type='password']").type(password);
        await this.page.getByRole('button').click();
    }  

}