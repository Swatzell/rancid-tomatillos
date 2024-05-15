// describe('Main Page', () => {
//   beforeEach(() => {
//     cy.fixture('example').then((data) => {
//       cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies",{  
//         statusCode: 200,
//         body: data,
//       })
//     })
//     cy.visit("http://localhost:3000/")
//   });

//   it("should have a main title, main movie card and displayed movie cards with title and rating that are clickable", () => {
//     cy.contains("h1", "Rancid Tomatillos")
//   });
// })

// describe('Movie Info Page', () => {
//   beforeEach(() => {
//     cy.fixture('example').then((data) => {
//       cy.intercept("GET",`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`, {  
//         statusCode: 200,
//         body: data,
//       })
//     })
//     cy.visit("http://localhost:3000/")
//   });
// })

describe('Main Page', () => {
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
  
})