import BaseActions from "./base.actions";
import { BrowserContext, expect, Page } from "@playwright/test";
import NavigationSection from "../pages/navigation.page.ts";

export default class NavigationActions extends BaseActions {
  navigationSectionPage: NavigationSection;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.navigationSectionPage = new NavigationSection(page, context);
  }

  async pageUrlAsExpected(route: string) {
    await this.navigationSectionPage.page.waitForLoadState("domcontentloaded");
    await this.navigationSectionPage.page.waitForURL(`${route}`, {
      timeout: 3000,
    });
    expect(
      this.navigationSectionPage.page.url(),
      `Expecting url to contain: '${route}'`
    ).toContain(route);
  }

}