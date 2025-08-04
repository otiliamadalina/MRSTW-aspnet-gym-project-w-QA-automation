import { BrowserContext, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class HomePage extends BasePage {
  get heroCarousel() {
    return this.page.locator("#heroCarousel .carousel-item img");
  }

  h1Locator(text: string) {
    return this.page.locator("h1", { hasText: `${text}` });
  }

  h2Locator(text: string) {
    return this.page.locator("h2", { hasText: `${text}` });
  }

  h3Locator(text: string) {
    return this.page.locator("h3", { hasText: `${text}` });
  }

  joinNowHref(href: string) {
    return this.page.locator(`a.btn.btn-primary.btn-lg[href='${href}']`);
  }

  get ourServicesCards() {
    return this.page.locator(".card service-card");
  }

  pLocator(text: string) {
    return this.page.locator("p", { hasText: `${text}` });
  }

  seeServicesHref(href: string) {
    return this.page.locator(`a.btn.btn-primary.btn-lg[href='${href}']`);
  }

  get ourMembershipCards() {
    return this.page.locator(".card text-center w-100");
  }
}
