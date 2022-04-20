import { MenuContentPage, DressesListPage } from "../page/index";

const names = ["Printed Dress", "Printed Dress", "Printed Summer Dress", "Printed Summer Dress", "Printed Chiffon Dress"];

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
  });

  it("show the available dresses", () => {
    // ... realiza la prueba
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToDressesMenu();

    dressesListPage.getDressProducts();
    dressesListPage.validateItemsNumber(5);
    dressesListPage.validateItemsNames(names);
  });
});
