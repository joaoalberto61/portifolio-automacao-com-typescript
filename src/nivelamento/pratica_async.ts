//Importando função utilitaria de aguardar tempo(delay)
import { aguardar } from '../../utils/helpers';
//Simulando uma API de Login
function simularLogin (usuario:string, senha:string):Promise<string>{
    return new Promise((resolve, reject) => {
        if(usuario === 'admin' && senha === '123456'){
            resolve('token-secreto-aprovado-123');
        }else{
            reject('ERRO 401 - Usuario ou Senha Invalidos')
        }
    });
}
//Função principal testando com Async/Await ;
// 1. Funções 'async' retornam Promises e permitem o uso do 'await'.
// 2. O 'await' pausa a execução interna desta função sem bloquear o thread principal do Node/Browser.
// 3. Enquanto aguarda a resolução do 'simularLogin', o JavaScript fica livre para processar outras tarefas na fila (Event Loop).
async function executarCT() {
    console.log('Iniciando cenario de teste')
    try{
        console.log('Passo 1: abrindo tela de login ...')
        await aguardar(2000);
        console.log('Passo 2: Inserindo credenciais ...')
        await aguardar(3000);

        const token = await simularLogin('admin','123456');
        console.log(`Sucesso! Usuario logado Token Recebido: ${token}\n`)
    }catch(erro){
        console.error(`Falha no teste: ${erro}\n`);
    }finally{
        console.log('Passo final: Fechando navegador e limpando dados.');
    }
}
executarCT();