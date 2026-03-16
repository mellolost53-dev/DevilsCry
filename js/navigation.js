document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    console.log("Navigation script loaded!"); // Перевірка

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            console.log("Burger clicked!"); 
            
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('is-active');

            // Блок скролу 
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
    } else {
        console.error("Menu elements not found! Check your HTML IDs.");
    }

    // Закриваємо менюшку при кліку на лінк
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('is-active');
            document.body.style.overflow = 'auto';
        });
    });
});