/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('/produtos/')
    });

    it('deve selecionar um produto da lista', () => {
        cy.get('.product-block >')
            //.first()
            //last()
            //eq(3)
            .contains('Abominable Hoodie')
            .click()

    });

    it('deve selecionar o produto ao carrinho', () => {

        var quantidade = 10

        cy.get('.product-block >')
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')



    });

});