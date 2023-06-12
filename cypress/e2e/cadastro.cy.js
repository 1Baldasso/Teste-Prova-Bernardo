///<reference types="cypress" />
import { faker } from '@faker-js/faker';
describe('cadastrar produto', () => {
  it('cadastra com sucesso', () => {
    cy.visit('https://teste-react-front.vercel.app/')
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Produto criado com sucesso!');
    });
    cy.on('window:confirm', () => true);
    preencherCampos()    
    cy.get('.d-flex > div > .form-control').click()
    cy.wait(1000)
    cy.visit('https://teste-react-front.vercel.app/')
  })

  it('não cadastra com campos faltantes', () => {
    cy.visit('https://teste-react-front.vercel.app/')
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Erro ao criar produto!');
    });
    cy.on('window:confirm', () => true);
    preencherCampos(false)
    cy.get('.d-flex > div > .form-control').click()
    cy.wait(1000)
    cy.visit('https://teste-react-front.vercel.app/')
  })
})
function preencherCampos(valid = true)
{
  cy.get('[href="/adicionar"] > .meu-link').click()
  cy.get('#formEditarNome').type("Teste" + faker.commerce.productName())
  cy.get('#formEditarPreco').type(faker.commerce.price())
  cy.get('#formEditarQuantidade').type(faker.number.int())
  cy.get('#formEditarCategoria').type(faker.commerce.department())
  if(valid){
    cy.get('#formEditarDescricao').type(faker.lorem.paragraph())
    cy.get('#formEditarImagem').type("https://cdn.pixabay.com/photo/2013/07/12/15/20/author-149694_640.pnghttps://cdn.pixabay.com/photo/2013/07/12/15/20/author-149694_640.png")
  }
}