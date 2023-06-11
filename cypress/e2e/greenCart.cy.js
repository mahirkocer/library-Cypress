describe('Select an element with different locators', () => {
  beforeEach(()=>{
    cy.clearCookies();
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
  })

  it('Add to chart a potato', () => {
    cy.get('.products').find('.product').eq(10).contains('ADD TO CART').click();
    cy.get('.cart-icon > img').click();
  })
})