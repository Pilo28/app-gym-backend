describe('Login Page:', () => {
  it('should login to the diary with the correct credentials.', () => {
    cy.visit('/');
    cy.get('#username').type('mario@mario.com');
    cy.get('#password').type('1234');
    cy.get('[data-cy="submit"]').click();
    cy.contains('Workout diary');
  });
});
