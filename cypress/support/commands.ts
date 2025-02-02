/// <reference types="cypress" />

Cypress.Commands.add('startQuiz', () => {
  cy.visit('http://localhost:5173')
  cy.contains('Quiz Game').should('be.visible')
  cy.get('a[href*="/quiz/application-test"]').click()
  cy.get('[data-test-id="quiz-option-list"]').as('optionList').should('be.visible')
})

Cypress.Commands.add('answerQuestion', (isCorrect) => {
  if (isCorrect) {
    cy.get('@optionList').find('button').contains('true').click()
  } else {
    cy.get('@optionList').find('button').not(':contains("true")').first().click()
  }
  cy.contains('Next').click()
})

Cypress.Commands.add('verifyResults', (correct, mistakes) => {
  cy.contains('Quiz Complete!').should('be.visible')
  cy.contains("Here's your quiz summary and results").should('be.visible')
  cy.contains(`Correct Answers: ${correct}`).should('be.visible')
  cy.contains(`Mistakes: ${mistakes}`).should('be.visible')
})

declare global {
  namespace Cypress {
    interface Chainable {
      startQuiz(): void;
      answerQuestion(isCorrect: boolean): void;
      verifyResults(correct: number, mistakes: number): void;
    }
  }
}

export { };
