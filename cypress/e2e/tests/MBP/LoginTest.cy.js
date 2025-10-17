import { LoginPage } from "../../pages/LoginPage"
import { CommonActions } from "../../actions/CommonActions"

const ca = new CommonActions;
const loginpage = new LoginPage;


describe('Testing Login flow', () => {

    let testdata

    beforeEach(() => {

        cy.fixture('login/login_testdata.json').then((data) => {
            testdata = data
        })

        cy.visit('/login')
        cy.verifyUrl('/login')
        ca.verifyWebElementExist(loginpage.company_logo)
     //   cy.get('.MuiTypography-root').should('contain', testdata.loginText)
        ca.verifyWebElementExist(loginpage.username_input)
    })

    it('verifyThatTranslateDropDownButtonsWorks', () => {
        ca.clickOnWebElement(loginpage.language_dropdown_input)
        //verify the content and length of drop down options
        loginpage.verifyLanguageDropdownOptions(testdata.dropdownOptions)
        //verify that content changes when english is selected
        loginpage.clickOnLanguageDropdown(0) 
        loginpage.getSelectedLanguage();
        cy.get('.MuiTypography-root').should('contain', testdata.englishText)

        //verify that content on page changes when french is selected
        loginpage.clickOnLanguageDropdown(1) 
        loginpage.getSelectedLanguage();
        cy.get('.MuiTypography-root').should('contain', testdata.frenchText)

  });

    it('verifyUserCanLoginWithValidCredentials', () => {
        loginpage.enterUserName(testdata.userName)
        loginpage.enterUserPassword(testdata.password)
        ca.clickOnWebElement(loginpage.login_button)
    })

    it.only('verifyUserCannotLoginWithInvalidCredentials', () => {
        loginpage.enterUserName(testdata.userName)
        ca.clearFieldData(loginpage.username_input)
        ca.clearFieldData(loginpage.password_input)
        ca.clickOnWebElement(loginpage.login_button)
        ca.verifyWebelementContainsText(loginpage.username_input_error, testdata.usernameInputError)
        ca.verifyWebelementContainsText(loginpage.password_input_error, testdata.passwordInputError)
  
        loginpage.enterUserName(testdata.falseUsername)
        ca.clickOnWebElement(loginpage.login_button)
        ca.verifyWebelementContainsText(loginpage.login_error, testdata.loginSubmitError2)
        ca.clearFieldData(loginpage.username_input)

        loginpage.enterUserPassword(testdata.falsePassword)
        ca.clickOnWebElement(loginpage.login_button)
        ca.verifyWebelementContainsText(loginpage.login_error, testdata.loginSubmitError2)
        loginpage.enterUserName(testdata.falseUsername)
        ca.clickOnWebElement(loginpage.login_button)
        ca.verifyWebelementContainsText(loginpage.login_error, testdata.loginSubmitError1)


    })


    })
