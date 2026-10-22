export interface CenarioLogin {
    perfil: string;
    email: string;
    senha: string;
    esperaSucesso: boolean;    
    urlEsperada: RegExp;
}

export const ctsLogin: CenarioLogin[] = [
    {
        perfil: 'Cliente',
        email: 'user@system.com',
        senha: 'UserPassword123',
        esperaSucesso: true,        
        urlEsperada: /painel\.html/
    },
    {
        perfil: 'Lojista',
        email: 'lojista@system.com',
        senha: 'SellerPass123',
        esperaSucesso: true,
        urlEsperada: /painel\.html/
    },
    {
        perfil: 'Admin',
        email: 'admin@system.com',
        senha: 'AdminPassword123',
        esperaSucesso: true,
        urlEsperada: /painel\.html/
    },
    {
    perfil: 'Bloqueado',
    email: '...',
    senha: '...',
    esperaSucesso: false,
    urlEsperada: /login\.html/,
    }
];