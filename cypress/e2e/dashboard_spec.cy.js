describe('Main Page', () => {
  beforeEach(() => {
    cy.fixture('example').then((data) => {
      cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {  
        statusCode: 200,
        body: data,
      })
    })
    cy.visit("http://localhost:3000/")
  });

  it("should have a main title, main movie card and displayed movie cards with title and rating that are clickable", () => {
    cy.contains("h1", "Rancid Tomatillos")
  });
})