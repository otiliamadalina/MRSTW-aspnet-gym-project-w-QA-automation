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
    const locator = this.commonPage.h1Locator(header);
    await expect(locator).toBeVisible();
    await expect(locator).toHaveText(header);
    console.log(`Checked H1: "${header}" is visible and has correct text.`);
  }

  async checkH2(header: string) {
    const locator = this.commonPage.h2Locator(header);
    await expect(locator).toBeVisible();
    await expect(locator).toHaveText(header);
    console.log(`Checked H2: "${header}" is visible and has correct text.`);
  }

  async checkH3(header: string) {
    const locator = this.commonPage.h3Locator(header);
    await expect(locator).toBeVisible();
    await expect(locator).toHaveText(header);
    console.log(`Checked H3: "${header}" is visible and has correct text.`);
  }

  async checkP(text: string) {
    const locator = this.commonPage.pLocator(text);
    await expect(locator).toBeVisible();
    await expect(locator).toHaveText(text);
    console.log(`Checked P: "${text}" is visible and has correct text.`);
  }
}
