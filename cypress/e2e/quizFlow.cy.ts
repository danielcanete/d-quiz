describe('D-Quiz App - Quiz Flow', () => {
  beforeEach(() => {
    cy.startQuiz()
  })

  it('Should complete a quiz with one correct and one incorrect answer', () => {
    cy.answerQuestion(true)  // First answer is correct
    cy.answerQuestion(false) // Second answer is incorrect

    cy.verifyResults(1, 1)

    // Verify navigation buttons
    cy.contains('Play Again').should('be.visible')
    cy.contains('Back to Quizzes').should('be.visible').click()

    // Ensure we are back to the main screen
    cy.contains('Quiz Game').should('be.visible')
  })

  it('Should restart the quiz using "Play Again"', () => {
    cy.answerQuestion(true)
    cy.answerQuestion(false)

    cy.verifyResults(1, 1)

    // Click "Play Again" and ensure quiz restarts
    cy.contains('Play Again').should('be.visible').click()
    cy.get('@optionList').should('be.visible')
    cy.contains('Score: 0').should('be.visible')
    cy.contains('Mistakes: 0').should('be.visible')
    cy.contains('Next').should('not.exist')
  })

  it('Should navigate back to quiz list when clicking back button', () => {
    // Verify the back button is visible
    cy.contains('Back to List').should('be.visible').click()
  
    // Verify we're back on the quiz list page
    cy.url().should('eq', 'http://localhost:5173/')
    cy.contains('Quiz Game').should('be.visible')
    
    // Verify quiz list is displayed
    cy.get('a[href*="/quiz/"]').should('exist')
  })
})
