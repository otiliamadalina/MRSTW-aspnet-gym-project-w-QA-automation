import { BrowserContext, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class HomePage extends BasePage {

  get heroCarousel() {
    return this.page.locator("#heroCarousel .carousel-item img");
  }

  get heroBanner() {
    return this.page.locator("#hero");
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
