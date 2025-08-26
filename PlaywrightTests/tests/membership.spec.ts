import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import { And, Given, Then } from "../utils/annotations";
import test from "./test";

test.beforeEach(async ({ app }) => {
  Given("the user accesses MADGYM Home page");
  await test.step("Navigate to MADGYM Home page", async () => {
    await app.base.navigateTo(routes.homeLinks.home);
    await app.navigation.pageUrlAsExpected(routes.homeLinks.home);
    await app.common.browserTabTitleAsExpected(strings.home.homeTitle);
  });

  And("the user accesses Membership page");
  await test.step("Navigate to Auth page", async () => {
    await app.navbarFooter.navigateToPageByLinkText(
      strings.navBar.membership,
      routes.allPages.membershipPage
    );
    await app.navigation.pageUrlAsExpected(routes.navbarLinks.membership);
    await app.common.browserTabTitleAsExpected(strings.auth.authTabTitle);
  });
});

test.describe(
  "Membership Page tests",
  { tag: ["@regression", "@membership"] },
  async () => {
    test("Login form section", async ({ app }) => {
      And("the user sees the MAD GYM image container");
      await test.step("Verify MAD GYM image container is visible", async () => {
        await app.auth.verifyMadGymImageContainter();
      });
    });
  }
);