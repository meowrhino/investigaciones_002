# investigación 002 - terminal aesthetics

prueba de concepto que replica la estética cyberpunk/terminal de [tallpoppypress.xyz](https://www.tallpoppypress.xyz/) usando únicamente **html, css y javascript vanilla**.

## 🎯 objetivo

demostrar que la estética cyberpunk, los efectos de terminal y las interfaces tipo "matrix" **no requieren frameworks complejos**. todo se puede lograr con css puro y javascript básico.

## ✨ efectos implementados

### 1. estética terminal/cyberpunk
la página tiene una estética inspirada en las terminales de computadora de los años 80/90 y el movimiento cyberpunk:

- **fondo negro** con cuadrícula de líneas punteadas verde neón
- **tipografía monoespaciada** (courier new) en todo el sitio
- **color neón verde** (#00ff00) como acento principal
- **contraste extremo** para máximo impacto visual
- uso de **corchetes [ ]** como elementos decorativos

```css
body {
    background-color: #000000;
    color: #ffffff;
    font-family: 'Courier New', monospace;
}
```

### 2. cuadrícula de líneas punteadas
el fondo tiene una cuadrícula de líneas verdes creada completamente con css usando gradientes:

```css
background-image: 
    repeating-linear-gradient(
        0deg,
        transparent,
        transparent 19px,
        #00ff00 19px,
        #00ff00 20px
    );
```

un overlay oscuro suaviza el efecto para que no sea demasiado agresivo visualmente.

### 3. carrusel de imágenes
carrusel horizontal de pantalla completa con:
- **transiciones suaves** entre slides (fade in/out)
- **controles de navegación** (botones ← →)
- **indicadores visuales** (cuadrados que muestran el slide actual)
- **navegación con teclado** (flechas izquierda/derecha)
- **swipe en móvil** (deslizar para cambiar de slide)
- **captions** con fondo verde neón

todo implementado con javascript vanilla, sin librerías externas.

### 4. menú superior con fondo neón
el menú tiene un fondo verde neón brillante con texto negro, creando un contraste máximo:

```css
.terminal-menu {
    background-color: #00ff00;
    color: #000000;
}
```

### 5. efectos hover
todos los elementos interactivos tienen efectos hover que cambian el fondo a verde neón:

```css
.event-item:hover {
    background-color: #00ff00;
    color: #000000;
}
```

### 6. responsive design
la página se adapta perfectamente a diferentes tamaños de pantalla:
- **desktop:** layout completo con carrusel grande
- **tablet:** ajustes en tamaños y espaciados
- **móvil:** menú vertical, carrusel más pequeño, swipe activado

## 📁 estructura del proyecto

```
investigaciones_002/
├── index.html      # estructura html
├── styles.css      # estilos cyberpunk
├── script.js       # lógica del carrusel
└── README.md       # este archivo
```

## 🚀 cómo usar

1. clona el repositorio:
   ```bash
   git clone https://github.com/meowrhino/investigaciones_002.git
   ```

2. abre `index.html` en tu navegador. no necesitas servidor local ni build process.

3. explora el código y modifícalo a tu gusto. todo está comentado y es fácil de entender.

## 🎨 personalización

### cambiar las imágenes
las imágenes actuales son placeholders. para cambiarlas, modifica los atributos `src` en el html:

```html
<img src="tu-imagen.jpg" alt="tu descripción">
```

### ajustar los colores
el verde neón está definido como `#00ff00`. puedes cambiarlo a cualquier otro color:

```css
/* busca y reemplaza #00ff00 por tu color preferido */
background-color: #ff00ff; /* magenta neón */
background-color: #00ffff; /* cyan neón */
```

### activar el autoplay
el carrusel puede avanzar automáticamente. descomenta esta sección en `script.js`:

```javascript
// startAutoplay(); // quita el comentario para activar
```

### activar el efecto glitch
el logo puede tener un efecto de "glitch" aleatorio. descomenta esta línea en `script.js`:

```javascript
// setInterval(glitchEffect, 10000); // quita el comentario
```

## 🌐 compatibilidad

- **css grid y flexbox:** compatible con todos los navegadores modernos
- **gradientes css:** compatible con todos los navegadores modernos
- **javascript vanilla:** no requiere transpilación ni polyfills
- **touch events:** funciona en todos los dispositivos móviles

## 🎮 controles

- **ratón:** click en botones ← → o en los indicadores
- **teclado:** flechas ← → para navegar
- **móvil:** swipe (deslizar) izquierda/derecha

## 📚 recursos de aprendizaje

- [mdn: css gradients](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
- [mdn: touch events](https://developer.mozilla.org/es/docs/Web/API/Touch_events)
- [mdn: keyboard events](https://developer.mozilla.org/es/docs/Web/API/KeyboardEvent)

## 💡 inspiración

este proyecto está inspirado en:
- [tallpoppypress.xyz](https://www.tallpoppypress.xyz/) - diseño original
- terminales de computadora de los años 80/90
- estética cyberpunk y matrix
- cultura hacker y underground digital

## 📝 licencia

este proyecto es de código abierto y está disponible para que lo uses, modifiques y aprendas de él.

---

**hecho con ❤️ usando html, css y javascript vanilla**  
**[ no frameworks ] [ no dependencies ] [ pure code ]**
