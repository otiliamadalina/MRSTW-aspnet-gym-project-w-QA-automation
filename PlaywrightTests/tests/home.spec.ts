import routes from "../resources/routes.json";
import strings from "../resources/strings.json";
import { Given, Then } from "../utils/annotations";
import test from "./test";

test.beforeEach(async ({ app }) => {
     Given("the user accesses the Login Page");
  await test.step("Navigate to MADGYM Home Page", async () => {
    await app.base.navigateTo(routes.homeLinks.home);
    await app.navigation.pageUrlAsExpected(routes.homeLinks.home);
    await app.common.browserTabTitleAsExpected(strings.home.homeTitle);
  });
});

test.describe("Home page tests", { tag: ["@smoke", "@home"] }, async () => {
  test("", async ({ app }) => {});
});
