///<reference types="cypress" />
describe('deleta produtos', () => {
    it('deleta com sucesso', () => {
        cy.visit('https://teste-react-front.vercel.app/')
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Produto deletado com sucesso!');
        });
        cy.on('window:confirm', () => true);
        cy.get('.g-4').children().filter((index, card) => {
                const title = Cypress.$(card).find('.loco').text();
                return title.includes('Teste');
            }).first()
            .find('.card-header > .icone-editar > .material-symbols-outlined')
            .click();
        cy.get('.btn').click();
        cy.wait(1000);
        cy.visit('https://teste-react-front.vercel.app/');
    });
});