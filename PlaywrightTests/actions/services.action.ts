import BaseActions from "./base.actions";
import HomePage from "../pages/home.page";
import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import { BrowserContext, expect, Page } from "@playwright/test";
import CommonActions from "./common.actions";
import ServicesPage from "../pages/services.page";

export default class ServicesActions extends CommonActions {
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

  async verifyPersonalTrainingHeaderSection() {
    await expect(this.services.personalTrainingHeader).toBeVisible();
    await expect(this.services.personalTrainingTitle).toHaveText(
      strings.services.personalTrainingPage.headerTitle
    );
    await expect(this.services.personalTrainingSubtitle).toHaveText(
      strings.services.personalTrainingPage.headerSubtitle
    );
  }

  async verifyPersonalTrainingInfoSection() {
    await expect(this.services.personalTrainingInfo).toBeVisible();
    await expect(this.services.personalTrainingWhatTitle).toHaveText(
      strings.services.personalTrainingPage.whatIsTitle
    );
    await expect(this.services.personalTrainingWhatText).toHaveText(
      strings.services.personalTrainingPage.whatIsText
    );
    await expect(this.services.personalTrainingImage).toBeVisible();
  }

  async verifyPersonalTrainingBenefitsSection() {
    await expect(this.services.personalTrainingBenefits).toBeVisible();
    await expect(this.services.personalTrainingBenefitsTitle).toHaveText(
      strings.services.personalTrainingPage.benefitsTitle
    );

    const benefitItems = this.services.personalTrainingBenefitsList;
    const expectedBenefits = strings.services.personalTrainingPage.benefitsList;

    for (let i = 0; i < expectedBenefits.length; i++) {
      await expect(benefitItems.nth(i)).toContainText(expectedBenefits[i]);
    }
  }

  async verifyPersonalTrainingContactSectionAndButton() {
    await expect(this.services.personalTrainingContact).toBeVisible();
    await expect(this.services.personalTrainingContactText).toHaveText(
      strings.services.personalTrainingPage.contactText
    );

    const personalTrainingContactButton =
      this.services.personalTrainingContactButton;
    await expect(personalTrainingContactButton).toBeVisible();
    await expect(personalTrainingContactButton).toHaveText(
      strings.services.personalTrainingPage.contactButton
    );

    await personalTrainingContactButton.click();
    await expect(this.page).toHaveURL(routes.allPages.contactPage);
    await this.page.goBack();
  }
}
