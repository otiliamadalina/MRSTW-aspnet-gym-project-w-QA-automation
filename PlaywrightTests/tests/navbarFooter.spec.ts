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
  "Navbar&Footer tests",
  { tag: ["@smoke", "@navbarFooter"] },
  async () => {
    test("", async ({ app }) => {
      And("the user sees Navigation bar");
      await test.step("Locate Navigation bar is visible", async () => {
        await app.navbarFooter.locateNavbar();
      });

      And("the user locates Logo");
      await test.step("Locate Logo", async () => {
        await app.navbarFooter.locateLogo();
      });

      And("the user sees Logo image");
      await test.step("Verify Logo image and image title", async () => {
        await app.navbarFooter.verifyLogoImg();
      });

      And("the user sees Logo text");
      await test.step("Verify Logo text", async () => {
        await app.navbarFooter.verifyLogoText();
      });
    });
  }
);
