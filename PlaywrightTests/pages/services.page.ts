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

  get personalTrainingTitle() {
    return this.page.locator("#personalTrainingTitle");
  }

  get groupProgramsCard() {
    return this.page.locator("#groupProgramsCard");
  }

  get signUpForFreeOverlay() {
    return this.page.locator("#signUpForFree");
  }

  get groupProgramsTitle() {
    return this.page.locator("#groupProgramsTitle");
  }

  get nutritionCoachingCard() {
    return this.page.locator("#nutritionCoachingCard");
  }

  get createYourDietOverlay() {
    return this.page.locator("#createYourDiet");
  }

  get nutritionCoachingTitle() {
    return this.page.locator("#nutritionCoachingTitle");
  }
}
