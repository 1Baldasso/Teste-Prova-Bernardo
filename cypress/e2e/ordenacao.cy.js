///<reference types="cypress" />

describe('ordenar', () => {
    it('ordena por maior valor', () => {
        cy.visit('https://teste-react-front.vercel.app/')
        cy.wait(1000);
        cy.get(':nth-child(2) > #dropdown-basic')
            .click()
            .get('.dropdown-menu')
            .children().filter((index, ordem) => {
                const title = Cypress.$(ordem).text();
                return title.includes('Maior Preço');
            }).click();
        cy.wait(1000);
        let preco = 0;
        cy.get('.g-4').children().first().find('.preco')
            .invoke('text').then((text) => {
                let texto = text.replace('R$ ', '').trim();
                preco = parseFloat(texto);

            });
        cy.log(preco);
        cy.get('.g-4').children().last().find('.preco')
            .invoke('text').then((text) => {
                let texto = text.replace('R$ ', '').trim();
                let preco2 = parseFloat(texto);
                expect(preco).to.be.greaterThan(preco2);
            });
    });
    it('ordena por menor valor', () => {
        cy.visit('https://teste-react-front.vercel.app/')
        cy.wait(1000);
        cy.get(':nth-child(2) > #dropdown-basic')
            .click()
            .get('.dropdown-menu')
            .children().filter((index, ordem) => {
                const title = Cypress.$(ordem).text();
                return title.includes('Menor Preço');
            }).click();
        cy.wait(1000);
        let preco = 0;
        cy.get('.g-4').children().first().find('.preco')
            .invoke('text').then((text) => {
                let texto = text.replace('R$ ', '').trim();
                preco = parseFloat(texto);

            });
        cy.log(preco);
        cy.get('.g-4').children().last().find('.preco')
            .invoke('text').then((text) => {
                let texto = text.replace('R$ ', '').trim();
                let preco2 = parseFloat(texto);
                expect(preco).to.be.lessThan(preco2);
            });
    });
});