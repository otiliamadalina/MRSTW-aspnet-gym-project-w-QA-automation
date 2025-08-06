import BaseActions from "./base.actions";
import HomePage from "../pages/home.page";
import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import { BrowserContext, expect, Page } from "@playwright/test";
import CommonActions from "./common.actions";

export default class HomeActions extends CommonActions {

  home: HomePage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.home = new HomePage(page, context);
  }

  // -------- Hero Section
  async verifyHeroCarousel() {
    const heroCarouselImages = this.home.heroCarousel;
    const count = await heroCarouselImages.count();

    for (let i = 0; i < count; i++) {
      const image = heroCarouselImages.nth(i);
      await expect(image).toBeVisible();
      await expect(image).toHaveAttribute("src");

      console.log(
        "Image " +
          (i + 1) +
          " is visible with src: " +
          (await image.getAttribute("src"))
      );
    }
  }

  async verifyHeroTitle(heroTitle: string) {
    await this.checkH1(heroTitle);
    console.log("Hero title is: " + heroTitle);
  }

  async verifyHeroDescription(heroDescription: string) {
    const descriptionLocator = this.home.page.locator("p", {
      hasText: heroDescription,
    });
    await expect(descriptionLocator).toBeVisible();
    await expect(descriptionLocator).toHaveText(heroDescription);
    console.log("Hero description is: " + heroDescription);
  }

  async verifyJoinNowButton() {
    const joinNowButton = this.home.joinNowHref(routes.homeLinks.joinNowHref); // Apel corect

    await expect(joinNowButton).toBeVisible();
    await expect(joinNowButton).toHaveAttribute(
      "href",
      routes.homeLinks.joinNowHref
    );

    console.log(
      "Join Now button href: " + (await joinNowButton.getAttribute("href"))
    );

    await expect(joinNowButton).toHaveText(strings.home.heroSection.joinNow);
    await joinNowButton.click();
    await expect(this.page).toHaveURL(routes.homeLinks.joinNowHref);
    
    console.log(
      "Join Now button clicked and URL changed to:",
      await this.page.url()
    );
  }

  // --------- Our Services Section
  //TODO: verifyOurServiceCards doesn't work
  async verifyOurServicesCards() {
    const serviceCards = this.home.ourServicesCards;
    const count = await serviceCards.count();

    for (let i = 0; i < count; i++) {
      const card = serviceCards.nth(i);
      await card.hover();
      await expect(card).toBeVisible();
      console.log("Service card " + (i + 1) + " is visible");
    }
  }

  async verifyServicesSectionTitle() {
    const servicesSectionTitle = strings.home.ourServicesCards.ourServicesTitle;
    const servicesSectionLocator = this.home.h2Locator(servicesSectionTitle);

    await expect(servicesSectionLocator).toBeVisible();
    await expect(servicesSectionLocator).toHaveText(servicesSectionTitle);
  }

  async checkServicesCardTitle(serviceName: string) {
    const serviceTitleLocator = this.home.h3Locator(serviceName);
    await expect(serviceTitleLocator).toBeVisible();
    await expect(serviceTitleLocator).toHaveText(serviceName);
    console.log("Service card title is: " + serviceName);
  }

  async verifyServicesCardTitle() {
    await this.checkServicesCardTitle(
      strings.home.ourServicesCards.personalTraining
    );
    await this.checkServicesCardTitle(
      strings.home.ourServicesCards.groupClasses
    );
    await this.checkServicesCardTitle(
      strings.home.ourServicesCards.nutritionCoaching
    );
  }

  async checkServicesCardDescription(description: string) {
    const descriptionLocator = this.home.pLocator(description);
    await expect(descriptionLocator).toBeVisible();
    await expect(descriptionLocator).toHaveText(description);
    console.log("Service card description is: " + description);
  }

  async verifyServicesCardDescription() {
    await this.checkServicesCardDescription(
      strings.home.ourServicesCards.personalTrainingDescription
    );
    await this.checkServicesCardDescription(
      strings.home.ourServicesCards.groupClassesDescription
    );
    await this.checkServicesCardDescription(
      strings.home.ourServicesCards.nutritionCoachingDescription
    );
  }

  async verifySeeServicesButton() {
    const seeServicesButton = this.home.seeServicesHref(
      routes.homeLinks.seeServices
    );

    await expect(seeServicesButton).toBeVisible();
    await expect(seeServicesButton).toHaveAttribute(
      "href",
      routes.homeLinks.seeServices
    );

    console.log(
      "See Services button href: " +
        (await seeServicesButton.getAttribute("href"))
    );

     await expect(seeServicesButton).toHaveText(
      strings.home.ourServicesCards.seeServicesButton
    );

    await seeServicesButton.click();
    await expect(this.page).toHaveURL(routes.homeLinks.seeServices);
   
  }

  // -------- Our Memberships Section

  async verifyOurMembershipsCards() {
    const membershipCards = this.home.ourMembershipCards;
    const count = await membershipCards.count();

    for (let i = 0; i < count; i++) {
      const card = membershipCards.nth(i);
      await card.hover();
      await expect(card).toBeVisible();
      console.log("Membership card " + (i + 1) + " is visible");
    }
  }

  async verifyMembershipsSectionTitle() {
    const membesrhipSectionTitle =
      strings.home.ourMembershipsCards.ourMembershipsTitle;
    const membershipsSectionLocator = this.home.h2Locator(
      membesrhipSectionTitle
    );

    await expect(membershipsSectionLocator).toBeVisible();
    await expect(membershipsSectionLocator).toHaveText(membesrhipSectionTitle);
  }

  async checkMembershipsCardTitle(membershipName: string) {
    const membershipTitleLocator = this.home.h3Locator(membershipName);
    await expect(membershipTitleLocator).toBeVisible();
    await expect(membershipTitleLocator).toHaveText(membershipName);
    console.log("Membership card title is: " + membershipName);
  }

  async verifyMembershipsCardTitle() {
    await this.checkMembershipsCardTitle(
      strings.home.ourServicesCards.personalTraining
    );
    await this.checkMembershipsCardTitle(
      strings.home.ourServicesCards.groupClasses
    );
    await this.checkMembershipsCardTitle(
      strings.home.ourServicesCards.nutritionCoaching
    );
  }
  async checkMembershipsCardDescription(description: string) {
    const descriptionLocator = this.home.pLocator(description);
    await expect(descriptionLocator).toBeVisible();
    await expect(descriptionLocator).toHaveText(description);
    console.log("Membership card description is: " + description);
  }

  async verifyMembershipsCardDescription() {
    await this.checkMembershipsCardDescription(
      strings.home.ourMembershipsCards.basicCardDescription
    );
    await this.checkMembershipsCardDescription(
      strings.home.ourMembershipsCards.eliteCardDescription
    );
    await this.checkMembershipsCardDescription(
      strings.home.ourMembershipsCards.premiumCardDescription
    );
  }

  async verifySeeMembershipsButton() {
    const seeMembershipsButton = this.home.seeMembershipsHref(
      routes.homeLinks.seeMemberships
    );

    await expect(seeMembershipsButton).toBeVisible();
    await expect(seeMembershipsButton).toHaveAttribute(
      "href",
      routes.homeLinks.seeMemberships
    );

    console.log(
      "See Memberships button href: " +
        (await seeMembershipsButton.getAttribute("href"))
    );

    await expect(seeMembershipsButton).toHaveText(
      strings.home.ourMembershipsCards.seeMembershipsButton
    );
    await seeMembershipsButton.click();
    await expect(this.page).toHaveURL(routes.homeLinks.seeMemberships);
    
  }

  // --------- About MadGym Section

  async verifyAboutSectionTitle() {
    const aboutSectionTitle = strings.home.aboutSection.aboutTitle;
    const aboutSectionLocator = this.home.h2Locator(aboutSectionTitle);

    await expect(aboutSectionLocator).toBeVisible();
    await expect(aboutSectionLocator).toHaveText(aboutSectionTitle);
  }

  async verifyAboutSectionDescription() {
    const aboutSectionDescription = strings.home.aboutSection.aboutDescription;
    const descriptionLocator = this.home.pLocator(aboutSectionDescription);
    await expect(descriptionLocator).toBeVisible();
    await expect(descriptionLocator).toHaveText(aboutSectionDescription);
  }

  async verifyLearnMoreButton() {
  const learnMoreButton = this.home.learnMoreHref(routes.homeLinks.learnMoreHref);

  await expect(learnMoreButton).toBeVisible();
  await expect(learnMoreButton).toHaveAttribute("href", routes.homeLinks.learnMoreHref);

  console.log("Learn More button href: " + await learnMoreButton.getAttribute("href"));

  await expect(learnMoreButton).toHaveText(strings.home.aboutSection.learnMoreButton);

  await learnMoreButton.click();
  await expect(this.page).toHaveURL(routes.homeLinks.learnMoreHref);

  console.log("Learn More button clicked and URL changed to:", await this.page.url());
}

}
