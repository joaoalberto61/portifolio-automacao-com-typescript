const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Definir contratos de tipo
type Post = {
    userId: number;
    id?: number; // campo opcional
    title: string;
    body: string;
};

type PostComment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

// GET /posts
async function listarPosts() {
    console.log(`--- 1. GET /posts ---`);
    const res = await fetch(`${BASE_URL}/posts`);
    const dados: Post[] = await res.json();
    console.log(`Status: ${res.status}`);
    console.log(`Lidos ${dados.length} posts.\nEx do primeiro:`, dados[0].title);
}

// GET /posts/1
async function buscarPorId(id: number) {
    console.log(`--- 2. GET /posts/${id} ---`);
    const res = await fetch(`${BASE_URL}/posts/${id}`);
    const dados: Post = await res.json();
    console.log(`Status: ${res.status}`);
    console.log(`Título do post ${id}:`, dados.title);
}

// GET /posts/1/comments
async function listarComent(postId: number) {
    console.log(`--- 3. GET /posts/${postId}/comments ---`);
    const res = await fetch(`${BASE_URL}/posts/${postId}/comments`); // Corrigido para /comments
    const dados: PostComment[] = await res.json();
    console.log(`Status: ${res.status}`);
    console.log(`O post ${postId} tem ${dados.length} comentários.\nEx: Email do primeiro:`, dados[0].email);
}

async function chamarReqs() {
    await listarPosts();
    await buscarPorId(1);
    await listarComent(1);
}

chamarReqs();