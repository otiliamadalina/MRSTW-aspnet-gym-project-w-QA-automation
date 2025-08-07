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
    const personalTrainingTitle = this.services.personalTrainingTitle;
    await expect(personalTrainingTitle).toBeVisible();
  }

  async verifyGroupProgramsTitle() {
    const groupProgramsTitle = this.services.groupProgramsTitle;
    await expect(groupProgramsTitle).toBeVisible();
  }

  async verifyNutritionCoachingTitle() {
    const nutritionCoachingTitle = this.services.nutritionCoachingTitle;
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
}
