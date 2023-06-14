
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

  it('checkboxes',()=>{

    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

    cy.get('[type="checkbox"]').check(['option1','option2']);

  })
  
  it.only('Dropdown',()=>{
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each((item,index,list)=>{
      if(item.text()==='India'){
        cy.wrap(item).click();
      }
    })
    cy.get('#autocomplete').should('have.value','India')

    cy.get('select').select('option1').should('have.value','option1')


  })


  })
