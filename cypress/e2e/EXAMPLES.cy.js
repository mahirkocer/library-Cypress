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




})