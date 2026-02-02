/* ========================================
   INVESTIGACIÓN 002 - JAVASCRIPT
   Carrusel y efectos interactivos
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // CONFIGURACIÓN DEL CARRUSEL
    // ========================================
    
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Función para mostrar un slide específico
    function showSlide(index) {
        // Asegurarnos de que el índice esté dentro del rango
        if (index < 0) {
            currentSlide = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        
        // Ocultar todos los slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Desactivar todos los indicadores
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // Mostrar el slide actual
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
        
        console.log(`[CAROUSEL] Mostrando slide ${currentSlide + 1}/${totalSlides}`);
    }
    
    // Función para ir al siguiente slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Función para ir al slide anterior
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    
    // ========================================
    // EVENT LISTENERS PARA LOS CONTROLES
    // ========================================
    
    // Botón siguiente
    nextButton.addEventListener('click', function() {
        nextSlide();
    });
    
    // Botón anterior
    prevButton.addEventListener('click', function() {
        prevSlide();
    });
    
    // Indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            showSlide(index);
        });
    });
    
    
    // ========================================
    // NAVEGACIÓN CON TECLADO
    // ========================================
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    
    // ========================================
    // AUTOPLAY (OPCIONAL)
    // ========================================
    
    // Descomenta las siguientes líneas si quieres que el carrusel avance automáticamente
    /*
    let autoplayInterval;
    
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
    }
    
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    // Iniciar autoplay
    startAutoplay();
    
    // Detener autoplay cuando el usuario interactúa
    prevButton.addEventListener('click', stopAutoplay);
    nextButton.addEventListener('click', stopAutoplay);
    indicators.forEach(indicator => {
        indicator.addEventListener('click', stopAutoplay);
    });
    */
    
    
    // ========================================
    // SWIPE PARA MÓVIL
    // ========================================
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    const carouselContainer = document.querySelector('.carousel-container');
    
    carouselContainer.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carouselContainer.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50; // Mínimo de píxeles para considerar un swipe
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe hacia la izquierda - siguiente slide
            nextSlide();
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe hacia la derecha - slide anterior
            prevSlide();
        }
    }
    
    
    // ========================================
    // FORMULARIO DE NEWSLETTER
    // ========================================
    
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            console.log(`[NEWSLETTER] Email registrado: ${email}`);
            
            // Aquí podrías enviar el email a un servidor
            // Por ahora solo mostramos un mensaje en consola
            
            // Limpiar el input
            emailInput.value = '';
            
            // Feedback visual (opcional)
            alert('¡gracias por suscribirte! [ email registrado ]');
        });
    }
    
    
    // ========================================
    // EFECTO DE GLITCH EN EL TÍTULO (OPCIONAL)
    // ========================================
    
    // Este efecto añade un pequeño "glitch" al logo cada cierto tiempo
    // Puedes comentarlo si prefieres un comportamiento más estático
    
    const logo = document.querySelector('.logo');
    
    function glitchEffect() {
        const originalText = logo.textContent;
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        // Reemplazar algunos caracteres aleatoriamente
        let glitchedText = originalText.split('').map(char => {
            if (Math.random() > 0.9 && char !== ' ' && char !== '[' && char !== ']') {
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
        }).join('');
        
        logo.textContent = glitchedText;
        
        // Restaurar el texto original después de 50ms
        setTimeout(() => {
            logo.textContent = originalText;
        }, 50);
    }
    
    // Ejecutar el glitch cada 10 segundos (opcional)
    // setInterval(glitchEffect, 10000);
    
    
    // ========================================
    // LOG DE BIENVENIDA
    // ========================================
    
    console.log('%c[ INVESTIGACIÓN 002 ]', 'background: #00ff00; color: #000000; padding: 10px; font-size: 16px; font-weight: bold; font-family: monospace;');
    console.log('%cTERMINAL AESTHETICS', 'color: #00ff00; font-size: 12px; font-family: monospace;');
    console.log('%cHTML + CSS + JS Vanilla', 'color: #666666; font-size: 10px; font-family: monospace;');
    console.log('%c> Sistema inicializado correctamente', 'color: #00ff00; font-family: monospace;');
    console.log('%c> Carrusel: ' + totalSlides + ' slides cargados', 'color: #00ff00; font-family: monospace;');
    console.log('%c> Controles: teclado (←/→), click, touch', 'color: #00ff00; font-family: monospace;');
    
});


/* ========================================
   NOTAS PARA MANU:
   ========================================
   
   1. Carrusel:
      - Funciona con botones, indicadores, teclado y swipe en móvil
      - Puedes activar el autoplay descomentando la sección correspondiente
      - Los slides tienen una transición suave de opacity
   
   2. Navegación:
      - Flechas del teclado (← →) para navegar
      - Click en los indicadores para ir a un slide específico
      - Swipe en móvil (deslizar izquierda/derecha)
   
   3. Efecto Glitch:
      - Está comentado por defecto
      - Si lo activas, el logo "glitchea" cada 10 segundos
      - Es un efecto sutil que añade personalidad
   
   4. Newsletter:
      - El formulario previene el envío por defecto
      - Muestra un alert cuando se envía
      - Puedes conectarlo a un backend si lo necesitas
   
   5. Personalización:
      - Todo el código está modular y comentado
      - Puedes activar/desactivar efectos fácilmente
      - Los tiempos de transición se pueden ajustar en el CSS
   
   ======================================== */
