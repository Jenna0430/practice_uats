import { CommonActions } from "./../actions/CommonActions";

const ca = new CommonActions();

export class LoginPage {

    // //nav links
    // logo_link = 'a.navbar-brand';
    // //drop down menu
    // tools_nav_link = 'a.nav-link[href="/#tools"]'
    // tips_nav_link = 'a.nav-link[href="/tips"]'
    // tests_nav_link = 'a.nav-link[href="/test-cases"]'
    // // api_nav_link = 'a.nav-link[href="/notes/api/api-docs"]'
    // about_nav_link = 'a.nav-link[href="/about"]'

    // //inputs
    // name_input = 'input[id="validationCustom01"]'
    // payment_input = 'select[id="validationCustom04"]'
    // number_input = 'input[type="tel"]'
    // date_input = 'input[type="date"]'

    // //button
    // register_button = 'button[type="submit"]'


    /* variables for MBP LOGIN PAGE */

    company_logo = 'div.auth_logo'
    login_text = '.MuiTypography-root'
    username_input = 'input[name="username"]'
    password_input = 'input[name="password"]'
    language_dropdown_input = '.MuiSelect-select'
    language_dropdown_options = 'ul[role="listbox"] li[role="option"]'
    english_option = ''
    french_option = ''

    // action methods

    enterUserName(value) {
        ca.enterValueInField(this.name_input, value)
    }

    enterUserNumber(value){
        ca.enterValueInField(this.number_input, value)
    }

    enterDate(value){
        ca.enterValueInField(this.date_input, value)
    }

    verifyLanguageDropdownOptions(optionsArray, value){
        ca.verifyDropdownOptions(this.language_dropdown_options, optionsArray)

    }

    clickOnLanguageDropdown(value, optiontext){
        ca.clickOnDropdownOption(this.language_dropdown_options, optiontext)
    }

    
    selectLanguage(value){
        ca.selectDropdownOption(this.language_dropdown_options, value)
    }



}