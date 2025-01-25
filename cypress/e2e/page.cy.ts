describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("displays hello world message", () => {
    cy.get("div").should("exist")
  })
})
