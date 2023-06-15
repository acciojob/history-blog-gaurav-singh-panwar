//your JS code here. If required.
it('testing tags', () => {
  cy.visit('/your-todo-app-url');
  // Add any necessary test setup code
  
  // Wait for the hr element to be visible before making the assertion
  cy.get('hr').should('be.visible');
});
it('testing content inside tags', () => {
  cy.visit('/your-todo-app-url');
  // Add any necessary test setup code
  
  // Wait for the b element to be visible before making the assertion
  cy.get('b').should('be.visible');
});