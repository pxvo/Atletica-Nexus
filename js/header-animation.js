document.addEventListener('DOMContentLoaded', function() {
    const logoContainer = document.getElementById('logo-container');
    const logo1 = logoContainer.querySelector('img:nth-child(1)');
    const logo2 = logoContainer.querySelector('img:nth-child(2)');

    setInterval(function() {
        if (logo1.style.display === 'none') {
            logo1.style.display = 'inline';
            logo2.style.display = 'none';
        } else {
            logo1.style.display = 'none';
            logo2.style.display = 'inline';
        }
    }, 5000); // Alterna a cada 3 segundos
});