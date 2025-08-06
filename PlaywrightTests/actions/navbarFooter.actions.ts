import BaseActions from "./base.actions";
import HomePage from "../pages/home.page";
import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import { BrowserContext, expect, Page } from "@playwright/test";
import NavbarFooterPage from "../pages/navbarFooter.page";

export default class navbarFooterActions extends BaseActions {
  navbarFooter: NavbarFooterPage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.navbarFooter = new NavbarFooterPage(page, context);
  }

  async locateNavbar() {
    await expect(this.navbarFooter.navbar).toBeVisible();
    return this.navbarFooter.navbar;
  }

  async locateLogo() {
    await expect(this.navbarFooter.logo).toBeVisible();
    return this.navbarFooter.logo;
  }

  async verifyLogoImg() {
    const logo = this.navbarFooter.logoImg;
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute("alt", strings.navBar.logoImageTitle);
    await expect(logo).toHaveAttribute("src", strings.navBar.logoSrc);
  }

  async verifyLogoText() {
    const logoText = this.navbarFooter.logoText;
    await expect(logoText).toBeVisible();
  }

  async checkNavbarTextLinks(linkText: string) {
    const locator = this.page.getByRole("link", {
      name: linkText,
      exact: true,
    });

    await expect(locator).toBeVisible();
    await expect(locator).toHaveText(linkText);
  }

  async verifyNavbarTextLinks() {
    await this.checkNavbarTextLinks(strings.navBar.about);
    await this.checkNavbarTextLinks(strings.navBar.services);
    await this.checkNavbarTextLinks(strings.navBar.membership);
    await this.checkNavbarTextLinks(strings.navBar.contact);
    await this.checkNavbarTextLinks(strings.navBar.login);
  }

  async verifyNavbarLinks() {
    const links = this.navbarFooter.navbarLinks;
    const count = await links.count();

    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      const text = await link.textContent();
      const href = await link.getAttribute("href");

      await expect(link).toBeVisible();
      await link.click();

      await expect(this.page).toHaveURL(href!);
      console.log(`Link '${text}' navigated to '${href}'`);

      await this.page.goBack();
    }
  }

  async verifyFooterText() {
    const footerText = strings.footer;
    const footerParagraph = this.navbarFooter.pLocator(footerText);

    await expect(footerParagraph).toBeVisible();
    await expect(footerParagraph).toHaveText(footerText);
  }

  async verifyCommonLayoutAndNavigation(linkText: string, expectedUrl: string) {

    const link = this.page.getByRole("link", { name: linkText, exact: true });
    await expect(link).toBeVisible();
    await link.click();
    await this.page.waitForLoadState("load");

    await expect(this.page).toHaveURL(expectedUrl);
    await this.locateNavbar();
    await this.locateLogo();
    await this.verifyLogoImg();
    await this.verifyLogoText();
    await this.verifyNavbarTextLinks();
    await this.verifyNavbarLinks();

    await this.verifyFooterText();


    //await this.page.goBack();
    await this.page.waitForLoadState("load");
    await expect(this.page).toHaveURL(routes.homeLinks.home);
  }

  async verifyAboutPage() {
    await this.verifyCommonLayoutAndNavigation(
      strings.navBar.about,
      routes.allPages.aboutPage
    );
  }

  async verifyServicesPage() {
    await this.verifyCommonLayoutAndNavigation(
      strings.navBar.services,
      routes.allPages.servicesMainPage
    );
  }

  async verifyMembershipPage() {
    await this.verifyCommonLayoutAndNavigation(
      strings.navBar.membership,
      routes.allPages.membershipPage
    );
  }

  async verifyContactPage() {
    await this.verifyCommonLayoutAndNavigation(
      strings.navBar.contact,
      routes.allPages.contactPage
    );
  }

  async verifyLoginPage() {
    await this.verifyCommonLayoutAndNavigation(
      strings.navBar.login,
      routes.allPages.authLoginPage
    );
  }
}
