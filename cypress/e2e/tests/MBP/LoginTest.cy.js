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
     //   ca.verifyWebElementExist(loginpage.login_text).contains(this.data.loginText)
        ca.verifyWebElementExist(loginpage.username_input)
    })

    it('verifyThatTranslateDropDownButtonsWorks', () => {
        ca.clickOnWebElement(loginpage.language_dropdown_input)
        //verify the content and length of drop down options
        loginpage.verifyLanguageDropdownOptions(testdata.dropdownOptions)
        //verify that content on page changes when drop down is clicked
        loginpage.clickOnLanguageDropdown(testdata.dropdownOptions[0])


    })
})