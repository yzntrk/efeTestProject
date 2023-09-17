/// <reference types= "cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("Aspire Test Cases", () => {
  it("Randomly enter the website ar or en", () => {
    let Websites = [
      "https://www.almosafer.com/en?ncr=1",
      "https://www.almosafer.com/ar?ncr=1",
    ];
    let RandomIndex = Math.floor(Math.random() * Websites.length);
    cy.visit(Websites[RandomIndex]);

    let ArabicCities = ["دبي", "جدة"];
    let ArabicRandomIndex = Math.floor(Math.random() * ArabicCities.length);
    let EnglishCities = ["Jeddah", "Dubai", "Ryadh"];
    let EnglishRandomIndex = Math.floor(Math.random() * EnglishCities.length);

    // cy.get(" .cta_saudi").click();
    cy.get("#uncontrolled-tab-example-tab-hotels").click();
    if (RandomIndex == 0) {
      cy.get('[data-testid="AutoCompleteInput"]').type(
        ArabicCities[ArabicRandomIndex]
      );
    } else {
      cy.get('[data-testid="AutoCompleteInput"]').type(
        EnglishCities[EnglishRandomIndex]
      );
    }
  });
});
