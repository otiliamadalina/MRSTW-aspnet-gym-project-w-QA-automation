import { BrowserContext, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class CommonPage extends BasePage {
  constructor(page: Page, context: BrowserContext) {
    super(page, context);
  }

  get tabTitle() {
    return this.page.title();
  }

  //-------- Headers % P
  h1Locator(text: string) {
    return this.page.locator("h1", { hasText: `${text}` });
  }

  h2Locator(text: string) {
    return this.page.locator("h2", { hasText: `${text}` });
  }

  h3Locator(text: string) {
    return this.page.locator("h3", { hasText: `${text}` });
  }

  pLocator(text: string) {
    return this.page.locator("p", { hasText: `${text}` });
  }

  liLocator(text: string) {
    return this.page.locator("li", { hasText: `${text}` });
  }

  strongLocator(text: string) {
    return this.page.locator("strong", { hasText: `${text}` });
  }

  getLinkByText(text: string) {
    return this.page.locator("a", { hasText: `${text}` });
  }

  get usernameInput() {
    return this.page.locator('input[name="Login.UserName"]');
  }

  get passwordInput() {
    return this.page.locator('input[name="Login.Password"]');
  }

  get loginButton() {
    return this.page.locator("#LoginSubmitBtn");
  }

  userProfileLink(username: string) {
    return this.page.getByRole("link", { name: username });
  }

  get userDashButtonDesktop() {
    return this.page.locator("#userDashboardButtonDesktop");
  }

  get userDashButtonMobile() {
    return this.page.locator("#offcanvasSidebar #userDashboardButton");
  }

  get aboutLink() {
    return this.page.locator("#aboutLink");
  }

  get servicesLink() {
    return this.page.locator("#servicesLink");
  }

  get membershipLink() {
    return this.page.locator("#membershipLink");
  }

  get membereshipLink() {
    return this.page.locator("#membereshipLink");
  }

  get contactLink() {
    return this.page.locator("#contactLink");
  }

  get adminDashboardButtonDesktop() {
    return this.page.locator("#adminDashboardButtonDesktop");
  }

  get adminDashboardButtonMobile() {
    return this.page.locator("#adminDashboardButtonMobile");
  }

  get userDashboardButtonDesktop() {
    return this.page.locator("#userDashboardButtonDesktop");
  }

  get userDashboardButtonMobile() {
    return this.page.locator("#userDashboardButtonMobile");
  }

  get authPageLinkDesktop() {
    return this.page.locator("#authPageLinkDesktop");
  }

  get authPageLinkMobile() {
    return this.page.locator("#authPageLinkMobile");
  }

  get forgotPasswordLink() {
    return this.page.locator("#forgotPasswordLink");
  }

  get editProfileButton() {
    return this.page.locator("#editProfileLink");
  }

  get resetPasswordLink() {
    return this.page.locator("#resetPasswordLink");
  }

  get paymentHistoryLink() {
    return this.page.locator("#paymentHistoryLink");
  }

  get checkoutLink() {
    return this.page.locator("#checkoutLink");
  }

  get orderSuccessLink() {
    return this.page.locator("#orderSuccessLink");
  }

  get termsAndConditionsLink() {
    return this.page.locator("#termsAndConditionsLink");
  }
}
