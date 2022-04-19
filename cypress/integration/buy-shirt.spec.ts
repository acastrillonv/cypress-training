import {
  MenuContentPage, ProductsListPage, ShopingCartPage, LoginPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shopingCartPage = new ShopingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productsListPage.clickAddToCart();
    productsListPage.clickProceedeToCheckout();

    shopingCartPage.clickProceedeToCheckout();

    loginPage.enterEmail();
    loginPage.enterPasswd();
    loginPage.submitLogin();

    addressStepPage.clickProceedeToCheckout();

    shippingStepPage.clickAgreeTerms();
    shippingStepPage.clickProceedeToCheckout();

    paymentStepPage.payByBankWire();
    paymentStepPage.confirmOrder();

    // Debes completar la prueba ... implementa los pasos 8 al 13, del proceso de compra

    cy.get("#center_column > div > p > strong")
      .should("have.text", "Your order on My Store is complete.");
  });
});
