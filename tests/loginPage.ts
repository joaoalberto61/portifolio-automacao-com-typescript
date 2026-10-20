import {Page, Locator} from '@playwright/test';
//Receber o page no constructos
//encapsula os seletores/ui
//metodos claros ex: login(), fillEmail()...
//Metodos retonam os locatos para teste apenas fazer o (assert)
//melhor porque se um seletor mudar o html so atualizamos um unico local no page object
export class LoginPage{
    //Locators
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly statusMessage: Locator;
    readonly credentialsBox: Locator;

    constructor(private page:Page){
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#loginBtn');
        this.errorMessage = page.locator('#errorMessage');
        this.statusMessage = page.locator('#statusMessage');
        this.credentialsBox = page.locator('.credentials-info');
    }

    //navegar para a tela de login

    async goto(){
        await this.page.goto('https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/login.html')
    }

    //função/metodo/ação de login
    async login(username: string, password:string){
        await this.emailInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    //apenas preencher email
    async fillEmail(email:string){
        await this.emailInput.fill(username);
    }
    //apenas preencher senha
    async fillPassword(password:string){
        await this.passwordInput.fill(password);
    }
    //apenas clicar no botão de login
    async clickSubmit(){
        await this.loginButton.click();
    }

}