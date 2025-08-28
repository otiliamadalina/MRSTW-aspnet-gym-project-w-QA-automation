import BasePage from "./base.page";

export default class MembershipPage extends BasePage {
  get membershipCards() {
    return this.page.locator("#membershipCards");
  }

  get membership1Card() {
    return this.page.locator("#membership-1");
  }

  get membership1Header() {
    return this.page.locator("#membership-1-header");
  }

  get membership1Body() {
    return this.page.locator("#membership-1-body");
  }

  get membership1Details() {
    return this.page.locator("#membership-1-details");
  }

  get membership1Price() {
    return this.page.locator("#membership-1-price");
  }

  get membership1Button() {
    return this.page.locator("#membership-1-button");
  }

  get membership2Card() {
    return this.page.locator("#membership-2");
  }

  get membership2Header() {
    return this.page.locator("#membership-5-header");
  }

  get membership2Body() {
    return this.page.locator("#membership-5-body");
  }

  get membership2Details() {
    return this.page.locator("#membership-5-details");
  }

  get membership2Price() {
    return this.page.locator("#membership-5-price");
  }

  get membership2Button() {
    return this.page.locator("#membership-5-button");
  }

  get membership3Card() {
    return this.page.locator("#membership-6");
  }

  get membership3Header() {
    return this.page.locator("#membership-6-header");
  }

  get membership3Body() {
    return this.page.locator("#membership-6-body");
  }

  get membership3Details() {
    return this.page.locator("#membership-6-details");
  }

  get membership3Price() {
    return this.page.locator("#membership-6-price");
  }

  get membership3Button() {
    return this.page.locator("#membership-6-button");
  }

  // Checkout Page:

  get orderCheckoutHeader() {
    return this.page.locator("#orderCheckoutHeader");
  }

  get billingDetailsHeader() {
    return this.page.locator("#billingDetailsHeader");
  }

  get paymentMethodHeader() {
    return this.page.locator("#paymentMethodHeader");
  }

  get orderSummaryHeader() {
    return this.page.locator("#orderSummaryHeader");
  }

  get firstNameField() {
    return this.page.locator("#firstNameField");
  }

  get lastNameField() {
    return this.page.locator("#lastNameField");
  }

  get emailField() {
    return this.page.locator("#emailField");
  }

  get firstNameLabel() {
    return this.page.locator("label[for='firstName']");
  }

  get lastNameLabel() {
    return this.page.locator("label[for='lastName']");
  }

  get emailLabel() {
    return this.page.locator("label[for='email']");
  }

  get membershipPlanLabel() {
    return this.page.locator("label[for='membership']");
  }

  get membershipDropdown() {
    return this.page.locator("#membership");
  }

  get durationDropdown() {
    return this.page.locator("#duration");
  }

  get cardNumberField() {
    return this.page.locator("#cardNumberField");
  }

  get cvvField() {
    return this.page.locator("#cvvField");
  }

  get expDateField() {
    return this.page.locator("#expDateField");
  }

  get cardNumberLabel() {
    return this.page.locator("label[for='cardNumberField']");
  }

  get cvvLabel() {
    return this.page.locator("label[for='cvvField']");
  }

  get expDateLabel() {
    return this.page.locator("label[for='expDateField']");
  }

  get termsCheckbox() {
    return this.page.locator("#termsCheckbox");
  }

  get placeOrderButton() {
    return this.page.locator("#placeOrderButton");
  }

  get visibleDiscountCode() {
    return this.page.locator("#VisibleDiscountCode");
  }

  get applyDiscountButton() {
    return this.page.locator("#applyDiscountButton");
  }

  get appliedDiscount() {
    return this.page.locator("#appliedDiscount");
  }

  get appliedDiscountCode() {
    return this.page.locator("#appliedDiscountCode");
  }

  get removeDiscountButton() {
    return this.page.locator("#removeDiscountFromUI");
  }

  get subtotalAmount() {
    return this.page.locator("#subtotal");
  }

  get totalAmount() {
    return this.page.locator("#finalPrice");
  }

  get totalPriceHidden() {
    return this.page.locator("#TotalPrice");
  }

  get hiddenDiscountCode() {
    return this.page.locator("#hiddenDiscountCode");
  }
}
