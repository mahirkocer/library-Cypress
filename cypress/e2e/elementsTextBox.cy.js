/// <reference types = "cypress"/>

describe('Textbox verification',()=>{
beforeEach('navigate to main page',()=>{
  cy.clearCookies();
  cy.visit('/elements');
  

})
it('fill the textbox',()=>{
  cy.get('#item-0').click();
  const fullName =cy.get('#userName');
  fullName.type('Mahir Kocer');
  cy.get('[type="email"]').type('mahir@hotmail.com');
  cy.get('#currentAddress').type('currentAdress');
  cy.get('#permanentAddress').type('perminantAdress');
  cy.get('#submit').click();
  cy.get('#name').then((name)=>{
    expect(name).to.have.text('Name:Mahir Kocer');
  });
  
})





})
