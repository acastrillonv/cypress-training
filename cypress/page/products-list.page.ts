class ProductsListPage {
	private addToCart:string;
	private proceedeToCheckout:string;
    constructor() {
    this.addToCart= '#center_column a.button.ajax_add_to_cart_button.btn.btn-default';
     this.proceedeToCheckout="[style*=\'display: block;\'] .button-container > a";
    }
	
	public clickAddToCart():void{
	cy.get(this.addToCart).click()
	}
	public clickProceedeToCheckout():void{
	cy.get(this.proceedeToCheckout).click()
	}
	
}
export {ProductsListPage }
