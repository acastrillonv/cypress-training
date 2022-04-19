class ShopingCartPage {
	private proceedeToCheckout:string;
	
    constructor() {
    this.proceedeToCheckout=".cart_navigation span";
    }
    
	public clickProceedeToCheckout():void{
	cy.get(this.proceedeToCheckout).click()
	}

}
export {ShopingCartPage }
