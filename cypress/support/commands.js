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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('SignUpFormFirst', (email,password) => {
    cy.fixture('signupPage').then((signup) => { 
        //verify signup page title
        cy.title().should('eq', signup.signupPageTitle)
        // Enter email
        if(email == ''){
            cy.get(signup.email).should('be.visible')
            cy.get(signup.email).should('be.empty')
        }
        else {
            cy.get(signup.email).should('be.visible')
        cy.get(signup.email).type(email)

        }
        
        // Enter Password
        if(password == '') {
            cy.get(signup.password).should('be.visible')
            cy.get(signup.password).should('be.empty')
        }
        else {
            cy.get(signup.password).should('be.visible')
            cy.get(signup.password).type(password)
        }
  
        //Click checkbox
        cy.get(signup.checkbox).should('not.be.checked')
        cy.get(signup.checkbox).check()
        //Click Signup Button
        cy.get(signup.submitButton).should('be.visible')
        cy.get(signup.submitButton).click()
        cy.wait(1500)
    })
})

    Cypress.Commands.add('SignUpFormSecond', (firstname,lastname,companyname,subdomain) => {
        cy.fixture('signupPage').then((signup) => {
            //verify final details page title
            cy.title().should('eq', signup.welcomePageTitle)
            // Enter firstname
            cy.get(signup.firstname).should('be.visible')
            cy.get(signup.firstname).clear()
            cy.get(signup.firstname).type(firstname)
            //Enter Last Name
            cy.get(signup.lastname).should('be.visible')
            cy.get(signup.lastname).clear()
            cy.get(signup.lastname).type(lastname)
            //Enter Company Name
            cy.get(signup.companyname).should('be.visible')
            cy.get(signup.companyname).clear()
            cy.get(signup.companyname).type(companyname)
            //Enter Domain Name
            cy.get(signup.subdomain).should('be.visible')
            cy.get(signup.subdomain).clear()
            cy.get(signup.subdomain).type(subdomain)
            //Click on Create account button 
            cy.get(signup.submitButton).should('be.visible')
            cy.get(signup.submitButton).click()
            //verify Resource Page
            cy.title().should('eq', 'HUB Planner')
            cy.wait(1500)
        })
    })

        Cypress.Commands.add('SignUpFormSecondBlank', () => {
            cy.fixture('signupPage').then((signup) => {
                //verify final details page title
                cy.title().should('eq', signup.welcomePageTitle)
                // Enter firstname
                cy.get(signup.firstname).should('be.visible')
                cy.get(signup.firstname).clear()
                cy.get(signup.firstname).should('be.empty')
                //Enter Last Name
                cy.get(signup.lastname).should('be.visible')
                cy.get(signup.lastname).clear()
                cy.get(signup.lastname).should('be.empty')
                //Enter Company Name
                cy.get(signup.companyname).should('be.visible')
                cy.get(signup.companyname).clear()
                cy.get(signup.companyname).should('be.empty')
                //Enter Domain Name
                cy.get(signup.subdomain).should('be.visible')
                cy.get(signup.subdomain).clear()
                cy.get(signup.subdomain).should('be.empty')
                //Click on Create account button 
                cy.get(signup.submitButton).should('be.visible')
                cy.get(signup.submitButton).click()
                cy.wait(1500)
            })
    })
