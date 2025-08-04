import { expect } from "@playwright/test";
import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import { And, Given, Then } from "../utils/annotations";
import test from "./test";

test.beforeEach(async ({ app }) => {
  Given("the user accesses the MADGYM Home page");
  await test.step("Navigate to MADGYM Home page", async () => {
    await app.base.navigateTo(routes.homeLinks.home);
    await app.navigation.pageUrlAsExpected(routes.homeLinks.home);
    await app.common.browserTabTitleAsExpected(strings.home.homeTitle);
  });
});

test.describe("Home page tests", { tag: ["@smoke", "@home"] }, async () => {
  test("Hero section", async ({ app }) => {

    And("the user sees hero carousel images");
    await test.step("Verify hero carousel images are visible", async () => {
      await app.home.verifyHeroCarousel();
    });

    And("the user sees hero title");
    await test.step("Verify hero title is visible", async () => {
      await app.home.verifyHeroTitle(strings.home.heroSection.heroTitle);
    });

    And("the user sees hero description");
    await test.step("Verify hero description is visible", async () => {
      await app.home.verifyHeroDescription(strings.home.heroSection.heroDescription);
    });

    And("the user sees and clicks on Join Now button");
    await test.step("Verify Join Now button is visible and clickable", async () => {
      await app.home.verifyJoinNowButton();
    });
  });

  test("Our Services section", async ({ app }) => {
    
    And("the user sees Our Services cards");
    await test.step("Verify Our Services cards are visible", async () => {
      await app.home.verifyOurServicesCards();
    });
    
    And("the user sees Our Services cards titles");
    await test.step("Verify Our Services cards titles", async() =>  {
      await app.home.verifyServiceCardTitle(strings.home.ourServicesCards.personalTraining);
      await app.home.verifyServiceCardTitle(strings.home.ourServicesCards.groupClasses);
      await app.home.verifyServiceCardTitle(strings.home.ourServicesCards.nutritionCoaching
      );
    });

    And("the user sees Our Services cards description");
    await test.step("Verify Our Services cards description", async() => {
      await app.home.verifyServiceCardDescription(strings.home.ourServicesCards.personalTrainingDescription);
      await app.home.verifyServiceCardDescription(strings.home.ourServicesCards.groupClassesDescription);
      await app.home.verifyServiceCardDescription(strings.home.ourServicesCards.nutritionCoachingDescription);
    });

    And("the user sees Our Services section button See Services");
    await test.step("Verify Our Services section button", async () => {
      await app.home.verifySeeServicesButton();
    });
  });
});
