import { CommonActions } from "./../actions/CommonActions";

const ca = new CommonActions();

export class LoginPage {

    //nav links
    logo_link = 'a.navbar-brand';
    //drop down menu
    tools_nav_link = 'a.nav-link[href="/#tools"]'
    tips_nav_link = 'a.nav-link[href="/tips"]'
    tests_nav_link = 'a.nav-link[href="/test-cases"]'
    // api_nav_link = 'a.nav-link[href="/notes/api/api-docs"]'
    about_nav_link = 'a.nav-link[href="/about"]'

    //inputs
    name_input = 'input[id="validationCustom01"]'
    payment_input = 'select[id="validationCustom04"]'
    number_input = 'input[type="tel"]'
    date_input = 'input[type="date"]'

    //button
    register_button = 'button[type="submit"]'


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
//dropdown might fail
    selectPaymentMethod(value){
        ca.selectDropdownOption(this.payment_input, value)
    }



}