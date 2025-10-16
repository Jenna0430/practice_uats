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

    verifyDropdownOptions(webelement_identifier, expectedOptions, value) {
       cy.get(webelement_identifier).should('have.length', expectedOptions.length)
       expectedOptions.forEach((option, index) => {
        cy.get(webelement_identifier).eq(index).should('contain', option)
       }) 
    }

    clickOnDropdownOption(webelement_identifier, optionText, value){
         cy.get(webelement_identifier).contains(optionText).click();
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
