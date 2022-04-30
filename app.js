const read = require('readline-sync')
const buscarLivros = require ('./controllers/buscarLivros')
const ordenar = require ('./controllers/listarLivrosOrdenados')
const recomendados = require ('./controllers/listarRecomendados')
const listaDeDesejo = require ('./controllers/listarLivrosNaoLidos')

const resposta = read.question(`
========================MENU========================

1- CATEGORIA: Buscar livros por categoria
2- ORDENAR: Ordenar livros por quantidade de paginas
3- RECOMENDADOS: Buscar livros recomendados
4- LISTA DE DESEJOS: Buscar livros nao lidos

5- SAIR

Digite um numero[1-5]:
`)


switch (resposta) {
    case '1': 
    buscarLivros()
        break
    case '2':
    //listarLivrosOrdenados()
    ordenar()
        break
    case '3':
    //listarRecomendados()
    recomendados()
        break
    case '4':
    //listarLivrosNaoLidos()
    listaDeDesejo()
        break
    case '5':
        console.log (`Até a próxima!`)    
        break
    default:
        console.log('Fim do Algorítmo')
        break
}
