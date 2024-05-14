describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      
    })
    .visit("http://localhost:3000/")
  });

  it("should have a main title,main movie card and displayed movie cards with title and rating that are clickable", () => {
    cy.contains("h1", "Rancid Tomatillos")
   
  });
})