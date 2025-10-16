import { CommonActions } from "./../../actions/CommonActions"
import { LoginPage } from "../../pages/LoginPage"

const ca = new CommonActions();
const loginpage = new LoginPage();

describe('Testing login page features', () => {
    beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/form-validation') 
    cy.contains(/Form Validation page for Automation Testing Practice/i)
    ca.verifyWebElementExist(loginpage.name_input)
    ca.verifyWebElementExist(loginpage.number_input)
    ca.verifyWebElementExist(loginpage.date_input)
    ca.verifyWebElementExist(loginpage.payment_input)
    ca.verifyWebElementExist(loginpage.register_button)

    })

    it('verifyThatNavLinksAreWorkingProperly', () => {

    ca.clickOnWebElement(loginpage.logo_link)
    cy.verifyUrl('https://practice.expandtesting.com/')

    ca.clickOnWebElement(loginpage.tools_nav_link)
    cy.verifyUrl('https://practice.expandtesting.com/#tools')

    ca.clickOnWebElement(loginpage.tips_nav_link)
    cy.verifyUrl('https://practice.expandtesting.com/tips')    

    ca.clickOnWebElement(loginpage.tests_nav_link)
    cy.verifyUrl('https://practice.expandtesting.com/test-cases')   

    // ca.clickOnWebElement(loginpage.api_nav_link)
    // cy.verifyUrl('https://practice.expandtesting.com/notes/api/api-docs/')

    ca.clickOnWebElement(loginpage.about_nav_link) 
    cy.verifyUrl('https://practice.expandtesting.com/about')
    
  })

   it('verifyUserCanRegisterWithValidCredentials', () => {
    loginpage.enterUserName('Jenna')
    loginpage.enterUserNumber('013-8763457')
    loginpage.enterDate('2025-06-26')
    loginpage.selectPaymentMethod('card')
    ca.clickOnWebElement(loginpage.register_button)
    cy.contains(/Thank you for validating your ticket/i)  

  })

    it.only('verifyUserCanNotRegisterWithInvalidCredentials', () => {

    loginpage.enterUserName('Jenna')
    loginpage.enterUserNumber('013-876345')
    ca.clickOnWebElement(loginpage.register_button)
    cy.contains(/Please provide your Contact number./i)

    // loginpage.enterUserNumber('013-8763457')
    // loginpage.enterDate('2025-06-26')
    // loginpage.selectPaymentMethod('usa')
    // ca.clickOnWebElement(loginpage.register_button)
    // cy.contains(/Please select the Paymeny Method./i)
    
    loginpage.enterDate('2025-26-26')
    ca.clickOnWebElement(loginpage.register_button)
    cy.contains(/Please provide valid Date./i)


  })

    it('verifyUserCannotRegisterWhenFields are empty', () => {
    loginpage.enterUserName('')
    loginpage.enterUserNumber('')
    loginpage.enterDate('')
    loginpage.selectPaymentMethod('')
    ca.clickOnWebElement(loginpage.register_button)
    cy.contains(/Please enter your Contact name./i)
    cy.contains(/Please provide your Contact number./i) 
    cy.contains(/Please provide valid Date./i)
    cy.contains(/Please select the Paymeny Method./i) 

  })

})