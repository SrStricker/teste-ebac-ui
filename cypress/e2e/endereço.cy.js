/// <reference types= "cypress" />

describe('Funcionalidade endereços - faturamento e entrega', () => {
beforeEach(() => {
    cy.visit('minha-conta')
    cy.login('aluno_ebac@teste.com', 'teste@teste.com')
}); 

    it('deve fazer cadastro de faturamento com sucesso', () => {
        
    });
});