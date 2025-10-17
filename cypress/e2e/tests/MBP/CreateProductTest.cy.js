import { LoginPage } from "../../pages/LoginPage"
import { CommonActions } from "../../actions/CommonActions"
import { CreateProductPage } from "../../pages/CreateProductPage";

const ca = new CommonActions;
const loginpage = new LoginPage;
const product = new CreateProductPage;

describe('Testing create product flow', () => {

    let logindata
    let productdata

    beforeEach(function() {  // ← Change to regular function
       cy.fixture('login/login_testdata.json').then((data1) => {
            logindata = data1;
        });
  
        cy.fixture('products/products_testdata.json').then((data2) => {
            productdata = data2;
        }).then(() => {
    // run the rest after fixture is loaded
    cy.visit('/login');

    loginpage.enterUserName(logindata.userName);
    loginpage.enterUserPassword(logindata.password)
    ca.clickOnWebElement(loginpage.login_button)

  });
})


    it('verifyThatUserCanCreateProductWithValidInputs', () => {
        ca.verifyWebElementExist(product.producttab_link)
        ca.clickOnWebElement(product.producttab_link)
        cy.verifyUrl('/product?filter=')
        ca.verifyWebElementExist(product.create_product_button)
        ca.clickOnWebElement(product.create_product_button)
        cy.verifyUrl('/product/create')

        product.enterProductName(productdata.productData[0].productName);
        product.enterProductPrice(productdata.productData[0].productPrice)
        product.enterProductReference(productdata.productData[0].productReference)
        product.enterProductDescription(productdata.productData[0].productDescription)
        ca.clickOnWebElement(product.product_customize_button)
        product.enterProductAvailableQuant(productdata.productData[0].productAvailableQuan)

        ca.clickOnWebElement(product.product_attachment_button)

        product.enterProductAttachment(productdata.productData[0].productAttachment)
        ca.clickOnWebElement(product.product_save_button)
        ca.clickOnWebElement(product.product_create_button)
        ca.clickOnWebElement(product.producttab_link)


        product.verifyCreatedProduct(productdata.productData)


  });

  it.only('verifyThatUserCannotCreateProductWithInvalidInputs', () => {
        ca.verifyWebElementExist(product.producttab_link)
        ca.clickOnWebElement(product.producttab_link)
        cy.verifyUrl('/product?filter=')
        ca.verifyWebElementExist(product.create_product_button)
        ca.clickOnWebElement(product.create_product_button)
        cy.verifyUrl('/product/create')

        cy.get(product.product_save_button).should('be.disabled')


        product.enterProductName(productdata.productData[1].productName);
        product.enterProductPrice(productdata.productData[1].productPrice)
        product.enterProductReference(productdata.productData[1].productReference)
        product.enterProductDescription(productdata.productData[1].productDescription)
        ca.clickOnWebElement(product.product_customize_button)
        product.enterProductAvailableQuant(productdata.productData[1].productAvailableQuan)

        ca.clickOnWebElement(product.product_attachment_button)

        product.enterProductAttachment(productdata.productData[1].productAttachment)
        ca.clickOnWebElement(product.product_save_button)
        ca.verifyWebelementContainsText(loginpage.login_error, logindata.loginSubmitError2)



      


  });


    

})