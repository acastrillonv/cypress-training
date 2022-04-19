class ShippingStepPage {
	private agreeTerms:string;
    private proceedeToCheckout:string;
	
    constructor() {
    this.agreeTerms="#cgv";
    this.proceedeToCheckout="#form > p > button";
    }
    
    public clickAgreeTerms():void{
    cy.get(this.agreeTerms).click()
    }
	public clickProceedeToCheckout():void{
	cy.get(this.proceedeToCheckout).click()
	}

}
export {ShippingStepPage }
