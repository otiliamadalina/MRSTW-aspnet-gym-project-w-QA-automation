import { BrowserContext, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class AboutPage extends BasePage {

  h2Locator(text: string) {
    return this.page.locator("h2", { hasText: `${text}` });
  }

  h3Locator(text: string) {
    return this.page.locator("h3", { hasText: `${text}` });
  }

  pLocator(text: string) {
    return this.page.locator("p", { hasText: `${text}` });
  }

  liLocator(text: string) {
    return this.page.locator("li", { hasText: text });
  }

  strongLocator(text: string){
    return this.page.locator("strong", { hasText: text });
  }

  

}
