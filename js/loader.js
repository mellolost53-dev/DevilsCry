window.addEventListener('load', () => {
    const loader = document.getElementById("loader");
    
    if (loader) {
        setTimeout(() => {
            // клас для анімації зникнення
            loader.classList.add("loader-hidden"); 
            
            // прибираєм через1ю2 сек з дом
            setTimeout(() => {
                loader.style.display = "none";
            }, 1200); 
            
        }, 2000); // 2 сек анімації
    }
});