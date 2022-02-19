describe('Test Scenario One', () => {
  it('Open 10Clouds homepage', () => {
    cy.visitHomepage()
  })

  it('Open careers tab', () => {
    cy.visitCareersPage()
  })

  it('Validate that there is exactly 1 QA Automation Engineer role open', () => {
    const openPositions = []

    cy.jobTitle()
      .each(($openPosition) => {
        console.log($openPosition.text())
        // add all open job position titles to the "openPositions" array
        console.log(typeof openPositions)
        openPositions.push($openPosition.text())
      })
      .then(() => {
        // filter all open "QA Automation Engineer" positions
        const QAPositions = openPositions.filter((QAPosition) =>
          QAPosition.includes('QA Automation Engineer'),
        )
        console.log(typeof QAPositions)
        expect(QAPositions).to.have.length(1)
      })
  })
})

describe('Test Scenario Two', () => {
  it('Open 10Clouds home page', () => {
    cy.visitHomepage()
  })

  it('Open Careers Tab', () => {
    cy.visitCareersPage()
  })

  it('Select "QA" from All departments dropdown', () => {
    cy.get('.select--desktop').first().click()

    cy.contains('QA').click()
  })

  it('Validate that each result constains QA Automation or QA Engineer in the title', () => {
    cy.jobTitle().each(($openPositionTitle) => {
      cy.wrap($openPositionTitle.text()).as('openPositionTitle')
      cy.get('@openPositionTitle').then(() => {
        expect($openPositionTitle.text()).to.match(
          /^QA Automation | QA Engineer/,
        )
      })
    })
  })
})
