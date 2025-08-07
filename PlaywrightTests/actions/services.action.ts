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

  async verifyOurServicesTitle(){
    const ourServicesTitle = strings.services.ourServicesTitle;
    await this.checkH1(ourServicesTitle);
  }

  
}
