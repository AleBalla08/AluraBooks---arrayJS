const btnOrdenar = document.getElementById('btnOrdenarPorPreco')
btnOrdenar.addEventListener('click', ordenarPorValor())


function ordenarPorValor(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco
    )
    exibirOsLivrosNaTela(livrosOrdenados)}