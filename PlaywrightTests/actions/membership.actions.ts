import BaseActions from "./base.actions";
import HomePage from "../pages/home.page";
import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import { BrowserContext, expect, Page } from "@playwright/test";
import CommonActions from "./common.actions";
import MembershipPage from "../pages/membership.page";

export default class MembershipActions extends CommonActions {
  membership: MembershipPage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.membership = new MembershipPage(page, context);
  }

  async locateMembershipCards(){
    await expect(this.membership.membershipCards).toBeVisible();
  }

}