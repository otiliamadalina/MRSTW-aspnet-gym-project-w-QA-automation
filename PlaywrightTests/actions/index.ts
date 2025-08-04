import { BrowserContext, Page } from "@playwright/test";
import BaseActions from "./base.actions";
import NavigationActions from "./navigation.actions";
import HomeActions from "./home.actions";
import CommonActions from "./common.actions";

export default class App {
  base: BaseActions;
  navigation: NavigationActions;
  common: CommonActions;
  home: HomeActions;

  constructor(page: Page, context: BrowserContext) {
    this.base = new BaseActions(page, context);
    this.navigation = new NavigationActions(page, context);
    this.common = new CommonActions(page, context);
    this.home = new HomeActions(page, context);
}
}