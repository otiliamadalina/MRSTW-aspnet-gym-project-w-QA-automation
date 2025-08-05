import { BrowserContext, Page } from "@playwright/test";
import BaseActions from "./base.actions";
import NavigationActions from "./navigation.actions";
import HomeActions from "./home.actions";
import CommonActions from "./common.actions";
import navbarFooterActions from "./navbarFooter.actions";
<<<<<<< HEAD
import AboutActions from "./about.action";
=======
>>>>>>> 2-test-navigation-bar-and-footer-for-all-pages

export default class App {
  base: BaseActions;
  navigation: NavigationActions;
  common: CommonActions;
  home: HomeActions;
  navbarFooter: navbarFooterActions;
<<<<<<< HEAD
  about: AboutActions;
=======
>>>>>>> 2-test-navigation-bar-and-footer-for-all-pages

  constructor(page: Page, context: BrowserContext) {
    this.base = new BaseActions(page, context);
    this.navigation = new NavigationActions(page, context);
    this.common = new CommonActions(page, context);
    this.home = new HomeActions(page, context);
    this.navbarFooter = new navbarFooterActions(page, context);
<<<<<<< HEAD
    this.about = new AboutActions(page, context);
=======
>>>>>>> 2-test-navigation-bar-and-footer-for-all-pages
}
}