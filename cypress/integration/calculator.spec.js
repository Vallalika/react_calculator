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
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8')
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

  it('should be able to use negative numbers (unless it\s the first number in the operation), use and render decimal numbers within operations and render correct results for very large numbers (non-decimal division)', () => {
    cy.get('#number1').click();
    cy.get('#number8').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#number3').click();
    cy.get('#number1').click();
    cy.get('#decimal').click();
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number3').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-14907800000000')
  })

  // it('should be able to use and render decimal numbers within operations', () => {
  //   cy.get('#number5').click();
  //   cy.get('#number4').click();
  //   cy.get('#decimal').click();
  //   cy.get('#number8').click();
  //   cy.get('#operator-multiply').click();
  //   cy.get('#number9').click();
  //   cy.get('#number9').click();
  //   cy.get('#operator-divide').click();
  //   cy.get('#number2').click();
  //   cy.get('#operator-equals').click();
  //   cy.get('.display').should('contain', '2712.6')
  // })

  // it('should be able to render correct results for very large numbers (non-decimal division)', () => {
  //   cy.get('#number5').click();
  //   cy.get('#number4').click();
  //   cy.get('#number0').click();
  //   cy.get('#number0').click();
  //   cy.get('#number0').click();
  //   cy.get('#number0').click();
  //   cy.get('#number0').click();
  //   cy.get('#number0').click();
  //   cy.get('#number0').click();
  //   cy.get('#number0').click();
  //   cy.get('#number0').click();
  //   cy.get('#number0').click();
  //   cy.get('#number0').click();
  //   cy.get('#number0').click();
  //   cy.get('#operator-divide').click();
  //   cy.get('#number1').click();
  //   cy.get('#number2').click();
  //   cy.get('#number0').click();
  //   cy.get('#number0').click();
  //   cy.get('#number0').click();
  //   cy.get('#number0').click();
  //   cy.get('#operator-equals').click();
  //   cy.get('.display').should('contain', '450000000')
  // })

  it('should NOT be able to divide by zero', () => {
    
    cy.get('#number1').click();
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Can\'t divide by zero')
  })

})