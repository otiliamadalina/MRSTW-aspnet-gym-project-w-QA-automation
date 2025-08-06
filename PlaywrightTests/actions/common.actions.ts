import { BrowserContext, Page, expect } from "@playwright/test";
import CommonPage from "../pages/common.page";
import BaseActions from "./base.actions";
import routes from "../resources/routes.json";
import strings from "../resources/strings.json";

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

  async checkLi(text: string) {
    const locator = this.commonPage.liLocator(text);
    await expect(locator).toBeVisible();
    await expect(locator).toHaveText(text);
    console.log(`Checked list item: "${text}"`);
  }

  async checkLinkByTextAndHref(text: string, expectedHref: string) {
    const locator = this.commonPage.getLinkByText(text);
    await expect(locator).toBeVisible();
    await expect(locator).toHaveAttribute("href", expectedHref);
    console.log(`Checked link href for text "${text}" is: "${expectedHref}"`);

    await locator.click();
    console.log(`Clicked link with text "${text}"`);

    const currentUrl = await this.commonPage.page.url();
    console.log(`Navigated to URL: ${currentUrl}`);

    await this.commonPage.page.goBack();
    console.log("Went back to previous page in the same tab");
  }

  async login(username: string, password: string) {
    await this.commonPage.usernameInput.fill(username);
    await this.commonPage.passwordInput.fill(password);
    await this.commonPage.loginButton.click();
  }

  async loginAsUser() {
    const username = strings.loginCredentials.username;
    const password = strings.loginCredentials.password;

    await this.login(username, password);
  }

  async loginAsAdmin() {
    const username = strings.loginCredentials.adminUsername;
    const password = strings.loginCredentials.adminPassword;

    await this.login(username, password);
  }
}
