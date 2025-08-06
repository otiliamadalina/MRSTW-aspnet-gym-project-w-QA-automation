import { BrowserContext, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class CommonPage extends BasePage {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  get tabTitle() {
    return this.page.title();
  }
  
  //-------- Headers % P
  h1Locator(text: string) {
    return this.page.locator("h1", { hasText: `${text}` });
  }

  h2Locator(text: string) {
    return this.page.locator("h2", { hasText: `${text}` });
  }

  h3Locator(text: string) {
    return this.page.locator("h3", { hasText: `${text}` });
  }

  pLocator(text: string) {
    return this.page.locator("p", { hasText: `${text}` });
  }
}
