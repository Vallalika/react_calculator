describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the running total when doing operations without clicking the equals buttons', () => {
    cy.get('#number5').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '7')
  })
  
  it('should be able to chain multiple operations', () => {
    cy.get('#number5').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    
    cy.get('.display').should('contain', '15')
  })

  it('should be able to render negative results', () => {
    
    cy.get('#number1').click();
    cy.get('#number8').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#number3').click();
    cy.get('#number1').click();
    cy.get('#decimal').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-113.1')
  })

  it('should be able to use negative numbers within operations', () => {
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#number8').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-5')
  })

  it('should be able to use and render decimal numbers within operations', () => {
    cy.get('#number5').click();
    cy.get('#number4').click();
    cy.get('#decimal').click();
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2712.6')
  })

  it('should be able to render correct results for very large numbers (non-decimal division)', () => {
    // 54,000,000,000,000 / 120,000 should display 450,000,000
    cy.get('#number5').click();
    cy.get('#number4').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-divide').click();
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '450000000')
  })

  it('should NOT be able to divide by zero', () => {
    
    cy.get('#number1').click();
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Can\'t divide by zero')
  })

})