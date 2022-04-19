class PaymentStepPage {
   	private bankWire:string;
    private confirm:string;
	
    constructor() {
    this.bankWire="#HOOK_PAYMENT > div:nth-child(1) > div > p > a";
    this.confirm="#cart_navigation > button";
    }
    
    public payByBankWire():void{
    cy.get(this.bankWire).click()
    }
    
	public confirmOrder():void{
	cy.get(this.confirm).click()
	}

}
export {PaymentStepPage }
