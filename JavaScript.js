let slideIndex = 0; // Empieza en la primera imagen

// Función para mover el carrusel
function moveSlide(step) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;
    
    // Cambiar el índice de la diapositiva
    slideIndex += step;

    // Si llegamos al final o al principio, reiniciamos el índice
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    // Cambiar la posición del carrusel
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Opcional: para hacer el carrusel automático (cada 5 segundos)
setInterval(() => moveSlide(1), 5000);

