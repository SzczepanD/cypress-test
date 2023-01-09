/// <reference types="cypress" />;

describe(" Creating a user account ", () => {
    it("Entering data of an already existing account", () => {
      cy.enteringData();
      cy.get("ul.error-messages:first-child").should(
        "contain",
        " email has already been taken "
      );
      cy.get("ul.error-messages:nth-child(1)").then((div) => {
        expect(div).to.contain(" username has already been taken ");
      });
    });
  
    it("Create new account", () => {
      cy.newAccount();
    });
  
    it("Wrong login details", () => {
      cy.wrongLogin();
      cy.get("ul.error-messages").should(
        "contain",
        " email or password is invalid "
      );
    });
  
    it("Login and create new article", () => {
      cy.login();
      cy.createNewArticle();
    });
  });