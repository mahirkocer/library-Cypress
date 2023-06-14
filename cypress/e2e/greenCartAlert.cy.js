
/// <reference types ="cypress"  />


describe('Select an element with different locators', () => {
  beforeEach(()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  })

  it('Radio button', () => {
   cy.get('[value="radio1"]').check().should('be.checked');
   cy.get('[value="radio2"]').check().should('be.checked');
   cy.get('[value="radio3"]').check().should('be.checked');
  })

  })
