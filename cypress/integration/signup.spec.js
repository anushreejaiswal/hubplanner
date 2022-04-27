/// <reference types="cypress" />
describe('signup', () => {

  let id
  let email
  let password
  let firstname
  let lastname
  let companyname
  let subdomain

  beforeEach(() => {
    cy.visit('/') 
    const uuid = () => Cypress._.random(0,1e3)
     id = uuid()
    })
    
    it('signup as new user', () => {
      email = 'tms.alw04+'+id+'@gmail.com'
      password ='Genesis@1234'
      firstname = 'aryan'+ id
      lastname = 'mathur' + id
      companyname = 'Gen'+ id
      subdomain = 'Genhub'+ id

      //Signup on the application
      cy.SignUpFormFirst(email,password)
      cy.SignUpFormSecond(firstname,lastname,companyname,subdomain) 
    })

    it('signup with invalid password and valid email', () => {
      email = 'tms.alw04+'+id+'@gmail.com'
      password ='Gen'

      //Signup on the application
      cy.SignUpFormFirst(email,password)
      cy.contains("Password must be at least 8 characters").should('be.visible')
    })

    it('signup with valid password and invalid email', () => {
      email = 'tms.alw04+'+id+'@gmail'
      password ='Genesis@1234'

      //Signup on the application
      cy.SignUpFormFirst(email,password)
      cy.contains("Invalid email address").should('be.visible')
    })

    it('signup with invalid password and invalid email', () => {
      email = 'tms.alw04+'+id+'@gmail'
      password ='Gen'

      //Signup on the application
      cy.SignUpFormFirst(email,password)
      cy.contains("Invalid email address").should('be.visible')
      cy.contains("Password must be at least 8 characters").should('be.visible')
    })

    it('signup with valid password and existing email', () => {
      email = 'tms.alw04@gmail.com'
      password ='Genesis@1234'

      //Signup on the application
      cy.SignUpFormFirst(email,password)
      cy.contains("That email is taken").should('be.visible')
    })

    it('signup with blank password and blank email', () => {
      email = ''
      password =''

      //Signup on the application
      cy.SignUpFormFirst(email,password)
      cy.contains("This field is required").should('be.visible')
    })

    it('signup with blank password and invalid email', () => {
      email = 'tms.alw04'
      password =''

      //Signup on the application
      cy.SignUpFormFirst(email,password)
      cy.contains("This field is required").should('be.visible')
      cy.contains("Invalid email address").should('be.visible')
    })

    it('signup with invalid password and blank email', () => {
      email = ''
      password ='Gen@'

      //Signup on the application
      cy.SignUpFormFirst(email,password)
      cy.contains("This field is required").should('be.visible')
      cy.contains("Password must be at least 8 characters").should('be.visible')
    })

     it('Verify signup second form with all blanks', () => {
      email = 'tms.alw04+'+id+'@gmail.com'
      password ='Genesis@1234'

      //Signup on the application
      cy.SignUpFormFirst(email,password)
      cy.SignUpFormSecondBlank() 
      cy.contains("This field is required").should('be.visible')
    })
 
  })

  