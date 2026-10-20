import {test, expect} from '@playwright/test';
import {LoginPage} from './loginPage';

test.describe('Login Tests com Page Object Model', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('Login administrador com sucesso via POM', async ({page}) => {
        await loginPage.login('admin@system.com', 'AdminPassword123');
        await expect(loginPage.statusMessage).toBeVisible();
        await expect(loginPage.statusMessage).toContainText(/Login bem-sucedido/i);
        await expect(page).toHaveURL(/painel\.html/);
    });

    test('testar visibilidade do bt login', async () => {
        await expect(loginPage.loginButton).toBeVisible();
    });
});