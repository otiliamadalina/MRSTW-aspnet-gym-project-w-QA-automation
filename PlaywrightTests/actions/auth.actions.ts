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
}