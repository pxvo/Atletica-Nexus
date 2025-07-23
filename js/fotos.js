window.onload = function() {
    const grid = document.getElementById('galeria-grid');
    const images = grid.querySelectorAll('img');

    let columns = [];
    let columnCount = 3; // Ajuste o número de colunas conforme necessário

    // Inicializa as colunas
    for (let i = 0; i < columnCount; i++) {
        columns.push([]);
    }

    // Distribui as imagens nas colunas
    images.forEach((image, index) => {
        columns[index % columnCount].push(image);
    });

    // Limpa o grid
    grid.innerHTML = '';

    // Adiciona as imagens nas colunas
    columns.forEach(column => {
        const columnDiv = document.createElement('div');
        columnDiv.style.display = 'flex';
        columnDiv.style.flexDirection = 'column';
        columnDiv.style.gap = '10px'; // Espaçamento vertical entre as imagens

        column.forEach(image => {
            columnDiv.appendChild(image);
        });

        grid.appendChild(columnDiv);
    });
};

console.log("JavaScript da página de fotos carregado!");