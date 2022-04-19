class LoginPage {
	private email:string;
	private passwd:string;
	private submit:string;
	
    constructor() {  
    this.email='#email';
    this.passwd='#passwd';
    this.submit='#SubmitLogin';
    }
    
	public enterEmail():void{
	cy.get(this.email).type("aperdomobo@gmail.com");
	}
	public enterPasswd():void{
	cy.get(this.passwd).type("WorkshopProtractor");
	}
	public submitLogin():void{
	cy.get(this.submit).click();
	}
	
	
}
export {LoginPage }
