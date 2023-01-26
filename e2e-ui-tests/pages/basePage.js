const { expect } = require('@playwright/test');
const { config } = require('../configs/stage.config');

exports.BasePage = class BasePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto(config.use.baseURL);
  }

}