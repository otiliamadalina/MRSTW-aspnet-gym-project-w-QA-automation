import { planCard } from "../actions/membership.actions";
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
    await app.common.browserTabTitleAsExpected(
      strings.home.ourMembershipsCards.membershipTabTitle
    );
  });
});

test.describe(
  "Membership Page tests",
  { tag: ["@regression", "@membership"] },
  async () => {
    test("Cards section", async ({ app }) => {
      And("the user sees First card Title");
      await test.step("Verify First card Title", async () => {
        await app.membership.checkMembership1Header();
      });

      And("the user sees First card Details");
      await test.step("Verify First card Details", async () => {
        await app.membership.checkMembership1Details();
      });

      And("the user sees First card Price");
      await test.step("Verify First card Price", async () => {
        await app.membership.checkMembership1Price();
      });

      And("the user sees First card Button");
      await test.step("Verify First card Button", async () => {
        await app.membership.checkMembership1Button();
      });

      And("the user sees Second card Title");
      await test.step("Verify Second card Title", async () => {
        await app.membership.checkMembership2Header();
      });

      And("the user sees Second card Details");
      await test.step("Verify Second card Details", async () => {
        await app.membership.checkMembership2Details();
      });

      And("the user sees Second card Price");
      await test.step("Verify Second card Price", async () => {
        await app.membership.checkMembership2Price();
      });

      And("the user sees Second card Button");
      await test.step("Verify Second card Button", async () => {
        await app.membership.checkMembership2Button();
      });

      And("the user sees Third card Title");
      await test.step("Verify Third card Title", async () => {
        await app.membership.checkMembership3Header();
      });

      And("the user sees Third card Details");
      await test.step("Verify Third card Details", async () => {
        await app.membership.checkMembership3Details();
      });

      And("the user sees Third card Price");
      await test.step("Verify Third card Price", async () => {
        await app.membership.checkMembership3Price();
      });

      And("the user sees Third card Button");
      await test.step("Verify Third card Button", async () => {
        await app.membership.checkMembership3Button();
      });
    });

    test("Description section", async ({ app }) => {
      And("the user sees Membership Benefits Header");
      await test.step("Verify Membership Benefits Header", async () => {
        await app.membership.verifyMembershipBenefitsHeader();
      });

      And("the user sees Membership Paragraphs");
      await test.step("Verify Membership Paragraphs", async () => {
        await app.membership.verifyMembershipsParagraphs();
      });
    });

    test("Verify Choose buttons for different user roles", async ({ app }) => {
      And(
        "the authenticated user clicks on all Choose buttons and is redirected to Checkout page"
      );
      await test.step("Verify Choose buttons as user", async () => {
        await app.membership.verifyChooseButtonAsUser();
      });

      And(
        "the admin clicks on all Choose buttons and is redirected to Admin Dashboard page"
      );
      await test.step("Verify Choose buttons as admin", async () => {
        await app.membership.verifyChooseButtonAsAdmin();
      });
    });
  }
);

test.describe(
  "Checkout Page tests",
  { tag: ["@regression", "@membership"] },
  async () => {
    test("Verify Order Checkout Container", async ({ app }) => {
      And("the user accesses Checkout page by clicking Basic membership");
      await test.step("Access Checkout page through clicking Basic Plan", async () => {
        
        //TODO: De adaugat pas: Autentificarea
        await app.membership.clickMembership(planCard.basic);
      });

      And("the user sees Billing Details");
      await test.step("Verify Billing Details labels and Fields", async () => {
        await app.membership.verifyUserInfoFieldsAndLabels();
      });

      And("the user sees Membership Plan Dropdown");
      await test.step("Membership Plan Dropdown", async () => {
        await app.membership.verifyMembershipPlanDropdown();
      });

      And("the user sees Membership Duration Dropdown");
      await test.step("Membership Duration Dropdown", async () => {
        await app.membership.verifyMembershipDurationDropdown();
      });

      And("the user sees Card info fields and labels");
      await test.step("Card info Fields and Labels", async () => {
        await app.membership.verifyCardInfoFieldsAndLabels();
      });

      And("the user sees Terms checkbox and text and Checks it");
      await test.step("Terms checkbox and text", async () => {
        await app.membership.verifyTermsCheckbox();
      });

      And("the user sees Place Order button and clicks it without filling details");
      await test.step("Place Order button", async () => {
        await app.membership.verifyPlaceOrderButton();
      });
      
    });

    test("Verify Order Summary Container", async ({ app }) => {
      And("the user accesses Checkout page by clicking Basic membership");
      await test.step("Access Checkout page through clicking Premium Plan", async () => {
        await app.membership.clickMembership(planCard.premium);
      });

      And("the user sees Membership Duration Dropdown");
      await test.step("Membership Duration Dropdown", async () => {
        await app.membership.verifyMembershipDurationDropdown();
      });

      And("the user sees Discount Code Field and Label");
      await test.step("Discount Code Field and Label", async () => {
        await app.membership.verifyDiscountCodeFieldAndLabel(strings.checkout.discountTen);
      });


    });
  }
);
