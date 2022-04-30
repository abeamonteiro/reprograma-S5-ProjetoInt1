const livros = require('../database')
const read = require('readline-sync')

const listaDeDesejo = () => {
    const opcaoInicial = read.question(`Deseja buscar por lista de desejos? S/N:  `).toUpperCase()
    
    const livrosLidos = livros.filter(livro => livro.leu === false)

    opcaoInicial === 'S' ? console.table(livrosLidos) : console.log(`Até a próxima!`)

}
module.exports = listaDeDesejo