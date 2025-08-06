import BaseActions from "./base.actions";
import HomePage from "../pages/home.page";
import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import { BrowserContext, expect, Page } from "@playwright/test";
import AboutPage from "../pages/about.page";

export default class AboutActions extends BaseActions {
  about: AboutPage;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);
    this.about = new AboutPage(page, context);
  }

  async verifyAboutPageContent() {
    // About Us
    await expect(
      this.about.h2Locator(strings.aboutPage.aboutUsTitle)
    ).toBeVisible();
    await expect(
      this.about.pLocator(strings.aboutPage.aboutUsParagraph)
    ).toBeVisible();

    // Our Mission
    await expect(
      this.about.h3Locator(strings.aboutPage.ourMissionTitle)
    ).toBeVisible();
    await expect(
      this.about.pLocator(strings.aboutPage.ourMissionParagraph)
    ).toBeVisible();

    // What We Offer
    await expect(
      this.about.h3Locator(strings.aboutPage.whatWeOfferTitle)
    ).toBeVisible();
    await expect(
      this.about.liLocator(
        strings.aboutPage.whatWeOffer1Strong +
          " " +
          strings.aboutPage.whatWeOffer1Description
      )
    ).toBeVisible();
    await expect(
      this.about.liLocator(
        strings.aboutPage.whatWeOffer2Strong +
          " " +
          strings.aboutPage.whatWeOffer2Description
      )
    ).toBeVisible();
    await expect(
      this.about.liLocator(
        strings.aboutPage.whatWeOffer3Strong +
          " " +
          strings.aboutPage.whatWeOffer3Description
      )
    ).toBeVisible();
    await expect(
      this.about.liLocator(
        strings.aboutPage.whatWeOffer4Strong +
          " " +
          strings.aboutPage.whatWeOffer4Description
      )
    ).toBeVisible();

    // Our Values
    await expect(
      this.about.h3Locator(strings.aboutPage.ourValuesTitle)
    ).toBeVisible();
    await expect(
      this.about.liLocator(
        strings.aboutPage.ourValues1Strong +
          " " +
          strings.aboutPage.ourValues1Description
      )
    ).toBeVisible();
    await expect(
      this.about.liLocator(
        strings.aboutPage.ourValues2Strong +
          " " +
          strings.aboutPage.ourValues2Description
      )
    ).toBeVisible();
    await expect(
      this.about.liLocator(
        strings.aboutPage.ourValues3Strong +
          " " +
          strings.aboutPage.ourValues3Description
      )
    ).toBeVisible();

    // Meet The Team
    await expect(
      this.about.h3Locator(strings.aboutPage.meetTheTeamTitle)
    ).toBeVisible();
    await expect(
      this.about.pLocator(strings.aboutPage.meetTheTeamParagraph)
    ).toBeVisible();

    // Join Us Today
    await expect(
      this.about.h3Locator(strings.aboutPage.joinUsTodayTitle)
    ).toBeVisible();
    await expect(
      this.about.pLocator(strings.aboutPage.joinUsTodayParagraph)
    ).toBeVisible();
  }
}
