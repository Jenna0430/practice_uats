 beforeEach(() => {
    cy.visit('/login')
    cy.get('input[type="email"]').as('email')
    cy.get('input[type="password"]').as('password')
    cy.get('button[type="submit"]').as('login')

  })

describe('verify user can login with valid credentials', () => {

  it('user is on login page', () => {
    cy.contains(/login/i)
    cy.get('@email').should('exist')
    cy.get('@password').should('exist')
    cy.get('@login').should('exist')
  })

   it('input field detects invalid entries', () => {
    cy.get('@email').type('jennagmail.com')
    cy.get('@password').type('hyg87yuu7!')
    cy.get('@login').click()
    cy.url().should('include', '/login') //check we are still on the same page
    cy.wait(4000)

    cy.get('@email').type('jenna@gmail.com')
    cy.get('@password').type('hyg87y')
    cy.get('@login').click()
    cy.url().should('include', '/login') //not failing because the link of the 419 error is /login
  })

  it('user login', () => {
    cy.get('@email').type('jenna@gmail.com')
    cy.get('@password').type('hyg87y')
    cy.get('@login').click()
    cy.contains(/Successful login/i)
  })

  })


describe('verify user cannot login with invalid credentials', () => {

  it('empty fields', () => {
    cy.get('@email').clear()
    cy.get('@password').clear()
    cy.get('@login').click()
    cy.url().should('include', '/login')
  })
})
