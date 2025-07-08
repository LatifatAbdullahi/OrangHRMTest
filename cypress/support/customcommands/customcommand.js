let loginPage;
let homePage;

before(() => {
  cy.fixture("elements").then((sel) => {
    homePage = sel.elements.homePage;
    loginPage = sel.elements.loginPage;
  });
});

Cypress.Commands.add("typeInlogindetails", () => {
  cy.get(loginPage.usernamefield).type("Admin");
  cy.get(loginPage.passwordfield).type("admin123");
  //cy.get(loginPage.loginbutton).click()
  cy.clickAnyButtonWithText("Login");
});
Cypress.Commands.add("typeInPassword", () => {
  cy.get(loginPage.passwordfield).type("admin123");
});
Cypress.Commands.add("typeInUsername", () => {
  cy.get(loginPage.usernamefield).type("Admin");
});
Cypress.Commands.add("clickAnyButtonWithText", (text) => {
  cy.get("button").contains(text).click();
});

Cypress.Commands.add("clickAnyLink", (text) => {
  cy.get("a").contains(text).click();
});
Cypress.Commands.add("clickdropdownAndSelect", (element, text) => {
  cy.get(element).click();
  cy.get("div[role='listbox']").contains(text).click()
});

// })
Cypress.Commands.add("typeIntoInputfield", (element, text) => {
  cy.get(element).type(text)
  cy.get("div[role='listbox']").contains(text).click()

});

Cypress.Commands.add("inputfield",(element, text)=>{
  cy.get(element).type(text)

})