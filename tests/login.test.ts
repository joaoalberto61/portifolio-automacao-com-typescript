//importando dependencias
import { test, expect, vi } from 'vitest';

//simulando login lento
function loginLento(usuario: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Bem-vindo, ${usuario}`);
        }, 5000);
    });
}

test('Simular login usando fake timers', async () => {
    //ligando a Maquina do tempo
    vi.useFakeTimers();
    console.log('Iniciando cenario de teste');

    //chamando promisse de usuario sem await ainda
    const promessaLogin = loginLento('Anon');

    //configura avanço de 5 segundos
    vi.advanceTimersByTime(5000);

    const resultado = await promessaLogin;

    //verificar resultado (texto correspondente à função)
    expect(resultado).toBe('Bem-vindo, Anon');

    console.log('Sucesso teste realizado.');
    console.log('Resultado retornado:', resultado);
    expect(resultado).toBe('Bem-vindo, Anon');

    //Desligando a maquina do tempo
    vi.useRealTimers();
});