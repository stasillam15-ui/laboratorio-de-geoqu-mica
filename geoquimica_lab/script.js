document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Menú de Navegación Móvil (Hamburger) ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Intercambiar ícono entre barras y cruz
        const icon = hamburger.querySelector('i');
        if(navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Cerrar menú móvil al hacer clic en un enlace
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // --- 2. Efecto en la barra de navegación al hacer Scroll ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        // Reducir la altura/sombra del navbar al bajar en la página
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
        }
    });

    // --- 3. Animaciones al hacer Scroll (Reveal Effect) ---
    const reveals = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const elementVisible = 120; // Cuántos píxeles antes de entrar a la pantalla se activa

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    // Escuchar el evento scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // Ejecutar una vez al cargar la página por si hay elementos visibles inicialmente
    revealOnScroll();

    // --- 4. Interacción básica para el formulario de contacto ---
    // (El formulario ahora usa action="https://formsubmit.co/..." nativo en el HTML)

    // --- 5. Lógica del Modal de Login ---
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.querySelector('.close-modal');
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    if (loginBtn && loginModal) {
        // Abrir modal
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.add('active');
            loginError.style.display = 'none';
        });

        // Cerrar modal con la X
        closeModal.addEventListener('click', () => {
            loginModal.classList.remove('active');
        });

        // Cerrar modal al hacer clic fuera del contenido
        window.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.classList.remove('active');
            }
        });

        // Manejar el submit del formulario (Login Básico)
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const idValue = document.getElementById('userId').value.trim();
            const passValue = document.getElementById('userPassword').value;

            // CONFIGURACIÓN DE USUARIOS: Nombres permitidos y contraseña general
            // Convertimos a minúsculas para que no importe si escriben con mayúsculas o minúsculas
            const allowedIds = [
                'sandra medina paredes', 'sandra', 'smedina',
                'wilder chuquiruna chávez', 'wilder chuquiruna', 'wilder', 'wchuquiruna',
                'jhoel tasilla moreno', 'jhoel tasilla', 'jhoel', 'jtasilla'
            ];
            const masterPassword = 'LABGEO';

            if (allowedIds.includes(idValue.toLowerCase()) && passValue === masterPassword) {
                // Éxito: Ocultar error, limpiar form y abrir dashboard en nueva pestaña
                loginError.style.display = 'none';
                loginForm.reset();
                loginModal.classList.remove('active');
                
                // Abre el dashboard en nueva pestaña
                window.open('dashboard.html', '_blank');
            } else {
                // Error de credenciales
                loginError.style.display = 'block';
            }
        });
    }

});
