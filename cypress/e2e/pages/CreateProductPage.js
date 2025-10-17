import { CommonActions } from "./../actions/CommonActions";
import { LoginPage } from "./LoginPage";

const ca = new CommonActions();
const loginpage = new LoginPage();

export class CreateProductPage {

    producttab_link = '[data-testid="product-menu-item"]'
    create_product_button = '[data-testid="create-button"]'
    product_name_input = 'input[name="name"]'
    product_price_input = 'input[name="price"]'
    product_total_amount = 'input[name="totalPrice"]'
    product_reference_input = 'input[name="productExtId"]'
    product_description_input = 'input[name="description"]'
    product_availbaleQuantity = 'input[name="quantity"]'
    product_attachment_input = '[data-testid="dropzone-input"]'
    product_attachment_button = '[data-testid="dropzone"]'
    product_save_button = '[datatestid="edit-button"]' 
    product_customize_button = 'div[id="panel1d-header"]'
    product_create_button = '[data-testid="modal-create-button"]'
    product_table = 'tbody tr[class="MuiTableRow-root"]'

       //functions
    enterProductName(value) {
        ca.enterValueInField(this.product_name_input, value)
    } 

    enterProductPrice(value) {
        ca.enterValueInField(this.product_price_input, value)
    }

    enterProductReference(value) {
        ca.enterValueInField(this.product_reference_input, value)
    }

    enterProductDescription(value){
        ca.enterValueInField(this.product_description_input, value)
    }

    enterProductAvailableQuant(value){
        ca.enterValueInField(this.product_availbaleQuantity, value)
    }

    enterProductAttachment(path){
        ca.selectFileInputField(this.product_attachment_input, path)
    }
    
    
        verifyCreatedProduct(objectData, product_table, indexToVerify = 0) {
        const expectedRowData = objectData[indexToVerify];
            // Find the row containing the identifying data (e.g., product name)
            cy.get(product_table)
            .filter(`:contains("${expectedRowData.productName}")`)
            .last()  
            .within(() => {
                // Verify each property from the object
                cy.get('td').eq(0).should('have.text', expectedRowData.productName);
                cy.get('td').eq(1).should('have.text', expectedRowData.productPrice);
                cy.get('td').eq(2).should('have.text', expectedRowData.productAvailableQuan);
                cy.get('td').eq(3).should('have.text', expectedRowData.productAvailableQuan * expectedRowData.productPrice);
                cy.get('td').eq(7).should('have.text', expectedRowData.productRefence);
            });
        }


        }


    



    
