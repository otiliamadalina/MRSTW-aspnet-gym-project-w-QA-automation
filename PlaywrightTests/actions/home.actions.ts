import BaseActions from "./base.actions";
import HomePage from "../pages/home.page";
import { BrowserContext, expect, Page } from "@playwright/test";

export default class HomeActions extends BaseActions {
  home: HomePage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.home = new HomePage(page, context);
  }

  async verifyHeroCarousel() {
    const heroCarouselImages = this.home.heroCarousel;
    const count = await heroCarouselImages.count();

    for(let i = 0; i < count; i++) {
      const image = heroCarouselImages.nth(i);
      await expect(image).toBeVisible();
      await expect(image).toHaveAttribute("src", /.*\.jpg/);
      
      console.log('Image ' + (i + 1) + ' is visible with src: ' + await image.getAttribute('src'));
    }

  }
}