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
  ) {
    await expect(membershipLocator).toHaveText(membershipName);
  }

  async checkMembership1Header() {
    await this.verifyMembershipHeader(strings.home.ourMembershipsCards.basicCardTitle, this.membership.membership1Header);
  }

  async checkMembership2Header() {
    await this.verifyMembershipHeader(strings.home.ourMembershipsCards.premiumCardTitle, this.membership.membership2Header);
  }

  async checkMembership3Header() {
    await this.verifyMembershipHeader(strings.home.ourMembershipsCards.eliteCardTitle, this.membership.membership3Header);
  }




    async verifyMembershipDetails(
    membershipDetails: string,
    membershipLocator: Locator
  ) {
    await expect(membershipLocator).toHaveText(membershipDetails);
  }

  async checkMembership1Details() {
    await this.verifyMembershipDetails(strings.home.ourMembershipsCards.basicCardDescription, this.membership.membership1Details);
  }

   async checkMembership2Details() {
    await this.verifyMembershipDetails(strings.home.ourMembershipsCards.premiumCardDescription, this.membership.membership2Details);
  }

  async checkMembership3Details() {
    await this.verifyMembershipDetails(strings.home.ourMembershipsCards.eliteCardDescription, this.membership.membership3Details);
  }


  async verifyMembershipPrice(
    membershipPrice: string,
    membershipLocator: Locator
  ) {
    await expect(membershipLocator).toHaveText(membershipPrice);
  }

   async checkMembership1Price() {
    await this.verifyMembershipPrice(strings.home.ourMembershipsCards.basicCardPrice, this.membership.membership1Price);
  }

   async checkMembership2Price() {
    await this.verifyMembershipPrice(strings.home.ourMembershipsCards.premiumCardPrice, this.membership.membership2Price);
  }

   async checkMembership3Price() {
    await this.verifyMembershipPrice(strings.home.ourMembershipsCards.eliteCardPrice, this.membership.membership3Price);
  }



  async verifyMembershipButton(membershipButton: string, button: Locator) {
    await expect(button).toHaveText(membershipButton);
    await button.click();
  
    await this.page.waitForLoadState("load");
    await this.page.waitForURL(routes.allPages.authLoginPage);

    await this.goBackMultiple(1);
    }

   async checkMembership1Button() {
    await this.verifyMembershipButton(strings.home.ourMembershipsCards.chooseButton, this.membership.membership1Button);
  }

    async checkMembership2Button() {
    await this.verifyMembershipButton(strings.home.ourMembershipsCards.chooseButton, this.membership.membership2Button);
  }

    async checkMembership3Button() {
    await this.verifyMembershipButton(strings.home.ourMembershipsCards.chooseButton, this.membership.membership3Button);
  }


  async verifyMembershipBenefitsHeader() {
    await this.checkH2(strings.home.ourMembershipsCards.benefitsHeader);
  }

  async verifyMembershipsParagraphs() {
  await this.checkP(strings.home.ourMembershipsCards.eachMembership);
  await this.checkP(strings.home.ourMembershipsCards.flexibleMemberships);
  await this.checkP(strings.home.ourMembershipsCards.weLookForward);
  }


  
}
