import BaseActions from "./base.actions";
import HomePage from "../pages/home.page";
import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import { BrowserContext, expect, Page } from "@playwright/test";
import NavbarFooterPage from "../pages/navbarFooter.page";
import CommonActions from "./common.actions";

export default class navbarFooterActions extends CommonActions {
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
     if (!this.page.url().includes(routes.allPages.authLoginPage)) {
    await this.checkNavbarTextLinks(strings.navBar.login);
  }
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
    //await this.verifyNavbarLinks();

    await this.verifyFooterText();

    await this.page.goBack();
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

  async verifyNavbarAndFooter() {
    await this.locateNavbar();
    await this.locateLogo();
    await this.verifyLogoImg();
    await this.verifyLogoText();
    await this.verifyNavbarTextLinks();

    await this.verifyFooterText();
  }

  async navigateToPageByLinkText(linkText: string, expectedUrl: string) {
    const link = this.page.getByRole("link", { name: linkText, exact: true });
    await expect(link).toBeVisible();
    await link.click();
    await this.page.waitForLoadState("load");
    await expect(this.page).toHaveURL(expectedUrl);
  }

  async verifyPageWithCommonLayout(linkText: string, expectedUrl: string) {
    await this.navigateToPageByLinkText(linkText, expectedUrl);
    await this.verifyNavbarAndFooter();
    await this.page.goBack();
    await this.page.waitForLoadState("load");
    await expect(this.page).toHaveURL(routes.homeLinks.home);
  }

  async loginAndGoToUserProfile() {
    await this.verifyPageWithCommonLayout(
      strings.navBar.login,
      routes.allPages.authLoginPage
    );

    await this.loginAsUser();


    await this.goToUserProfile();

    await this.verifyNavbarAndFooter();
  }

  async verifyPersonalTrainingFlow() {
  await this.navigateToPageByLinkText(strings.navBar.services, routes.allPages.servicesMainPage);

  await this.navigateToPageByLinkText(
    strings.home.ourServicesCards.personalTraining,
    routes.allPages.servicePersonalTrainingPage
  );

  await this.verifyNavbarAndFooter();

  await this.page.goBack();
  await this.page.waitForLoadState("load");
  await expect(this.page).toHaveURL(routes.allPages.servicesMainPage);

  await this.page.goBack();
  await this.page.waitForLoadState("load");
  await expect(this.page).toHaveURL(routes.homeLinks.home);
}

async verifyNutritionCoachingFlow() {
  await this.navigateToPageByLinkText(strings.navBar.services, routes.allPages.servicesMainPage);

  await this.navigateToPageByLinkText(
    strings.home.ourServicesCards.nutritionCoaching,
    routes.allPages.serviceNutritionCoachingPage
  );

  await this.verifyNavbarAndFooter();

  await this.page.goBack();
  await this.page.waitForLoadState("load");
  await expect(this.page).toHaveURL(routes.allPages.servicesMainPage);

  await this.page.goBack();
  await this.page.waitForLoadState("load");
  await expect(this.page).toHaveURL(routes.homeLinks.home);
}

async verifyGroupClassesFlow() {
  await this.navigateToPageByLinkText(strings.navBar.services, routes.allPages.servicesMainPage);

  await this.navigateToPageByLinkText(
    strings.home.ourServicesCards.groupClasses,
    routes.allPages.serviceGroupProgramsPage
  );

  await this.verifyNavbarAndFooter();

  await this.page.goBack();
  await this.page.waitForLoadState("load");
  await expect(this.page).toHaveURL(routes.allPages.servicesMainPage);

  await this.page.goBack();
  await this.page.waitForLoadState("load");
  await expect(this.page).toHaveURL(routes.homeLinks.home);
}

async verifyAboutFlow() {
  await this.navigateToPageByLinkText(strings.navBar.about, routes.allPages.aboutPage);

  await this.verifyNavbarAndFooter();

  await this.page.goBack();
  await this.page.waitForLoadState("load");
  await expect(this.page).toHaveURL(routes.homeLinks.home);
}

async verifyServicesFlow() {
  await this.navigateToPageByLinkText(strings.navBar.services, routes.allPages.servicesMainPage);

  await this.verifyNavbarAndFooter();

  await this.page.goBack();
  await this.page.waitForLoadState("load");
  await expect(this.page).toHaveURL(routes.homeLinks.home);
}


async verifyMembershipFlow() {
  await this.navigateToPageByLinkText(strings.navBar.membership, routes.allPages.membershipPage);

  await this.verifyNavbarAndFooter();

  await this.page.goBack();
  await this.page.waitForLoadState("load");
  await expect(this.page).toHaveURL(routes.homeLinks.home);
}

async verifyContactFlow() {
  await this.navigateToPageByLinkText(strings.navBar.contact, routes.allPages.contactPage);

  await this.verifyNavbarAndFooter();

  await this.page.goBack();
  await this.page.waitForLoadState("load");
  await expect(this.page).toHaveURL(routes.homeLinks.home);
}

async verifyLoginFlow() {
  const loginLink = this.page.getByRole("link", {
    name: strings.navBar.login,
    exact: true,
  });

  if (await loginLink.isVisible()) {
    await this.navigateToPageByLinkText(strings.navBar.login, routes.allPages.authLoginPage);
    await this.verifyNavbarAndFooter();

    await this.page.goBack();
    await this.page.waitForLoadState("load");
    await expect(this.page).toHaveURL(routes.homeLinks.home);
  } else {
    console.warn("Login link is not visible");
  }
}


///////// Login AS USER

async verifyEditProfilePage() {
  await this.goToUserProfile();

  await this.navigateToPageByLinkText(
    strings.userProfile.editProfile,
    routes.allPages.editProfilePage
  );
  await this.verifyNavbarAndFooter();

  await this.page.goBack(); 
  await this.page.waitForLoadState("load");

  await this.page.goBack(); 
  await this.page.waitForLoadState("load");
}

async verifyChangePasswordPage() {
  await this.goToUserProfile();

  await this.navigateToPageByLinkText(
    strings.userProfile.changePassword,
    routes.allPages.forgotPasswordPage
  );
  await this.verifyNavbarAndFooter();

  await this.page.goBack();
  await this.page.waitForLoadState("load");

  await this.page.goBack(); 
  await this.page.waitForLoadState("load");
}

async verifyResetPasswordPage() {
  await this.goToUserProfile();

  await this.navigateToPageByLinkText(
    strings.userProfile.resetPassword,
    routes.allPages.resetPasswordPage
  );
  await this.verifyNavbarAndFooter();

  await this.page.goBack(); 
  await this.page.waitForLoadState("load");

  await this.page.goBack(); 
  await this.page.waitForLoadState("load");

  await this.page.goBack();
  await this.page.waitForLoadState("load");
}

async verifyPaymentHistoryPage() {
  await this.goToUserProfile();

  await this.navigateToPageByLinkText(
    strings.userProfile.paymentHistory,
    routes.allPages.paymentHistoryPage
  );
  await this.verifyNavbarAndFooter();

  await this.page.goBack(); 
  await this.page.waitForLoadState("load");

  await this.page.goBack(); 
  await this.page.waitForLoadState("load");
}

async verifyMembershipCheckoutPage() {
  await this.goToUserProfile();

  await this.navigateToPageByLinkText(
    strings.membership.checkout,
    routes.allPages.checkoutPage
  );
  await this.verifyNavbarAndFooter();

  await this.page.goBack(); 
  await this.page.waitForLoadState("load");

  await this.page.goBack(); 
  await this.page.waitForLoadState("load");
}

async verifyOrderSuccessPage() {
  await this.goToUserProfile();

  await this.navigateToPageByLinkText(
    strings.checkout.orderSuccess,
    routes.allPages.successOrderPage
  );
  await this.verifyNavbarAndFooter();

  await this.page.goBack();
  await this.page.waitForLoadState("load");

  await this.page.goBack(); 
  await this.page.waitForLoadState("load");

  await this.page.goBack(); 
  await this.page.waitForLoadState("load");
}

async verifyTermsAndConditionsPage() {
  await this.goToUserProfile();

  await this.navigateToPageByLinkText(
    strings.checkout.termsAndConditions,
    routes.allPages.termsAndCondPage
  );
  await this.verifyNavbarAndFooter();

  await this.page.goBack(); 
  await this.page.waitForLoadState("load");

  await this.page.goBack(); 
  await this.page.waitForLoadState("load");

  await this.page.goBack(); 
  await this.page.waitForLoadState("load");
}



}
