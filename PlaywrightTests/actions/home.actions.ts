import BaseActions from "./base.actions";
import HomePage from "../pages/home.page";
import { BrowserContext, expect, Page } from "@playwright/test";

export default class HomeActions extends BaseActions {
  home: HomePage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.home = new HomePage(page, context);
  }

  async verifyHomePage() {
    await expect(this.page).toHaveURL(/.*home/);
    await expect(this.page.locator("h1")).toHaveText("Welcome to the Gym Website");
  }
}