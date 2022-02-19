export function visitHomepage() {
  cy.visit('/')
}

export function visitCareersPage() {
  cy.contains('Careers').click()
  cy.location().should((loc) => {
    expect(loc.pathname).to.eq(`/careers/`)
  })
}
