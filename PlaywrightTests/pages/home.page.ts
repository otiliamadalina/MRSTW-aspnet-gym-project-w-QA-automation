import { BrowserContext, Page } from "@playwright/test";
import BasePage from "./base.page";

export default class HomePage extends BasePage {

    get heroCarousel(){
        return this.page.locator("#heroCarousel");
    }

}