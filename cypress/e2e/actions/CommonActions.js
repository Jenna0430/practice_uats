export class CommonActions {


    clickOnWebElement(webelement_identifier) { 
    cy.get(webelement_identifier).click()
    }

    enterValueInField(webelement_identifier, value){
        cy.get(webelement_identifier).type(value)
    }

    selectDropdownOption(webelement_identifier, value) {
    cy.get(webelement_identifier).select(value);
    }

    verifyWebElementExist(webelement_identifier) {
        cy.get(webelement_identifier).should('exist')
    }

     verifyWebElementDoesNotExist(webelement_identifier) {
        cy.get(webelement_identifier).should('not.exist')
    }

    verifyWebElementIsVisible(webelement_identifier){
        cy.get(webelement_identifier).should('be.visible')
    }

     verifyWebElementIsNotVisible(webelement_identifier){
        cy.get(webelement_identifier).should('not.be.visible')
    }
}
