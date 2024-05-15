describe('Main Page and Movie info page', () => {
  beforeEach(() => {
    cy.fixture('example').then((data) => {
      cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
        statusCode: 200,
        body: data,
      });

      data.movies.forEach((movie) => {
        cy.intercept("GET", `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie.id}`, {
          statusCode: 200,
          body: { movie },
        });
      });
    });

    cy.visit("http://localhost:3000/");
  });

  it("should have a main title", () => {
    cy.contains("h1", "Rancid Tomatillos");
  });

  it("should display a collection of movies", () => {
    cy.get('.movie-container').should('be.visible');
    cy.get('.movie-container').find('.movie-cards').should('have.length.greaterThan', 0);
  });
  
  it("should display additional details about a movie when clicked", () => {
    cy.get('.movie-container').find('.movie-cards').first().click();
    cy.get('.movieSpecs').within(() => {
     cy.get('.movie-title').should('be.visible');
      cy.get('.movie-rating').should('be.visible');
      cy.get('.movie-released').should('be.visible');
     });
     cy.get('.overview').should('be.visible')
  })
    
})