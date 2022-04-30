const livros = require('../database')
const read = require('readline-sync')

const recomendados = () => {
    const opcaoInicial = read.question(`Deseja buscar por livros recomendados? S/N:  `).toUpperCase()

    const livrosRecomendados = livros.filter(livro => livro.recomenda === true && livro.leu === true)
    
    opcaoInicial === 'S' ? console.table(livrosRecomendados) : console.log(`Até a proxima!`)

}

module.exports = recomendados