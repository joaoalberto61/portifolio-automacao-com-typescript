import { test, expect } from 'vitest';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

//Metodo POST

test('Metodo POST para criar um novo post', async() => {
    const res = await fetch(`${BASE_URL}/posts`, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            userId: 1,
            title: 'Meu novo post',
            body: 'Conteudo do meu novo post'
        })

    });
    //testa status code
        expect(res.status).toBe(201);
    //Testa se o retorno é um objeto JSON
    const dados = await res.json();
    expect(dados.title).toBe('Meu novo post');
    expect(dados.body).toBe('Conteudo do meu novo post');
});

//Metodo PUT

test('Metodo PUT para atualizar um post existente por completo', async () => {
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: 1,
            userId: 1,
            title: 'Post Totalmente Atualizado',
            body: 'Novo conteudo completo do post'
        })
    });

    // Testa status code de sucesso
    expect(res.status).toBe(200);

    // Testa se os dados retornados correspondem ao envio completo
    const dados = await res.json();
    expect(dados.title).toBe('Post Totalmente Atualizado');
    expect(dados.body).toBe('Novo conteudo completo do post');
});

//Metodo PATCH

test('Metodo PATCH para atualizar parcialmente um post', async () => {
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Apenas o titulo foi alterado'
        })
    });

    // Testa status code de sucesso
    expect(res.status).toBe(200);

    // Testa se apenas o campo modificado foi retornado/atualizado
    const dados = await res.json();
    expect(dados.title).toBe('Apenas o titulo foi alterado');
});

//Netodo DELETE

test('Metodo DELETE para remover um post existente', async () => {
    const res = await fetch(`${BASE_URL}/posts/1`, {
        method: 'DELETE'
    });

    // Testa status code de sucesso de remocao (200 OK ou 204 No Content)
    expect(res.status).toBe(200);
});