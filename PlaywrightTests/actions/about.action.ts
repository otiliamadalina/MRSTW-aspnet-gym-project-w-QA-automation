import BaseActions from "./base.actions";
import HomePage from "../pages/home.page";
import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import { BrowserContext, expect, Page } from "@playwright/test";
import AboutPage from "../pages/about.page";

export default class AboutActions extends BaseActions {
  about: AboutPage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.about = new AboutPage(page, context);
  }

}