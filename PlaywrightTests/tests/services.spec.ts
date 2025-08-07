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
      await app.common.browserTabTitleAsExpected(strings.services.servicesTabTitle);
      await app.services.verifyOurServicesTitle();
    });

  });
});
