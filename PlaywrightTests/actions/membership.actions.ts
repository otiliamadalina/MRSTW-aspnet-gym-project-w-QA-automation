import BaseActions from "./base.actions";
import HomePage from "../pages/home.page";
import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import { BrowserContext, expect, Locator, Page } from "@playwright/test";
import CommonActions from "./common.actions";
import MembershipPage from "../pages/membership.page";
import AuthActions from "./auth.actions";
import navbarFooterActions from "./navbarFooter.actions";

export enum planCard {
  basic = "Basic",
  premium = "Premium",
  elite = "Elite"
}

export default class MembershipActions extends CommonActions {
  membership: MembershipPage;
  auth: AuthActions;
  navbarFooter: navbarFooterActions;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.membership = new MembershipPage(page, context);
    this.auth = new AuthActions(page, context);
    this.navbarFooter = new navbarFooterActions(page, context);
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
    await this.verifyMembershipHeader(
      strings.home.ourMembershipsCards.basicCardTitle,
      this.membership.membership1Header
    );
  }

  async checkMembership2Header() {
    await this.verifyMembershipHeader(
      strings.home.ourMembershipsCards.premiumCardTitle,
      this.membership.membership2Header
    );
  }

  async checkMembership3Header() {
    await this.verifyMembershipHeader(
      strings.home.ourMembershipsCards.eliteCardTitle,
      this.membership.membership3Header
    );
  }

  async verifyMembershipDetails(
    membershipDetails: string,
    membershipLocator: Locator
  ) {
    await expect(membershipLocator).toHaveText(membershipDetails);
  }

  async checkMembership1Details() {
    await this.verifyMembershipDetails(
      strings.home.ourMembershipsCards.basicCardDescription,
      this.membership.membership1Details
    );
  }

  async checkMembership2Details() {
    await this.verifyMembershipDetails(
      strings.home.ourMembershipsCards.premiumCardDescription,
      this.membership.membership2Details
    );
  }

  async checkMembership3Details() {
    await this.verifyMembershipDetails(
      strings.home.ourMembershipsCards.eliteCardDescription,
      this.membership.membership3Details
    );
  }

  async verifyMembershipPrice(
    membershipPrice: string,
    membershipLocator: Locator
  ) {
    await expect(membershipLocator).toHaveText(membershipPrice);
  }

  async checkMembership1Price() {
    await this.verifyMembershipPrice(
      strings.home.ourMembershipsCards.basicCardPrice,
      this.membership.membership1Price
    );
  }

  async checkMembership2Price() {
    await this.verifyMembershipPrice(
      strings.home.ourMembershipsCards.premiumCardPrice,
      this.membership.membership2Price
    );
  }

  async checkMembership3Price() {
    await this.verifyMembershipPrice(
      strings.home.ourMembershipsCards.eliteCardPrice,
      this.membership.membership3Price
    );
  }

  async verifyMembershipButton(membershipButton: string, button: Locator) {
    await expect(button).toHaveText(membershipButton);
    await button.click();

    await this.page.waitForLoadState("load");
    await this.page.waitForURL(routes.allPages.authLoginPage);

    await this.goBackMultiple(1);
  }

  async checkMembership1Button() {
    await this.verifyMembershipButton(
      strings.home.ourMembershipsCards.chooseButton,
      this.membership.membership1Button
    );
  }

  async checkMembership2Button() {
    await this.verifyMembershipButton(
      strings.home.ourMembershipsCards.chooseButton,
      this.membership.membership2Button
    );
  }

  async checkMembership3Button() {
    await this.verifyMembershipButton(
      strings.home.ourMembershipsCards.chooseButton,
      this.membership.membership3Button
    );
  }

  async verifyMembershipBenefitsHeader() {
    await this.checkH2(strings.home.ourMembershipsCards.benefitsHeader);
  }

  async verifyMembershipsParagraphs() {
    await this.checkP(strings.home.ourMembershipsCards.eachMembership);
    await this.checkP(strings.home.ourMembershipsCards.flexibleMemberships);
    await this.checkP(strings.home.ourMembershipsCards.weLookForward);
  }

  async verifyChooseButtonAsUser() {
    await this.navbarFooter.navigateToPageByLinkText(
      strings.navBar.login,
      routes.allPages.authLoginPage
    );
    await this.auth.loginAsUser();
    await this.navbarFooter.navigateToPageByLinkText(
      strings.navBar.membership,
      routes.allPages.membershipPage
    );

    await this.membership.membership1Button.click();
    await this.goBackMultiple(1);
    await this.page.waitForURL(routes.allPages.membershipPage);

    await this.membership.membership2Button.click();
    await this.goBackMultiple(1);
    await this.page.waitForURL(routes.allPages.membershipPage);

    await this.membership.membership3Button.click();
    await this.goBackMultiple(1);
    await this.page.waitForURL(routes.allPages.membershipPage);
  }

  async verifyChooseButtonAsAdmin() {
    await this.auth.logoutAsUser();
    await this.navbarFooter.navigateToPageByLinkText(
      strings.navBar.login,
      routes.allPages.authLoginPage
    );
    await this.auth.loginAsAdmin();
    await this.navbarFooter.navigateToPageByLinkText(
      strings.navBar.membership,
      routes.allPages.membershipPage
    );

    await this.membership.membership1Button.click();
    await this.page.waitForURL(routes.allPages.adminDashboardPage);
    await this.goBackMultiple(1);
    await this.page.waitForURL(routes.allPages.membershipPage);

    await this.membership.membership2Button.click();
    await this.page.waitForURL(routes.allPages.adminDashboardPage);
    await this.goBackMultiple(1);
    await this.page.waitForURL(routes.allPages.membershipPage);

    await this.membership.membership3Button.click();
    await this.page.waitForURL(routes.allPages.adminDashboardPage);
    await this.goBackMultiple(1);
    await this.page.waitForURL(routes.allPages.membershipPage);
  }

  // -------=-=-=-=- CHECKout Page

  // de le mutat in spec.ts
  async verifyOrderCheckoutHeader() {
    await this.checkH3(strings.checkout.orderCheckout);
  }

  async verifyBillingDetailsHeader() {
    await this.checkH5(strings.checkout.billingDetails);
  }

  async verifyPaymentMethodHeader() {
    await this.checkH5(strings.checkout.paymentMethod);
  }

  async verifyOrderSummaryHeader() {
    await this.checkH3(strings.checkout.orderSummary);
  }

  // ===========

  async clickMembership(plansCard: planCard) {
    await this.navbarFooter.navigateToPageByLinkText(
      strings.navBar.login,
      routes.allPages.authLoginPage
    );

    await this.auth.loginAsUser();
    await this.navbarFooter.navigateToPageByLinkText(
      strings.navBar.membership,
      routes.allPages.membershipPage
    );

    await this.verifyMembershipSelected(plansCard);
  }

 async verifyMembershipSelected(plan: planCard) {
  const membershipDropdown = this.membership.membershipDropdown;

  // Map planCard values to their respective buttons
  const planButtonMap = {
    [planCard.basic]: this.membership.membership1Button,
    [planCard.premium]: this.membership.membership2Button,
    [planCard.elite]: this.membership.membership3Button,
  };

  const button = planButtonMap[plan];
  if (!button) {
    throw new Error(`No button found for the plan: ${plan}`);
  }

  await button.click();
  
  // Only wait for dropdown if it exists
  if (membershipDropdown) {
    await membershipDropdown.waitFor({ state: "visible" });
    const selectedValue = await membershipDropdown.inputValue();
    expect(selectedValue).toBe(plan);
    console.log(`${plan} membership is correctly selected in the dropdown`);
  }
}


  async fillCheckoutFormAndPlaceOrder(
    applyDiscount: boolean = false,
    discountCode?: string
  ) {
    await this.membership.firstNameField.fill(strings.checkout.value_firstName);
    await this.membership.lastNameField.fill(strings.checkout.value_lastName);
    await this.membership.emailField.fill(strings.checkout.value_email);

    await this.membership.membershipDropdown.selectOption({
      label: strings.checkout.value_membershipPlan,
    });
    await this.membership.durationDropdown.selectOption({
      label: strings.checkout.value_membershipDuration,
    });

    await this.membership.cardNumberField.fill(
      strings.checkout.value_cardNumber
    );
    await this.membership.cvvField.fill(strings.checkout.value_cvv);
    await this.membership.expDateField.fill(
      strings.checkout.value_expirationDate
    );

    if (applyDiscount && discountCode) {
      await this.membership.visibleDiscountCode.fill(discountCode);
      await this.membership.applyDiscountButton.click();
      await this.membership.appliedDiscount.waitFor({ state: "visible" });
    }

    await this.membership.termsCheckbox.check();

    await this.membership.placeOrderButton.click();
  }

  async verifyUserInfoFieldsAndLabels() {
    await expect(this.membership.firstNameLabel).toHaveText(
      strings.checkout.firstName
    );
    await expect(this.membership.lastNameLabel).toHaveText(
      strings.checkout.lastName
    );
    await expect(this.membership.emailLabel).toHaveText(strings.checkout.email);

    await expect(this.membership.firstNameField).toBeVisible();
    await expect(this.membership.lastNameField).toBeVisible();
    await expect(this.membership.emailField).toBeVisible();
  }

  async verifyMembershipPlanDropdown() {
    await this.changeMembershipPlan(strings.checkout.basic);
    await this.changeMembershipPlan(strings.checkout.premium);
    await this.changeMembershipPlan(strings.checkout.elite);
  }

  async changeMembershipPlan(plan: string) {
    const dropdown = this.membership.membershipDropdown;

    await dropdown.click();
    await dropdown.selectOption(plan);

    const selectedValue = await dropdown.inputValue();
    expect(selectedValue).toBe(plan);

    console.log(`Membership plan changed to: ${plan}`);
  }

  async changeMembershipDuration(duration: string) {
    const dropdown = this.membership.durationDropdown;

    await dropdown.click();
    await dropdown.selectOption(duration);

    const selectedValue = await dropdown.inputValue();
    expect(selectedValue).toBe(duration);

    console.log(`Membership duration changed to: ${duration}`);
  }

  async verifyMembershipDurationDropdown() {
    await this.changeMembershipDuration(strings.checkout.oneMonth);
    await this.changeMembershipDuration(strings.checkout.threeMonths);
    await this.changeMembershipDuration(strings.checkout.sixMonths);
  }

  async verifyCardInfoFieldsAndLabels() {
    await expect(this.membership.cardNumberLabel).toHaveText(
      strings.checkout.cardNumber
    );
    await expect(this.membership.cvvLabel).toHaveText(strings.checkout.cvv);
    await expect(this.membership.expDateLabel).toHaveText(
      strings.checkout.expirationDate
    );

    await expect(this.membership.cardNumberField).toBeVisible();
    await expect(this.membership.cvvField).toBeVisible();
    await expect(this.membership.expDateField).toBeVisible();

    await expect(this.membership.cardNumberField).toHaveAttribute("placeholder", "1234 5678 9012 3456");
    await expect(this.membership.cvvField).toHaveAttribute("placeholder", "123");
    await expect(this.membership.expDateField).toHaveAttribute("placeholder", "MM/YY");
  }

  async verifyTermsCheckbox() {
    await expect(this.membership.termsCheckbox).toBeVisible();

    const isChecked = await this.membership.termsCheckbox.isChecked();
    if (!isChecked) {
        await this.membership.termsCheckbox.check();
    }

    await expect(this.membership.termsCheckbox).toBeChecked();

    await expect(this.membership.termsLabel).toHaveText(strings.checkout.termsAndConditions);

  }

  async verifyPlaceOrderButton() {
    const placeOrderButton = this.membership.placeOrderButton;
    await expect(placeOrderButton).toBeVisible();
    await placeOrderButton.click();
  }

  async verifyApplyButton() {
    const applyButton = this.membership.applyDiscountButton;
    await expect(applyButton).toBeVisible();
    await applyButton.click();
  }

  async verifyDiscountCodeFieldAndLabel(code: string) {
    await expect(this.membership.discountCodeLabel).toHaveText(strings.checkout.discountCode);
    await expect(this.membership.visibleDiscountCode).toBeVisible();

    await this.membership.visibleDiscountCode.fill(code);

    await this.verifyApplyButton();

    await this.page.waitForFunction(
  (selector: string) => {
    const el = document.querySelector(selector);
    return el && window.getComputedStyle(el).display !== 'none';
  },
  '#appliedDiscount',
  { timeout: 10000 }
);



    await expect(this.membership.appliedDiscount).toBeVisible({ timeout: 10000 });
    await expect(this.membership.appliedDiscountCode).toHaveText(code);

    const subtotal = await this.membership.subtotalAmount.textContent();
  const total = await this.membership.totalAmount.textContent();
  console.log(`Subtotal: ${subtotal}, Total: ${total}`);
  }

  async verifySubtotal() {}

  async verifyTotal() {}

  
}
