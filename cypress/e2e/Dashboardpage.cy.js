describe("Dashboard Flow", () => {
  it.only("Users should be able to create/Add an Admin", () => {
    cy.typeInlogindetails();
    cy.clickAnyLink("Admin");
    cy.clickAnyButtonWithText("Add");
    cy.clickdropdownAndSelect(
      ".oxd-form-row:nth-child(1)>div>div:nth-of-type(1) .oxd-select-wrapper .oxd-select-text-input",
      "ESS"
    );
    cy.typeIntoInputfield(
      "form > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input",
      "D"
    );
    cy.clickdropdownAndSelect(
      ".oxd-form>div>div:nth-of-type(1)>:nth-child(3)>div>:nth-child(2)>div>div>div.oxd-select-text-input",
      "Enabled"
    );
    cy.inputfield(
      ".oxd-form-row>div>div:nth-child(4)>div>div:nth-of-type(2)>input",
      "Testname"
    );
    cy.inputfield(
      " div.oxd-grid-item.oxd-grid-item--gutters.user-password-cell > div > div:nth-child(2) > input",
      "TestUser1234"
    );
    cy.inputfield(
      "div:nth-child(2) > div > div:nth-child(2) > input",
      "TestUser1234"
    );
    cy.clickAnyButtonWithText("Save");
    cy.log("New Admin Created Successfully");
  });
  it("Users should be able to create/Add an Admin", () => {
    cy.get("[alt=orangehrm-logo]").should("be.visible");
    cy.typeInUsername();
    cy.typeInPassword();
    cy.clickAnyButtonWithText("Login");
  });
});
