import { BrowserContext, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class NavbarFooterPage extends BasePage {
  get navbar() {
    return this.page.locator("nav.navbar.navbar-expand-lg.navbar-dark.bg-dark");
  }

  get logo() {
    return this.page.locator(".navbar-brand");
  }

  get logoImg() {
    return this.page.locator("img.brand-logo");
  }

  get logoText() {
    return this.page.locator(".brand-text");
  }

  get navbarLinks() {
    return this.page.locator(
      `ul.navbar-nav a.nav-link, ul.navbar-nav a.btn-primary`
    );
  }

  get footerText() {
    return this.page.locator(`footer.bg-dark.text-white.text-center.py-3`);
  }

  get personalTrainingCard() {
    return this.page.locator("#personalTrainingCard");
  }

  get groupProgramsCard() {
    return this.page.locator("#groupProgramsCard");
  }

  get nutritionCoachingCard() {
    return this.page.locator("#nutritionCoachingCard");
  }
}
