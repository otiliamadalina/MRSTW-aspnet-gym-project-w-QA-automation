import BaseActions from "./base.actions";
import HomePage from "../pages/home.page";
import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import { BrowserContext, expect, Page } from "@playwright/test";
import NavbarFooterPage from "../pages/navbarFooter.page";

export default class navbarFooterActions extends BaseActions {
  navbarFooter: NavbarFooterPage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.navbarFooter = new NavbarFooterPage(page, context);
  }


}