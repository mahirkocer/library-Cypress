describe('As a user, I want to login so that I should see the main features', () => {
  beforeEach(()=>{
    cy.visit('/login.html')
  })

  it('login with valid credentials', () => {
    cy.get(':nth-child(3) > label').type('librarian31@library');
    cy.get(':nth-child(4) > label').type('libraryUser');
    cy.get('button').should('contain','Sign in').click();
    cy.title('contain','dashboard');
  })
})