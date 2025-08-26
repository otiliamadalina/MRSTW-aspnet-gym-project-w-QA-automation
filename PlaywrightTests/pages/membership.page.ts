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
  
}
