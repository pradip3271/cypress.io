describe('User completes a worldpay payment', () => {

    it('visit donation page with worldpay provider', () => {

        cy.visit('?providers=worldpay')
    });

    it('fill payment deails', () => {

        cy
            .fillPaymentDetails()
            .fillWorldPayCardDetails()
    })
})