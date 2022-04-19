class AddressStepPage {
   private proceedeToCheckout:string;
	
    constructor() {
    this.proceedeToCheckout="#center_column > form > p > button";
    }
    
	public clickProceedeToCheckout():void{
	cy.get(this.proceedeToCheckout).click()
	}

}
export {AddressStepPage }
