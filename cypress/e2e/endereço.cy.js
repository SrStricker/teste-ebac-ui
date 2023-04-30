/// <reference types= "cypress" />
import EnderecoPage from "../support/page-objects/endereço.page"

describe('Funcionalidade endereços - faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it.only('deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Melissa', 'Ferreira', 'Inmetrics', 'Brasil', 'Faisão', '545', 'Curitiba', 'Paraná', '83824420', '40028522', 'ferreiramel@ebac.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
}); 