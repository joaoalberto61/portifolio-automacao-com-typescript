import {test, expect} from '/fixures/auth.fixture';
test('usuario já logado', async ({loggedPage}) => {
    await expect(loggedPage).toHaveURL(/painel\.html/);
});