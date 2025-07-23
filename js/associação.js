document.addEventListener('DOMContentLoaded', function() {
    const botoesAdquirir = document.querySelectorAll('.adquirir');

    botoesAdquirir.forEach(botao => {
        botao.addEventListener('click', function() {
            const plano = this.parentElement.querySelector('h3').textContent;
            alert(`Você clicou em adquirir o plano: ${plano}`);
            // Aqui você pode adicionar a lógica para processar a aquisição do plano
        });
    });
});