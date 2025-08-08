import BaseActions from "./base.actions";
import HomePage from "../pages/home.page";
import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import CommonActions from "./common.actions";
import ServicesPage from "../pages/services.page";

export default class ServicesActions extends CommonActions {
  personalTrainingInfo(personalTrainingInfo: any, personalTrainingWhatTitle: any, whatIsTitle: any, personalTrainingWhatText: any, imageSrc: any, whatIsText: any) {
    throw new Error("Method not implemented.");
  }
  services: ServicesPage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.services = new ServicesPage(page, context);
  }

  async goToServicesPage() {
    const servicesButton = this.services.servicesLinkDesktop;
    await servicesButton.click();
    await this.page.waitForLoadState("load", { timeout: 30000 });
  }

  async verifyOurServicesTitle() {
    const ourServicesTitle = strings.services.ourServicesTitle;
    await this.checkH1(ourServicesTitle);
  }

  // ---------cards images
  async verifyPersonalTrainingImage() {
    const personalTrainingImage = strings.services.personalTrainingSrc;
    await this.verifyImageSrc(personalTrainingImage);
  }

  async verifyGroupProgramsImage() {
    const groupProgramsImage = strings.services.groupProgramsSrc;
    await this.verifyImageSrc(groupProgramsImage);
  }

  async verifyNutritionCoachingImage() {
    const nutritionCoachingImage = strings.services.nutritionCoachingSrc;
    await this.verifyImageSrc(nutritionCoachingImage);
  }

  async verifyAllServiceImages() {
    await this.verifyPersonalTrainingImage();
    await this.verifyGroupProgramsImage();
    await this.verifyNutritionCoachingImage();
  }

  // ------- cards titles

  async verifyPersonalTrainingTitle() {
    const personalTrainingTitle = this.services.personalTrainingCardTitle;
    await expect(personalTrainingTitle).toBeVisible();
  }

  async verifyGroupProgramsTitle() {
    const groupProgramsTitle = this.services.groupProgramsCardTitle;
    await expect(groupProgramsTitle).toBeVisible();
  }

  async verifyNutritionCoachingTitle() {
    const nutritionCoachingTitle = this.services.nutritionCoachingCardTitle;
    await expect(nutritionCoachingTitle).toBeVisible();
  }

  async verifyAllServiceTitles() {
    await this.verifyPersonalTrainingTitle();
    await this.verifyGroupProgramsTitle();
    await this.verifyNutritionCoachingTitle();
  }

  // ---------cards overlay

  async verifyPersonalTrainingOverlay() {
    await this.services.personalTrainingCard.hover();
    await expect(this.services.meetOurTeamOverlay).toBeVisible();
  }

  async verifyGroupProgramsOverlay() {
    await this.services.groupProgramsCard.hover();
    await expect(this.services.signUpForFreeOverlay).toBeVisible();
  }

  async verifyNutritionCoachingOverlay() {
    await this.services.nutritionCoachingCard.hover();
    await expect(this.services.createYourDietOverlay).toBeVisible();
  }

  async verifyAllServiceOverlays() {
    await this.verifyPersonalTrainingOverlay();
    await this.verifyGroupProgramsOverlay();
    await this.verifyNutritionCoachingOverlay();
  }

  // ----- CLICK verify

  async clickPersonalTrainingCard() {
    await this.services.personalTrainingCard.click();
    await expect(this.page).toHaveURL(
      routes.allPages.servicePersonalTrainingPage
    );
  }

  async clickGroupProgramsCard() {
    await this.services.groupProgramsCard.click();
    await expect(this.page).toHaveURL(routes.allPages.serviceGroupProgramsPage);
  }

  async clickNutritionCoachingCard() {
    await this.services.nutritionCoachingCard.click();
    await expect(this.page).toHaveURL(
      routes.allPages.serviceNutritionCoachingPage
    );
  }

  async clickAllCardsAndGoBack() {
    await this.clickPersonalTrainingCard();
    await this.page.goBack();
    await this.clickGroupProgramsCard();
    await this.page.goBack();
    await this.clickNutritionCoachingCard();
    await this.page.goBack();
  }

  /// --- Personal TRAINING PAGEEEEE-----

  async verifyServicesHeaderSection(
    header: Locator,
    title: Locator,
    subtitle: Locator,
    headerTitle: string,
    headerSubtitle: string
  ) {
    await expect(header).toBeVisible();
    await expect(title).toHaveText(headerTitle);
    await expect(subtitle).toHaveText(headerSubtitle);
  }

  async verifyInfoSection(
    info: Locator,
    whatTitle: Locator,
    whatIsTitle: string,
    whatText: Locator,
    image: string,
    whatIsText: string
  ) {
    await expect(info).toBeVisible();
    await expect(whatTitle).toHaveText(whatIsTitle);
    await expect(whatText).toHaveText(whatIsText);
    await this.verifyImageSrc(image);

  }

  async verifyBenefitsSection(
    benefits: Locator,
    benefitsTitle: Locator,
    benefitTitle: string,
    benefitsList: Locator,
    benefitList: string[]
  ) {
    await expect(benefits).toBeVisible();
    await expect(benefitsTitle).toHaveText(benefitTitle);

    const benefitItems = benefitsList;
    const expectedBenefits = benefitList;

    for (let i = 0; i < expectedBenefits.length; i++) {
      await expect(benefitItems.nth(i)).toContainText(expectedBenefits[i]);
    }
  }

  async verifyContactSectionAndButton(
    contact: Locator,
    contactText: Locator,
    contactTexts: string,
    contactButton: Locator,
    contactButtonText: string,
    contactPage: string
  ) {
    await expect(contact).toBeVisible();
    await expect(contactText).toHaveText(contactTexts);

    const contactButtons = contactButton;
    await expect(contactButtons).toBeVisible();
    await expect(contactButtons).toHaveText(contactButtonText);

    await contactButtons.click();
    await expect(this.page).toHaveURL(contactPage);
    await this.page.goBack();
  }
}
