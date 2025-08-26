import BaseActions from "./base.actions";
import HomePage from "../pages/home.page";
import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import CommonActions from "./common.actions";
import MembershipPage from "../pages/membership.page";

export default class MembershipActions extends CommonActions {
  membership: MembershipPage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.membership = new MembershipPage(page, context);
  }

  async locateMembershipCards() {
    await expect(this.membership.membershipCards).toBeVisible();
  }

  async verifyMembershipHeader(
    membershipName: string,
    membershipLocator: Locator
  ) {}

  async checkMembershipHeaders() {}

  async verifyMembershipDetails(
    membershipDetails: string,
    membershipLocator: Locator
  ) {}

  async checkMembershipDetails() {}

  async verifyMembershipPrice(
    membershipPrice: string,
    membershipLocator: Locator
  ) {}

  async checkMembershipPrice() {}

  async verifyMembershipButton(membershipButton: string, button: Locator) {}

  async checkMembershipButtons() {}

  async verifyMembershipBenefitsHeader() {}

  async verifyMembershipsParagraphs() {}
}
