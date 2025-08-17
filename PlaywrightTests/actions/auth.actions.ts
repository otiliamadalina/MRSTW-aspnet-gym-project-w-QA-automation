import BaseActions from "./base.actions";
import HomePage from "../pages/home.page";
import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import { BrowserContext, expect, Page } from "@playwright/test";
import CommonActions from "./common.actions";
import AuthPage from "../pages/auth.page";

export default class AuthActions extends CommonActions {
  auth: AuthPage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.auth = new AuthPage(page, context);
  }

  async verifyMadGymImageContainter() {
    const container = this.auth.madGymImageContainter;
    await expect(container).toBeVisible();
  }

  async verifyMadGymText() {
    const title = this.auth.madGymText;
    await expect(title).toBeVisible();
    await expect(title).toHaveText(strings.auth.madGymTitle);
  }

  async verifyUnlockSubtext() {
    const subtext = this.auth.unlockSubtext;
    await expect(subtext).toBeVisible();
    await expect(subtext).toHaveText(strings.auth.unlockSubtext);
  }

  /// ---

  async verifyRegisterFormContainer() {
    await this.auth.registerLink.click();
    await expect(this.auth.registerFormContainer).toBeVisible();
  }

  async verifyJoinUsText() {
    const heading = this.auth.joinUsText;
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText(strings.auth.joinUsTitle);
  }

  async verifyCreateAccText() {
    const text = this.auth.createAccText;
    await expect(text).toBeVisible();
    await expect(text).toHaveText(strings.auth.createAccText);
  }

  async verifyRegisterUserName() {
    const input = this.auth.registerUserName;
    await expect(input).toBeVisible();
    await expect(input).toHaveAttribute(
      "placeholder",
      strings.auth.registerUsernamePlaceholder
    );
    await expect(input).toHaveAttribute(
      "title",
      strings.auth.registerUsernameTitle
    );
  }

  async verifyRegisterEmail() {
    const input = this.auth.registerEmailField;
    await expect(input).toBeVisible();
    await expect(input).toHaveAttribute(
      "placeholder",
      strings.auth.registerEmailPlaceholder
    );
    await expect(input).toHaveAttribute(
      "title",
      strings.auth.registerEmailTitle
    );
  }

  async verifyRegisterPassword() {
    const input = this.auth.registerPasswordField;
    await expect(input).toBeVisible();
    await expect(input).toHaveAttribute(
      "placeholder",
      strings.auth.registerPasswordPlaceholder
    );
    await expect(input).toHaveAttribute(
      "title",
      strings.auth.registerPasswordTitle
    );
  }

  async verifyRegisterSubmitBtn() {
    const button = this.auth.registerSubmitBtn;
    await expect(button).toBeVisible();
    await expect(button).toHaveText(strings.auth.registerButton);
  }

 async verifyHaveAccSubtext() {
  const text = this.auth.haveAccSubtext;
  await expect(text).toBeVisible();
  await expect(text).toContainText(strings.auth.alreadyHaveAccText);
}


  async verifyLoginLink() {
    const link = this.auth.loginLink;
    await expect(link).toBeVisible();
    await expect(link).toHaveText(strings.auth.loginLinkText);
  }

  async verifyLoginFormContainer() {
    const container = this.auth.loginFormContainer;
    await expect(container).toBeVisible();
  }

  async verifyWelcomeText() {
    const heading = this.auth.welcomeText;
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText(strings.auth.welcomeTitle);
  }

  async verifyLoginSubtext() {
    const subtext = this.auth.loginSubtext;
    await expect(subtext).toBeVisible();
    await expect(subtext).toHaveText(strings.auth.loginSubtext);
  }

  async verifyLoginUserName() {
    const input = this.auth.loginUserName;
    await expect(input).toBeVisible();
    await expect(input).toHaveAttribute(
      "placeholder",
      strings.auth.loginUsernamePlaceholder
    );
    await expect(input).toHaveAttribute(
      "title",
      strings.auth.loginUsernameTitle
    );
  }

  async verifyLoginPassword() {
    const input = this.auth.loginPassword;
    await expect(input).toBeVisible();
    await expect(input).toHaveAttribute(
      "placeholder",
      strings.auth.loginPasswordPlaceholder
    );
    await expect(input).toHaveAttribute(
      "title",
      strings.auth.loginPasswordTitle
    );
  }

  async verifyLoginSubmitBtn() {
    const button = this.auth.loginSubmitBtn;
    await expect(button).toBeVisible();
    await expect(button).toHaveText(strings.auth.loginButton);
  }

  async verifyOrSubtext() {
    const text = this.auth.orSubtext;
    await expect(text).toBeVisible();
    await expect(text).toHaveText(strings.auth.orText);
  }

  async verifyGoogleBtn() {
    const button = this.auth.googleBtn;
    await expect(button).toBeVisible();
  }

  async verifyFacebookBtn() {
    const button = this.auth.facebookBtn;
    await expect(button).toBeVisible();
  }

  async verifyAppleBtn() {
    const button = this.auth.appleBtn;
    await expect(button).toBeVisible();
  }




  async verifyRegisterNowSubtext() {
  const locator = this.auth.registerNowSubtext;
  await expect(locator).toBeVisible();
  await expect(locator).toContainText(strings.auth.dontHaveAccText);
 }

  async verifyRegisterLink() {
    const link = this.auth.registerLink;
    await expect(link).toBeVisible();
    await expect(link).toHaveText(strings.auth.registerNowLink);
  }

  async verifyForgotPasswordSubtext() {
    const text = this.auth.forgotPasswordSubtext;
    await expect(text).toBeVisible();
    await expect(text).toContainText(strings.auth.forgotPasswordText);
  }

  async verifyForgotPasswordLink() {

    const link = this.auth.forgotPasswordLink;
    await expect(link).toBeVisible();
    await expect(link).toContainText(strings.auth.resetPasswordLink);
  }
}
