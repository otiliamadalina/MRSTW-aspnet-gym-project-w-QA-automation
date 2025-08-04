import { BrowserContext, Page } from "@playwright/test";
import BaseActions from "./base.actions";
import NavigationSectionActions from "./navigation.actions";

export default class App {
  base: BaseActions;
  navigation: NavigationSectionActions;

  constructor(page: Page, context: BrowserContext) {
    this.base = new BaseActions(page, context);
    this.navigation = new NavigationSectionActions(page, context);
}
}