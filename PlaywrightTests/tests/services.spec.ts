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

test.describe("Services Page", { tag: ["@smoke", "@services"] }, async () => {
  test("Our Services", async ({ app }) => {
    And("the user clicks on Services page");
    await test.step("Verify Services page is loaded", async () => {
      await app.services.goToServicesPage();
      await app.navigation.pageUrlAsExpected(routes.navbarLinks.services);
    });

    And("the user sees main Title");
    await test.step("Verify Services page Tab title and main Title", async () => {
      await app.common.browserTabTitleAsExpected(
        strings.services.servicesTabTitle
      );
      await app.services.verifyOurServicesTitle();
    });

    And("the user sees all service titles");
    await test.step("Verify all service titles are visible", async () => {
      await app.services.verifyAllServiceTitles();
    });

    And("the user sees all service images");
    await test.step("Verify all service images are loaded", async () => {
      await app.services.verifyAllServiceImages();
    });

    And("the user hovers over all service cards");
    await test.step("Verify overlays appear on hover", async () => {
      await app.services.verifyAllServiceOverlays();
    });

    And("the user clicks each service card and returns");
    await test.step("Click each service card and go back", async () => {
      await app.services.clickAllCardsAndGoBack();
    });
  });

  test("Personal Training page", async ({ app }) => {
    And("the user clicks on Services page");
    await test.step("Verify Services page is loaded", async () => {
      await app.services.goToServicesPage();
      await app.navigation.pageUrlAsExpected(routes.navbarLinks.services);
    });

    And("the user clicks on Personal Training page");
    await test.step("Verify Services page is loaded", async () => {
      await app.services.clickPersonalTrainingCard();
      await app.navigation.pageUrlAsExpected(
        routes.allPages.servicePersonalTrainingPage
      );
    });

    await test.step("Verify Personal Training Tab Title", async () => {
      await app.common.browserTabTitleAsExpected(
        strings.services.personalTrainingPage.pageTitle
      );
    });

    await test.step("Verify Personal Training header section", async () => {
      await app.services.verifyPersonalTrainingHeaderSection();
    });

    await test.step("Verify Personal Training info section", async () => {
      await app.services.verifyPersonalTrainingInfoSection();
    });

    await test.step("Verify Personal Training benefits section", async () => {
      await app.services.verifyPersonalTrainingBenefitsSection();
    });

    await test.step("Verify Personal Training contact section and button", async () => {
      await app.services.verifyPersonalTrainingContactSectionAndButton();
    });
  });
});
