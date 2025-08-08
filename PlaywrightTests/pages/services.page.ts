import { BrowserContext, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class ServicesPage extends BasePage {
    
  get servicesLinkDesktop() {
  return this.page.locator("#servicesLinkDesktop");
}

  get ourServicesTitle() {
    return this.page.locator("#ourServicesTitle");
  }

  get personalTrainingCard() {
    return this.page.locator("#personalTrainingCard");
  }

  get meetOurTeamOverlay() {
    return this.page.locator("#meetOurTeam");
  }

  get personalTrainingCardTitle() {
    return this.page.locator("#personalTrainingTitle");
  }

  get groupProgramsCard() {
    return this.page.locator("#groupProgramsCard");
  }

  get signUpForFreeOverlay() {
    return this.page.locator("#signUpForFree");
  }

  get groupProgramsCardTitle() {
    return this.page.locator("#groupProgramsTitle");
  }

  get nutritionCoachingCard() {
    return this.page.locator("#nutritionCoachingCard");
  }

  get createYourDietOverlay() {
    return this.page.locator("#createYourDiet");
  }

  get nutritionCoachingCardTitle() {
    return this.page.locator("#nutritionCoachingTitle");
  }

  // -------- PERSONAL TRAINING PAGEEEEE --------

  get personalTrainingHeader() {
    return this.page.locator('#personalTrainingHeader');
  }

  get personalTrainingTitle() {
    return this.page.locator('#personalTrainingTitle');
  }

  get personalTrainingSubtitle() {
    return this.page.locator('#personalTrainingSubtitle');
  }

  get personalTrainingInfo() {
    return this.page.locator('#personalTrainingInfo');
  }

  get personalTrainingImage() {
    return this.page.locator('#personalTrainingImage');
  }

  get personalTrainingDescription() {
    return this.page.locator('#personalTrainingDescription');
  }

  get personalTrainingWhatTitle() {
    return this.page.locator('#personalTrainingWhatTitle');
  }

  get personalTrainingWhatText() {
    return this.page.locator('#personalTrainingWhatText');
  }

  get personalTrainingBenefits() {
    return this.page.locator('#personalTrainingBenefits');
  }

  get personalTrainingBenefitsTitle() {
    return this.page.locator('#personalTrainingBenefitsTitle');
  }

  get personalTrainingBenefitsList() {
    return this.page.locator('#personalTrainingBenefitsList li');
  }

  get personalTrainingContact() {
    return this.page.locator('#personalTrainingContact');
  }

  get personalTrainingContactText() {
    return this.page.locator('#personalTrainingContactText');
  }

  get personalTrainingContactButton() {
    return this.page.locator('#personalTrainingContactButton');
  }
}
