import { BrowserContext, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class HomePage extends BasePage {

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

  get heroCarousel() {
    return this.page.locator("#heroCarousel .carousel-item img");
  }

  joinNowHref(href: string) {
    return this.page.locator(`a.btn.btn-primary.btn-lg[href='${href}']`);
  }

  // --------- OUR SERVICES
  get ourServicesCards() {
    return this.page.locator(".card service-card");
  }

  seeServicesHref(href: string) {
    return this.page.locator(`a.btn.btn-primary.btn-lg[href='${href}']`);
  }

  // ------------ OUR MEMBERSHIPS
  get ourMembershipCards() {
    return this.page.locator(".card text-center w-100");
  }

  seeMembershipsHref(href: string) {
    return this.page.locator(`a.btn.btn-primary.btn-lg[href='${href}']`);
  }

  // ------------ About
  learnMoreHref(href: string) {
  return this.page.locator(`a.btn.btn-primary[href='${href}']`);
}

}
