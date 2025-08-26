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
    return this.page.locator("#membership-2-header");
  }

  get membership2Body() {
    return this.page.locator("#membership-2-body");
  }

  get membership2Details() {
    return this.page.locator("#membership-2-details");
  }

  get membership2Price() {
    return this.page.locator("#membership-2-price");
  }

  get membership2Button() {
    return this.page.locator("#membership-2-button");
  }

  get membership3Card() {
    return this.page.locator("#membership-3");
  }

  get membership3Header() {
    return this.page.locator("#membership-3-header");
  }

  get membership3Body() {
    return this.page.locator("#membership-3-body");
  }

  get membership3Details() {
    return this.page.locator("#membership-3-details");
  }

  get membership3Price() {
    return this.page.locator("#membership-3-price");
  }

  get membership3Button() {
    return this.page.locator("#membership-3-button");
  }
  
}
