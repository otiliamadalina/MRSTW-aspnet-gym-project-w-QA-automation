import { BrowserContext, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class CommonPage extends BasePage {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  get tabTitle() { 
    return this.page.title();
  }

}
