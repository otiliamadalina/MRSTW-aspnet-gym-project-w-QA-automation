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
    await app.common.browserTabTitleAsExpected(strings.home.ourMembershipsCards.membershipTabTitle);
  });
});

test.describe(
  "Membership Page tests",
  { tag: ["@regression", "@membership"] },
  async () => {
    test("Cards section", async ({ app }) => {
      And("the user sees Cards");
      await test.step("Verify Cards are visible", async () => {
        await app.membership.locateMembershipCards();
      });

       And("the user sees First card Title");
      await test.step("Verify First card Title", async () => {

      });

      And("the user sees First card Details");
      await test.step("Verify First card Details", async () => {

      });

      And("the user sees First card Price");
      await test.step("Verify First card Price", async () => {

      });

      And("the user sees First card Button");
      await test.step("Verify First card Button", async () => {

      });

      And("the user sees Second card Title");
      await test.step("Verify Second card Title", async () => {

      });

      And("the user sees Second card Details");
      await test.step("Verify Second card Details", async () => {

      });

      And("the user sees Second card Price");
      await test.step("Verify Second card Price", async () => {

      });

      And("the user sees Second card Button");
      await test.step("Verify Second card Button", async () => {


      And("the user sees Third card Title");
      await test.step("Verify Third card Title", async () => {

      });

      And("the user sees Third card Details");
      await test.step("Verify Third card Details", async () => {

      });

      And("the user sees Third card Price");
      await test.step("Verify Third card Price", async () => {

      });

      And("the user sees Third card Button");
      await test.step("Verify Third card Button", async () => {

      });
    });





    });

    test("Description section", async ({ app }) => {
    });
  }
);

test.describe(
  "Checkout Page tests",
  { tag: ["@regression", "@membership"] },
  async () => {
    test("", async ({ app }) => {
      And("the user sees ");
      await test.step("", async () => {
        await app.membership.locateMembershipCards();
      });

    });
    
    test("Description section", async ({ app }) => {
    });
  }
);