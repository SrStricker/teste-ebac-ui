/// <reference types= "cypress" />
import EnderecoPage from "../support/page-objects/endereço.page"
import dadosEndereco from "../fixtures/endereco.json"

describe('Funcionalidade endereços - faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Melissa', 'Ferreira', 'Inmetrics', 'Brasil', 'Faisão', '545', 'Curitiba', 'Paraná', '83824420', '40028522', 'ferreiramel@ebac.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });


    it('deve fazer cadastro de faturamento com sucesso, usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereço,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,   
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
}); 