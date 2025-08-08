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

test.describe(
  "Services Page",
  { tag: ["@regression", "@services"] },
  async () => {
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
        await app.services.verifyServicesHeaderSection(
          app.services.services.personalTrainingHeader,
          app.services.services.personalTrainingTitle,
          app.services.services.personalTrainingSubtitle,
          strings.services.personalTrainingPage.headerTitle,
          strings.services.personalTrainingPage.headerSubtitle
        );
      });

      await test.step("Verify Personal Training info section", async () => {
        await app.services.verifyInfoSection(
          app.services.services.personalTrainingInfo,
          app.services.services.personalTrainingWhatTitle,
          strings.services.personalTrainingPage.whatIsTitle,
          app.services.services.personalTrainingWhatText,
          strings.services.personalTrainingSrc,
          strings.services.personalTrainingPage.whatIsText
        );
      });

      await test.step("Verify Personal Training benefits section", async () => {
        await app.services.verifyBenefitsSection(
          app.services.services.personalTrainingBenefits,
          app.services.services.personalTrainingBenefitsTitle,
          strings.services.personalTrainingPage.benefitsTitle,
          app.services.services.personalTrainingBenefitsList,
          strings.services.personalTrainingPage.benefitsList
        );
      });

      await test.step("Verify Personal Training contact section and button", async () => {
        await app.services.verifyContactSectionAndButton(
          app.services.services.personalTrainingContact,
          app.services.services.personalTrainingContactText,
          strings.services.personalTrainingPage.contactText,
          app.services.services.personalTrainingContactButton,
          strings.services.personalTrainingPage.contactButton,
          routes.allPages.contactPage
        );
      });
    });

    test("Group Programs page", async ({ app }) => {
      And("the user clicks on Services page");
      await test.step("Verify Services page is loaded", async () => {
        await app.services.goToServicesPage();
        await app.navigation.pageUrlAsExpected(routes.navbarLinks.services);
      });

      And("the user clicks on Group Programs page");
      await test.step("Verify Group Programs is loaded", async () => {
        await app.services.clickPersonalTrainingCard();
        await app.navigation.pageUrlAsExpected(
          routes.allPages.servicePersonalTrainingPage
        );
      });

      await test.step("Verify Group Programs Tab Title", async () => {
        await app.common.browserTabTitleAsExpected(
          strings.services.groupProgramsPage.pageTitle
        );
      });

      await test.step("Verify Group Programs header section", async () => {
        await app.services.verifyServicesHeaderSection(
          app.services.services.groupProgramsHeader,
          app.services.services.groupProgramsTitle,
          app.services.services.groupProgramsSubtitle,
          strings.services.groupProgramsPage.headerTitle,
          strings.services.groupProgramsPage.headerSubtitle
        );
      });

      await test.step("Verify Group Programs info section", async () => {
        await app.services.verifyInfoSection(
          app.services.services.groupProgramsInfo,
          app.services.services.groupProgramsWhatTitle,
          strings.services.groupProgramsPage.whatIsTitle,
          app.services.services.groupProgramsWhatText,
          strings.services.groupProgramsSrc,
          strings.services.groupProgramsPage.whatIsText
        );
      });

      await test.step("Verify Group Programs benefits section", async () => {
        await app.services.verifyBenefitsSection(
          app.services.services.groupProgramsBenefits,
          app.services.services.groupProgramsBenefitsTitle,
          strings.services.groupProgramsPage.benefitsTitle,
          app.services.services.groupProgramsBenefitsList,
          strings.services.groupProgramsPage.benefitsList
        );
      });

      await test.step("Verify Group Programs contact section and button", async () => {
        await app.services.verifyContactSectionAndButton(
          app.services.services.groupProgramsContact,
          app.services.services.groupProgramsContactText,
          strings.services.groupProgramsPage.contactText,
          app.services.services.groupProgramsContactButton,
          strings.services.groupProgramsPage.contactButton,
          routes.allPages.contactPage
        );
      });
    });

    test("Nutrition Coaching page", async ({ app }) => {
      And("the user clicks on Services page");
      await test.step("Verify Services page is loaded", async () => {
        await app.services.goToServicesPage();
        await app.navigation.pageUrlAsExpected(routes.navbarLinks.services);
      });

      And("the user clicks on Nutrition Coaching page");
      await test.step("Verify Nutrition Coaching is loaded", async () => {
        await app.services.clickNutritionCoachingCard();
        await app.navigation.pageUrlAsExpected(
          routes.allPages.serviceNutritionCoachingPage
        );
      });

      await test.step("Verify Nutrition Coaching Tab Title", async () => {
        await app.common.browserTabTitleAsExpected(
          strings.services.nutritionCoachingPage.pageTitle
        );
      });

      await test.step("Verify Nutrition Coaching header section", async () => {
        await app.services.verifyServicesHeaderSection(
          app.services.services.nutritionCoachingHeader,
          app.services.services.nutritionCoachingTitle,
          app.services.services.nutritionCoachingSubtitle,
          strings.services.nutritionCoachingPage.headerTitle,
          strings.services.nutritionCoachingPage.headerSubtitle
        );
      });

      await test.step("Verify Nutrition Coaching info section", async () => {
        await app.services.verifyInfoSection(
          app.services.services.nutritionCoachingInfo,
          app.services.services.nutritionCoachingWhatTitle,
          strings.services.nutritionCoachingPage.whatIsTitle,
          app.services.services.nutritionCoachingWhatText,
          strings.services.nutritionCoachingSrc,
          strings.services.nutritionCoachingPage.whatIsText
        );
      });

      await test.step("Verify Nutrition Coaching benefits section", async () => {
        await app.services.verifyBenefitsSection(
          app.services.services.nutritionCoachingBenefits,
          app.services.services.nutritionCoachingBenefitsTitle,
          strings.services.nutritionCoachingPage.benefitsTitle,
          app.services.services.nutritionCoachingBenefitsList,
          strings.services.nutritionCoachingPage.benefitsList
        );
      });

      await test.step("Verify Nutrition Coaching contact section and button", async () => {
        await app.services.verifyContactSectionAndButton(
          app.services.services.nutritionCoachingContact,
          app.services.services.nutritionCoachingContactText,
          strings.services.nutritionCoachingPage.contactText,
          app.services.services.nutritionCoachingContactButton,
          strings.services.nutritionCoachingPage.contactButton,
          routes.allPages.contactPage
        );
      });
    });
  }
);
