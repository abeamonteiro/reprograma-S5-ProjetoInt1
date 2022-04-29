const read = require('readline-sync')
const buscarLivros = require ('./controllers/buscarLivros')

const resposta = read.question(`
========================MENU========================

1- CATEGORIA: Buscar livros por categoria
2- ORDENAR: Ordenar livros por quantidade de páginas
3- RECOMENDADOS: Buscar livros recomendados
4- LISTA DE DESEJOS: Buscar livros não lidos

5- SAIR

Digite um numero[1-5]:
`)

console.log(resposta)

switch (resposta) {
    case '1': 
    buscarLivros()
        break
    case '2':
    //listarLivrosOrdenados()
        break
    case '3':
    //listarRecomendados()
        break
    case '4':
    //listarLivrosNaoLidos()
        break
    case '5':
        console.log (`Até a próxima!`)    
        break
    default:
        console.log('Fim do Algorítmo')
        break
}
