const livros = require('../database')
const read = require('readline-sync')

const ordenar = () => {
    const paginasParaMaior = livros.sort ((livro1, livro2) => livro1.paginas - livro2.paginas)
    
  console.table (paginasParaMaior)
}

module.exports = ordenar