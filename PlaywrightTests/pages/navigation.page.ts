import { BrowserContext, Page } from "@playwright/test";
import BasePage from "./base.page";

class NavigationSection extends BasePage {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }
}
export default NavigationSection;