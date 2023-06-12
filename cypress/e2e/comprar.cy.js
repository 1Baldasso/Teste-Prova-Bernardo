///<reference types="cypress" />

import { faker } from "@faker-js/faker";

describe('comprar produtos', () => {
    it('compra com sucesso', () => {
        cy.visit('https://teste-react-front.vercel.app/')
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Produto adicionado ao carrinho!');
        });
        cy.on('window:confirm', () => true);
        clicarEmComprar();
        cy.get('[name="quantidade"]').type(faker.number.int()%10);
        cy.get('.d-flex > [type="button"]').click();
        cy.wait(1000);
        cy.get('.nav-link > .material-symbols-outlined').click();
        cy.wait(1000);  
        verificarSeExisteProduto().should('be.visible');
    })
});
function verificarSeExisteProduto() {
    return cy.get('.g-4').children().filter((index, card) => {
        const title = Cypress.$(card).find('.loco').text();
        return title.includes('Teste');
    }).first()
}
function clicarEmComprar() {
    cy.get('.g-4').children().filter((index, card) => {
        const title = Cypress.$(card).find('.loco').text();
        return title.includes('Teste');
    }).first()
        .find('.botao-comprar').click();
}