///<reference types="cypress" />
import { faker } from '@faker-js/faker';
describe('edita produtos', () => {
    it('edita com sucesso', () => {
        cy.visit('https://teste-react-front.vercel.app/')
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Produto editado com sucesso!');
        });
        cy.on('window:confirm', () => true);
        clicarEmEditar();
        preencherCampos();
        cy.get('.d-flex > div > .form-control').click();
        cy.wait(1000);
        cy.visit('https://teste-react-front.vercel.app/');
    });
});
function clicarEmEditar() {
    cy.get('.g-4').children().filter((index, card) => {
        const title = Cypress.$(card).find('.loco').text();
        return title.includes('Teste');
    }).first()
        .find('.card-header > .icone-editar > .material-symbols-outlined')
        .click();
}
function preencherCampos() {
    cy.get('#formEditarNome').clear().type("Teste" + faker.commerce.productName())
    cy.get('#formEditarPreco').clear().type(faker.commerce.price())
    cy.get('#formEditarQuantidade').clear().type(faker.number.int())
    cy.get('#formEditarCategoria').clear().type(faker.commerce.department())
    cy.get('#formEditarDescricao').clear().type(faker.lorem.paragraph())
    cy.get('#formEditarImagem').clear().type("https://cdn.pixabay.com/photo/2013/07/12/15/20/author-149694_640.pnghttps://cdn.pixabay.com/photo/2013/07/12/15/20/author-149694_640.png")
}