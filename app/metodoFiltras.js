const disponiveis = document.getElementById('valor_total_livros_disponiveis')
const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))



function filtrarLivros(){
    disponiveis.innerHTML = ``
    const categoria = this.value
    if(categoria == 'disponiveis'){
        let livrosDisponiveis = livros.filter(livro => livro.quantidade > 0)
        exibirOsLivrosNaTela(livrosDisponiveis)
        const ValorTotal = exibirValorTotalDisponiveis(livrosDisponiveis)
        exibirValorTotalDisponiveis(livrosDisponiveis)

       


        disponiveis.innerHTML = `
            <div class="livros__disponiveis">
                <p>Todos os livros disponíveis por R$ <span id="valor">${ValorTotal}</span></p>
            </div> `

        
    }
    else if (categoria == 'ordenar') {
        ordenarPorValor(livros)
        exibirOsLivrosNaTela(livrosOrdenados)
        
        
    } 
    else{
    let livrosFiltrados = livros.filter(livro => livro.categoria == valor)
    exibirOsLivrosNaTela(livrosFiltrados)}
}
