describe('default state', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should have gold medal menu item selected', () => {
    cy.get('button[aria-label=gold]').should('have.attr', 'data-test-active')
  })

  it('should have russia as first country in the list', () => {
    cy.get('tbody tr:first-child td:nth-child(3)').should('contain', 'RUS')
  })
})

describe('sort by total', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('should have total medal menu item selected', () => {
    cy
      .get('button[aria-label=total]')
      .click()
      .should('have.attr', 'data-test-active')
  })

  it('should have USA as second country in the list', () => {
    cy.get('button[aria-label=total]').click()
    cy.get('tbody tr:nth-child(2) td:nth-child(3)').should('contain', 'USA')
  })
})
