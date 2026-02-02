# proceso de desarrollo - investigación 002

## 02/02/2026 - 02:00 - creación del proyecto

### sinopsis
creación de una prueba de concepto para replicar la estética cyberpunk/terminal de tallpoppypress.xyz usando únicamente html, css y javascript vanilla.

### contexto
manu solicitó crear un segundo proyecto de investigación inspirado en tallpoppypress.xyz, una web con una estética completamente diferente a polrebaque.com:
- fondo negro con líneas verdes neón
- estética cyberpunk/terminal/matrix
- carrusel horizontal de imágenes
- tipografía monoespaciada
- contraste extremo (negro + verde neón)

### análisis de la web original

antes de comenzar, analicé la web de tall poppy press para identificar sus elementos clave:

**características visuales:**
- fondo negro profundo (#000000)
- cuadrícula de líneas punteadas verde neón
- menú superior con fondo verde neón brillante (#00ff00)
- tipografía monoespaciada (estilo terminal)
- carrusel horizontal de imágenes grandes
- uso de corchetes [ ] como elementos decorativos
- contraste extremo para máximo impacto visual

**técnicas identificadas:**
- css gradients para crear la cuadrícula de líneas
- carrusel con javascript (posiblemente swiper.js, pero replicable con vanilla)
- tipografía courier o similar
- efectos hover con cambio de color a verde neón

### proceso técnico

#### 1. estructura html (index.html)

creé una estructura semántica dividida en secciones claras:

**menú terminal:**
```html
<nav class="terminal-menu">
    <div class="logo">[ investigación 002 ]</div>
    <ul class="menu-items">...</ul>
</nav>
```

el menú usa la estructura típica de comandos de terminal con corchetes.

**carrusel principal:**
- 5 slides con imágenes placeholder
- cada slide tiene una imagen y un caption
- controles de navegación (← →)
- indicadores visuales (cuadrados)

**secciones adicionales:**
- descripción con texto estilo "output de terminal"
- lista de eventos con estética de líneas de comando
- footer completo con newsletter y enlaces

#### 2. estilos css (styles.css)

el css está organizado en secciones muy claras:

**cuadrícula de fondo:**
```css
body {
    background-image: 
        repeating-linear-gradient(
            0deg,
            transparent,
            transparent 19px,
            #00ff00 19px,
            #00ff00 20px
        ),
        repeating-linear-gradient(
            90deg,
            transparent,
            transparent 19px,
            #00ff00 19px,
            #00ff00 20px
        );
    background-size: 20px 20px;
}
```

esto crea una cuadrícula perfecta de líneas verdes. cada línea tiene 1px de grosor y están separadas por 19px.

**overlay oscuro:**
para suavizar el efecto de la cuadrícula (que puede ser muy agresivo), añadí un pseudo-elemento:

```css
body::before {
    content: '';
    position: fixed;
    background: rgba(0, 0, 0, 0.85);
    pointer-events: none;
}
```

esto oscurece la cuadrícula sin eliminarla, creando un efecto más sutil.

**menú neón:**
```css
.terminal-menu {
    background-color: #00ff00;
    color: #000000;
    border-bottom: 2px solid #00ff00;
}
```

el menú tiene fondo verde brillante con texto negro, creando el contraste máximo característico de esta estética.

**carrusel:**
- los slides usan `position: absolute` y transiciones de opacity
- solo el slide activo tiene `opacity: 1`
- las imágenes tienen un filtro de `grayscale(50%)` para darles un toque más "crudo"

**efectos hover:**
todos los elementos interactivos invierten sus colores al hacer hover:
```css
.event-item:hover {
    background-color: #00ff00;
    color: #000000;
}
```

#### 3. javascript (script.js)

el javascript está dividido en módulos funcionales:

**carrusel:**
```javascript
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}
```

el carrusel es muy simple: solo añade/quita la clase `active` que controla la opacity en css.

**navegación múltiple:**
- **botones:** click en ← →
- **indicadores:** click en cualquier cuadrado
- **teclado:** flechas izquierda/derecha
- **swipe móvil:** touch events para detectar deslizamientos

**swipe en móvil:**
```javascript
carouselContainer.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

carouselContainer.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});
```

detecta el punto inicial y final del toque, y si la diferencia es mayor a 50px, cambia de slide.

**efectos opcionales:**
- **autoplay:** comentado por defecto, se puede activar
- **glitch effect:** efecto que "corrompe" el logo temporalmente, también comentado

#### 4. documentación (readme.md)

creé un readme completo que explica:
- el objetivo del proyecto
- todos los efectos implementados con ejemplos de código
- instrucciones de personalización
- controles y navegación
- compatibilidad
- inspiración y referencias

### decisiones de diseño

**por qué repeating-linear-gradient en lugar de border:**
los gradientes css permiten crear patrones complejos sin necesidad de imágenes. son escalables, personalizables y tienen mejor rendimiento que usar imágenes de fondo.

**por qué un overlay oscuro sobre la cuadrícula:**
la cuadrícula verde neón al 100% de opacidad puede ser visualmente agresiva y dificultar la lectura. el overlay la suaviza manteniendo el efecto.

**por qué transiciones de opacity en lugar de transform:**
las transiciones de opacity son más suaves y tienen mejor rendimiento que las de transform (como translateX). además, se adaptan mejor a diferentes tamaños de pantalla.

**por qué courier new:**
es una fuente monoespaciada que está disponible en todos los sistemas operativos. evita dependencias de google fonts u otros servicios externos.

**por qué no usar una librería de carrusel:**
las librerías como swiper.js son potentes pero añaden peso innecesario. un carrusel básico con fade in/out es muy simple de implementar con javascript vanilla.

### resultado

el proyecto replica exitosamente la estética de tallpoppypress.xyz:
- ✅ fondo negro con cuadrícula verde neón
- ✅ menú con fondo neón y texto negro
- ✅ carrusel horizontal funcional
- ✅ tipografía monoespaciada en todo el sitio
- ✅ efectos hover con inversión de colores
- ✅ navegación múltiple (click, teclado, swipe)
- ✅ completamente responsive
- ✅ sin dependencias ni frameworks
- ✅ código limpio y bien comentado

### comparación con investigaciones_001

| aspecto | investigación 001 | investigación 002 |
|---------|-------------------|-------------------|
| **estética** | minimalista, elegante | cyberpunk, terminal |
| **colores** | blanco/gris/negro | negro/verde neón |
| **tipografía** | sans-serif moderna | monoespaciada |
| **layout** | grid asimétrico | carrusel horizontal |
| **efecto principal** | mix-blend-mode | cuadrícula neón |
| **inspiración** | polrebaque.com | tallpoppypress.xyz |

ambos proyectos demuestran que se pueden conseguir estéticas muy diferentes y sofisticadas usando solo html, css y javascript vanilla.

### próximos pasos posibles

1. **añadir más efectos de terminal:** como un cursor parpadeante, texto que se "escribe" letra por letra
2. **implementar un modo de "escaneo":** líneas que se mueven verticalmente como en las películas de hackers
3. **añadir efectos de ruido/grain:** para darle un toque más "analógico"
4. **implementar un sistema de "comandos":** donde el usuario pueda escribir comandos en una terminal
5. **añadir más variaciones de color:** cyan, magenta, amber (colores típicos de terminales antiguas)

### notas técnicas

**rendimiento:**
el proyecto es extremadamente ligero:
- html: ~4kb
- css: ~8kb
- js: ~4kb
- **total: ~16kb** (sin contar imágenes)

**compatibilidad de gradientes css:**
- chrome: ✅ desde versión 26
- firefox: ✅ desde versión 16
- safari: ✅ desde versión 6.1
- edge: ✅ desde versión 12

**touch events:**
- ios safari: ✅ desde versión 2
- android chrome: ✅ desde versión 4
- todos los dispositivos móviles modernos: ✅

### reflexión

este proyecto demuestra que la estética cyberpunk y los efectos de terminal no son exclusivos de aplicaciones complejas o frameworks pesados. con un buen conocimiento de css (especialmente gradientes) y javascript básico, se pueden crear experiencias visuales muy impactantes.

la clave está en:
1. entender los fundamentos de css (gradientes, pseudo-elementos, transiciones)
2. usar javascript de forma estratégica (solo donde sea necesario)
3. priorizar el rendimiento (transiciones de opacity, no de transform)
4. mantener el código modular y bien comentado
5. pensar en la experiencia del usuario (navegación múltiple, responsive)

---

**tiempo total de desarrollo:** ~60 minutos  
**líneas de código:** ~600 líneas  
**dependencias:** 0  
**frameworks:** 0  
**nivel de satisfacción:** 100% 🚀  
**estética:** cyberpunk af 💚
