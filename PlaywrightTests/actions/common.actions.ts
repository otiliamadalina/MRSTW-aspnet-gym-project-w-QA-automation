import { BrowserContext, Page, expect } from "@playwright/test";
import CommonPage from "../pages/common.page";
import BaseActions from "./base.actions";

export default class CommonActions extends BaseActions {
  commonPage: CommonPage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.commonPage = new CommonPage(page, context);
  }

  async browserTabTitleAsExpected(browserTitle: string) {
    const pageTitle = await this.commonPage.tabTitle;
    const pageUrl = await this.commonPage.page.url();
    console.log(
      `Browser tab title for pageUrl - '${pageUrl}' is: '${pageTitle}'`
    );
    await expect(pageTitle, `Looking for page title '${browserTitle}'`).toBe(
      browserTitle
    );
  }

  async checkH1(header: string) {
    await expect(this.commonPage.h1Locator(header)).toBeVisible()
  }
}
