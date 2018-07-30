// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("fillPaymentDetails", () => {

    cy
        .get('input#comicrelief_payinbundle_payment_amount').type('10')
        .get('button#comicrelief_payinbundle_payment_amount_submit').click()
        .get('button#comicrelief_payinbundle_payment_card').click()
        .get('input#comicrelief_payinbundle_payment_firstName').type('test')
        .get('input#comicrelief_payinbundle_payment_lastName').type('user')
        .get('input#comicrelief_payinbundle_payment_email_first').type('test@comicrelief.com')
        .get('input#comicrelief_payinbundle_payment_email_second').type('test@comicrelief.com')
        .get('input#comicrelief_payinbundle_payment_postcode').type('sw15 6hy')
        .get('#postcode_button').click()
        .get('#comicrelief_payinbundle_payment_address-list').select('FLAT 9')
        .get('#comicrelief_payinbundle_payment_submit').click()
});

Cypress.Commands.add("fillWorldPayCardDetails", () => {

    cy
        .wait(3000)
        .get('#wp-cl-worldpay-iframe-container-iframe')
        .then(($iframe) => {
            const $body = $iframe.contents().find('body')

            cy
                .wrap($body)
                .find('#cardNumber')
                .type('4444333322221111')
            cy
                .wrap($body)
                .find('#cardholderName')
                .type('test user')
            cy
                .wrap($body)
                .find('#expiryMonth')
                .select('12')
            cy
                .wrap($body)
                .find('#expiryYear')
                .select('2022')
            cy
                .wrap($body)
                .find('#securityCode')
                .type('123')
            cy
                .wrap($body)
                .find('#submitButton')
                .click()

        })
})
