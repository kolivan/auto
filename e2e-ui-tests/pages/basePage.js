const { expect } = require('@playwright/test');

exports.BasePage = class BasePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('http://stage.qa.nolimit.school/');
  }

}