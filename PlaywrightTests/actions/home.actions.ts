import BaseActions from "./base.actions";
import HomePage from "../pages/home.page";
import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import { BrowserContext, expect, Page } from "@playwright/test";

export default class HomeActions extends BaseActions {
  home: HomePage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.home = new HomePage(page, context);
  }

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
    const titleLocator = this.home.h1Locator(heroTitle);
    await expect(titleLocator).toBeVisible();
    await expect(titleLocator).toHaveText(heroTitle);
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

    await joinNowButton.click();

    await expect(this.page).toHaveURL(routes.homeLinks.joinNow);
    await expect(joinNowButton).toHaveText(strings.home.heroSection.joinNow);
    console.log(
      "Join Now button clicked and URL changed to:",
      await this.page.url()
    );
  }

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

  async verifyServicesSectionTitle(){
    
  }

  async verifyServiceCardTitle(serviceName: string) {
    const serviceTitleLocator = this.home.h3Locator(serviceName);
    await expect(serviceTitleLocator).toBeVisible();
    await expect(serviceTitleLocator).toHaveText(serviceName);
    console.log("Service card title is: " + serviceName);
  }

  async verifyServiceCardDescription(description: string) {
    const descriptionLocator = this.home.pLocator(description);
    await expect(descriptionLocator).toBeVisible();
    await expect(descriptionLocator).toHaveText(description);
    console.log("Service card description is: " + description);
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

    await seeServicesButton.click();
    await expect(this.page).toHaveURL(routes.homeLinks.seeServices);
    await expect(seeServicesButton).toHaveText(
      strings.home.ourServicesCards.seeServicesButton
    );
  }
}
