document.addEventListener('DOMContentLoaded', function() {
    // Exemplo: Adiciona um evento de clique a cada produto
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        produto.addEventListener('click', function() {
            const nomeProduto = this.querySelector('h3').textContent;
            alert(`Você clicou em: ${nomeProduto}`);
            // Aqui você pode adicionar mais funcionalidades, como abrir um modal com detalhes do produto
        });
    });

    console.log("JavaScript da página de produtos carregado!");
});