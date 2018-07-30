describe('Ensure standard money buy functionality', () => {

    it('visit donation page', () => {
        cy.visit('/')
    });

    it('Verify money buy 30', () => {

        cy
            .get('button.select-amount-btn:nth-of-type(1)').contains('vital education about maternal health in Sierra Leone')
            .get('button.select-amount-btn:nth-of-type(1)').click()
            .get('#comicrelief_payinbundle_payment_amount').should('have.value', "30")
    });

    it('Verify money buy 50', () => {

        cy
            .get('button.select-amount-btn:nth-of-type(2)').contains('over 160 tests to quickly diagnose people with malaria')
            .get('button.select-amount-btn:nth-of-type(2)').click()
            .get('#comicrelief_payinbundle_payment_amount').should('have.value', "50")
    });

    it('Verify money buy 150', () => {

        cy
            .get('button.select-amount-btn:nth-of-type(3)').contains('6 specialist trauma counselling sessions for refugees in the UK')
            .get('button.select-amount-btn:nth-of-type(3)').click()
            .get('#comicrelief_payinbundle_payment_amount').should('have.value', "150")
    });

    it('Verify currency select', () => {

        cy
            .get('select#comicrelief_payinbundle_payment_currency').select('GBP')
            .get('#js-currency-label').contains('£')
            .get('select#comicrelief_payinbundle_payment_currency').select('USD')
            .get('#js-currency-label').contains('$')
            .get('select#comicrelief_payinbundle_payment_currency').select('AUD')
            .get('#js-currency-label').contains('$')
            .get('select#comicrelief_payinbundle_payment_currency').select('EUR')
            .get('#js-currency-label').contains('€')
    })

});

describe('Ensure standard money buy functionality shows when an invalid cart is provided', () => {

    it('visit donation page with invalid cart id', () => {

        cy.visit('?cartId=fakeCart')
    });

    it('Verify money buy 30', () => {

        cy
            .get('button.select-amount-btn:nth-of-type(1)').contains('vital education about maternal health in Sierra Leone')
            .get('button.select-amount-btn:nth-of-type(1)').click()
            .get('#comicrelief_payinbundle_payment_amount').should('have.value', "30")
    });

    it('Verify money buy 50', () => {

        cy
            .get('button.select-amount-btn:nth-of-type(2)').contains('over 160 tests to quickly diagnose people with malaria')
            .get('button.select-amount-btn:nth-of-type(2)').click()
            .get('#comicrelief_payinbundle_payment_amount').should('have.value', "50")
    });

    it('Verify money buy 150', () => {

        cy
            .get('button.select-amount-btn:nth-of-type(3)').contains('6 specialist trauma counselling sessions for refugees in the UK')
            .get('button.select-amount-btn:nth-of-type(3)').click()
            .get('#comicrelief_payinbundle_payment_amount').should('have.value', "150")
    });


});

describe('Ensure money buy functionality with cart modifier', () => {

    it('Visit doantion page SR18_DONATE_Greg_James cart id', () => {

        cy.visit('?cartId=SR18_DONATE_Greg_James')
    })

    it('Verify money buy 10', () => {

        cy
            .get('button.select-amount-btn:nth-of-type(1)').contains('surf therapy sessions for a young person in South Africa')
            .get('button.select-amount-btn:nth-of-type(1)').click()
            .get('#comicrelief_payinbundle_payment_amount').should('have.value', "10")
    });

    it('Verify money buy 20', () => {

        cy
            .get('button.select-amount-btn:nth-of-type(2)').contains('counselling for a young person who has experienced sexual exploitation')
            .get('button.select-amount-btn:nth-of-type(2)').click()
            .get('#comicrelief_payinbundle_payment_amount').should('have.value', "20")
    });

    it('Verify money buy 30', () => {

        cy
            .get('button.select-amount-btn:nth-of-type(3)').contains('training for local child protection groups in Sierra Leone')
            .get('button.select-amount-btn:nth-of-type(3)').click()
            .get('#comicrelief_payinbundle_payment_amount').should('have.value', "30")
    });

})