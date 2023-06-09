/// <reference types = "cypress"/>

describe('cypress examples',()=>{
beforeEach('cypress web page',()=>{
cy.visit('https://example.cypress.io/todo')

})
it('to do list',()=>{

cy.get('.todo-list li').should('have.length',2);

cy.get('.todo-list li').first().should('have.text','Pay electric bill');
cy.get('.todo-list li').last().should('have.text','Walk the dog')

})
it('add new todo to the list',()=>{
  const newItem= 'Go on practicing' 
  cy.get('[data-test=new-todo]').type(`${newItem}{enter}`);

  cy.get('.todo-list li').should('have.length',3)
  .last().should('have.text',`${newItem}`);

})
it.only('check any off completed item',()=>{
cy.contains('Walk the dog').parent()
.find('input[type =checkbox]')
.check();

cy.contains('Pay electric bill')
.parents('li')
.should('have.class','completed');

})

context('with a checked task', () => {
  beforeEach(() => {
    // We'll take the command we used above to check off an element
    // Since we want to perform multiple tests that start with checking
    // one element, we put it in the beforeEach hook
    // so that it runs at the start of every test.
    cy.contains('Pay electric bill')
      .parent()
      .find('input[type=checkbox]')
      .check()
  })

  it('can filter for uncompleted tasks', () => {
    // We'll click on the "active" button in order to
    // display only incomplete items
    cy.contains('Active').click();
  
    // After filtering, we can assert that there is only the one
    // incomplete item in the list.
    cy.get('.todo-list li').should('have.length',1)
    .should('have.text','Walk the dog');
   
    // For good measure, let's also assert that the task we checked off
    // does not exist on the page.
    cy.contains('Pay electric bill').should('not.exist');
  
  })

  it.only('can filter for completed tasks', () => {
    // We can perform similar steps as the test above to ensure
    // that only completed tasks are shown
    cy.contains('Completed').should('be.visible'). click()

    cy.get('.todo-list li')
      .should('have.length', 1)
      .first()
      .should('have.text', 'Pay electric bill')

    cy.contains('Walk the dog').should('not.exist')
  })

 xit('can delete all completed tasks', () => {
    // First, let's click the "Clear completed" button
    // `contains` is actually serving two purposes here.
    // First, it's ensuring that the button exists within the dom.
    // This button only appears when at least one task is checked
    // so this command is implicitly verifying that it does exist.
    // Second, it selects the button so we can click it.
    cy.contains('Clear completed').click()

    // Then we can make sure that there is only one element
    // in the list and our element does not exist
    cy.get('.todo-list li')
      .should('have.length', 1)
      .should('not.have.text', 'Pay electric bill')

    // Finally, make sure that the clear button no longer exists.
    cy.contains('Clear completed').should('not.exist')
  })
})

})