///<reference types="cypress" />
describe('filtrar por categoria', () => {
    it('filtra com sucesso', () => {
        cy.visit('https://teste-react-front.vercel.app/')
        cy.wait(1000);
        cy.get('#dropdown-basic').click();
        cy.get('.dropdown-menu').children().last().click();
        cy.wait(1000);
        cy.get('#dropdown-basic').invoke('text').then((text) => {
            cy.log(text);
            cy.get('.g-4').children().filter((index, card) => {
                const title = Cypress.$(card).find('.card-subtitle').text();
                return title.includes(text);
            }).should('be.visible');
        })  
    });
});