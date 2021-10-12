/// <reference types="cypress" />
let pokemons = ["bulbasaur","ivysaur","venusaur"];
let searchedPokemons = ["charmander", "charmeleon", "charizard"];
let rough="ffffffffff"
describe("Pokemon App ", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("list checking", () => {
    pokemons.forEach((pokemon, index) => {
      cy.get("a").contains(pokemon).click();
      let Index = index + 1;
      cy.url().should("include", "/Pokemons/" + Index);
      cy.get("button").contains("Abilities");
      cy.get("button").contains("Height");
      cy.get("[data-cy=pokemon-name]").contains(pokemon);
      cy.get("a").contains("Home").click();
      cy.url().should("include", "/");
    });
  });
  it("should search pokemons", () => {
    cy.get("div").contains("Search");
    cy.get("[data-cy=search-input]").type("char");
    searchedPokemons.forEach((pokemon) => {
      cy.get("[data-cy=suggestion-list]").contains(pokemon);
      cy.get("[data-cy=pokemon-name-in-list]").contains(pokemon);
    });
    cy.get("div").contains("Search").click();

    cy.get("[data-cy=suggestion-list]").should("not.exist");
    cy.get("[data-cy=search-input]").clear();

  
  });
  it("pokemon Not found",()=>{
    cy.get("div").contains("Search");
    cy.get("[data-cy=search-input]").type(rough);
    cy.get("h2").contains("NO POKEMON FOUND !");
  })

  it("should be Scrollable",()=>{
        cy.scrollTo('bottom', {duration: 3000})

  })

  it("check footer",()=>{
cy.get("[data-cy=footer").contains("Pokemon Website");
cy.get("[data-cy=footer").contains("Click on card to See Details");
cy.get("[data-cy=footer").contains("API used: PokeApi");

  })
});
