import { test, expect } from '@playwright/test';
import { LoginPage } from './loginPage';
import { ctsLogin } from '../data/login.data';

test.describe('Autenticação Data-drive de multiplos perfis com POM', () => {
    for (const cenario of ctsLogin) {
        test(`Login Test for ${cenario.perfil}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.goto();
            await loginPage.login(cenario.email, cenario.senha);
            if (cenario.esperaSucesso) {
                await expect(page).toHaveURL(cenario.urlEsperada);
            }else {
                await expect(loginPage.errorMessage).toBeVisible();
                await expect(page).toHaveURL(/login\.html/);
            }
        });
    }
});
