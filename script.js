// Efeito de mudar a cor de fundo do menu ao rolar a página
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Alerta ou ação personalizada nos links do WhatsApp (opcional)
const whatsappButtons = document.querySelectorAll('a[href^="https://wa.me"]');

whatsappButtons.forEach(button => {
    button.addEventListener('click', function() {
        console.log('Redirecionando cliente para agendamento no WhatsApp...');
    });
});