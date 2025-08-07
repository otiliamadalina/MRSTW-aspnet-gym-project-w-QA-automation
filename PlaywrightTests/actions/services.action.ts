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

}