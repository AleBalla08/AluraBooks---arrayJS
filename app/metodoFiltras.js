
const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))



function filtrarLivros(){
    const valor = this.value
    if(valor == 'todos'){
        exibirOsLivrosNaTela(livros)
    }
    else{
    let livrosFiltrados = livros.filter(livro => livro.categoria == valor)
    exibirOsLivrosNaTela(livrosFiltrados)}
}