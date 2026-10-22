import { test, expect } from './fixures/auth.fixture';

test.describe('acesso area protegida - painel', () => {
    test('Deve acessar o painel com usuario logado', async ({ loggedPage }) => {
        // valida se está na página do painel
        await expect(loggedPage).toHaveURL(/painel\.html/);

        // verifica a existência do título H1
        const h1Painel = loggedPage.locator('panelTitle');
        await expect(h1Painel).toBeVisible();

        // verifica se o botão de logout está visível
        const btSair = loggedPage.locator('logoutButton');
        await expect(btSair).toBeVisible();
    });
});