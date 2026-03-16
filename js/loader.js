window.addEventListener('load', () => {
    const loader = document.getElementById("loader");
    
    if (loader) {
        setTimeout(() => {
            // Додаємо клас, який запускає CSS-анімацію зникнення (наприклад, opacity: 0)
            loader.classList.add("loader-hidden"); 
            
            // Після завершення анімації (через 1.2 сек) повністю прибираємо елемент з DOM
            setTimeout(() => {
                loader.style.display = "none";
            }, 1200); 
            
        }, 2000); // Початкова затримка лоадера — 2 секунди
    }
});