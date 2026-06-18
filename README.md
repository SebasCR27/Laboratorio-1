# 📚 README Técnico — Maison Sillage

> Documento de estudio para la defensa del proyecto.  
> Explica **qué hace cada parte del código**, **por qué se usó** y **cómo funciona** todo junto.

-----

## 🗂️ Estructura del proyecto

```
maison-sillage/
│
├── Index.html       → La estructura de la página (el esqueleto)
├── Estilos.css      → Los estilos visuales (colores, fuentes, tamaños, responsive)
├── index.js         → La lógica del menú y el scroll guardado
└── imgs/            → Carpeta con las imágenes de los perfumes
```

-----

## 🧱 HTML — La estructura de la página

El HTML está organizado en **secciones temáticas** usando etiquetas semánticas. Esto significa que cada etiqueta tiene un significado propio más allá de solo mostrar contenido.

### ¿Qué es HTML semántico y por qué importa?

HTML semántico es usar la etiqueta correcta según el **rol** del contenido, no solo para que se vea bien. Esto tiene tres ventajas principales:

- Los **buscadores** (Google, etc.) entienden mejor el contenido.
- Los **lectores de pantalla** para personas con discapacidad visual funcionan correctamente.
- El código es más **fácil de leer y mantener** por otros desarrolladores.

-----

### Etiquetas utilizadas y su justificación

#### `<header>` — Encabezado del sitio

```html
<header class="site-header"> ... </header>
```

Contiene el logo y el menú de navegación. Se usa `<header>` porque es el encabezado principal del sitio, no un `<div>` genérico. Está fijo en la parte superior gracias a `position: sticky` en CSS.

-----

#### `<nav>` — Menú de navegación

```html
<nav class="header-nav" id="nav-menu" aria-label="Navegación principal">
    <ul>
        <li><a href="#nosotros">Quiénes somos</a></li>
        ...
    </ul>
</nav>
```

`<nav>` indica que ese bloque es un **menú de navegación**. Dentro usa `<ul>` (lista sin orden) + `<li>` (elementos de lista) + `<a>` (enlaces), que es la estructura estándar para menús.

El atributo `aria-label="Navegación principal"` es accesibilidad: le dice a los lectores de pantalla qué tipo de navegación es.

-----

#### `<button>` — Botón del menú hamburguesa (móvil)

```html
<button class="nav-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav-menu">
    <span></span>
    <span></span>
    <span></span>
</button>
```

Se usa `<button>` en lugar de `<div>` porque:

- Es **accesible por teclado** (se puede activar con Enter/Espacio).
- Tiene comportamiento de botón nativo en el navegador.

Los tres `<span>` vacíos son las **tres líneas del ícono hamburguesa**, dibujadas con CSS. Los atributos `aria-expanded` y `aria-controls` le dicen a tecnologías de asistencia si el menú está abierto o cerrado.

-----

#### `<article>` — Sección introductoria

```html
<article>
    <h1>El arte de la fragancia</h1>
    <section id="nosotros"> ... </section>
</article>
```

`<article>` se usa para contenido que tiene **sentido por sí solo**, como una entrada de blog, una noticia o una sección descriptiva. Aquí envuelve la presentación de la marca.

-----

#### `<main>` — Contenido principal

```html
<main class="hero"> ... </main>
```

`<main>` marca el **contenido central** de la página. Solo debe haber uno por página. Contiene el catálogo, la historia, los testimonios y el footer.

-----

#### `<section>` — Secciones temáticas

```html
<section id="nosotros"> ... </section>
<section id="historia"> ... </section>
<section id="testimonios"> ... </section>
```

`<section>` agrupa contenido relacionado con un **tema común**. A cada una se le asigna un `id` para que los enlaces del menú (`href="#nosotros"`) puedan hacer scroll hasta ellas.

-----

#### `<article>` dentro del catálogo — Tarjetas de perfume

```html
<article class="perfume-card"> ... </article>
```

Cada perfume es un `<article>` porque representa **una unidad de contenido independiente**, igual que una tarjeta de producto en una tienda. Podría publicarse solo y tendría sentido.

-----

#### `<blockquote>` — Citas de testimonios

```html
<blockquote>
    "Honor and Glory superó mis expectativas..."
</blockquote>
```

`<blockquote>` es la etiqueta correcta para **citas textuales** de otras personas. Es semánticamente más precisa que un `<p>` normal.

-----

#### `<footer>` — Pie de página

```html
<footer class="footer-maison"> ... </footer>
```

Contiene información de contacto, navegación secundaria y derechos de autor. `<footer>` le indica al navegador y a los buscadores que ese bloque es el **cierre de la página**.

-----

#### `<address>` — Información de contacto

```html
<address class="footer-contacto"> ... </address>
```

`<address>` es específicamente para datos de **contacto** (teléfono, email, ubicación). Es más semántico que usar un `<div>` o `<p>` genérico.

-----

#### `<img>` con `alt` — Imágenes accesibles

```html
<img src="imgs/HonorandGlory.webp" alt="Honor and Glory">
```

El atributo `alt` describe la imagen en texto. Si la imagen no carga, el usuario ve ese texto. También es leído por lectores de pantalla para personas con discapacidad visual. **Siempre debe estar presente.**

-----

## 🎨 CSS — Los estilos visuales

### Paleta de colores del proyecto

|Color           |Código   |Uso                   |
|----------------|---------|----------------------|
|Negro profundo  |`#000`   |Fondo general         |
|Dorado oscuro   |`#b58a3c`|Acentos, líneas, hover|
|Crema cálida    |`#f4e6d3`|Títulos principales   |
|Gris cálido     |`#9e9587`|Textos secundarios    |
|Fondo de tarjeta|`#120d05`|Cards de perfumes     |

Esta paleta crea una estética de **lujo, elegancia y exclusividad**, acorde con el tipo de producto.

-----

### Conceptos CSS importantes en el proyecto

#### `position: sticky` — Header que sigue al usuario

```css
.site-header {
    position: sticky;
    top: 0;
    z-index: 1000;
}
```

Hace que el header **se quede fijo arriba** mientras el usuario hace scroll, sin que tape el resto del contenido. `z-index: 1000` asegura que esté por encima de todos los demás elementos.

-----

#### `scroll-behavior: smooth` y `scroll-padding-top`

```css
html {
    scroll-behavior: smooth;
    scroll-padding-top: 90px;
}
```

- `scroll-behavior: smooth` → Cuando el usuario hace clic en un enlace del menú, el scroll se **anima suavemente** en lugar de saltar de golpe.
- `scroll-padding-top: 90px` → Compensa la altura del header fijo. Sin esto, el header taparía el inicio de cada sección.

-----

#### `backdrop-filter: blur(8px)` — Header con efecto vidrio

```css
.site-header {
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(8px);
}
```

Aplica un **efecto de desenfoque** al fondo detrás del header, creando una apariencia de vidrio esmerilado (glass effect). Muy usado en diseños modernos.

-----

#### Flexbox — Distribución de elementos

```css
.header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```

`display: flex` es la herramienta principal de layout en este proyecto. Permite:

- Alinear elementos horizontal o verticalmente.
- Distribuir el espacio entre ellos.
- Reordenarlos fácilmente en móvil.

-----

#### `transition` — Animaciones suaves

```css
.header-nav a {
    transition: color 0.3s ease;
}
.testimonio-card {
    transition: transform 0.3s ease;
}
```

Las transiciones hacen que los cambios de estilo (como el color al pasar el mouse, o mover una tarjeta) sean **graduales y suaves**, en lugar de instantáneos.

-----

#### `.testimonio-card:hover` — Efecto al pasar el mouse

```css
.testimonio-card:hover {
    transform: translateY(-8px);
}
```

Cuando el usuario pone el cursor sobre una tarjeta de testimonio, esta **sube 8 píxeles** hacia arriba, dando una sensación interactiva y moderna.

-----

#### Media Queries — Diseño Responsive

```css
@media screen and (max-width: 768px) { ... }
@media screen and (max-width: 480px) { ... }
```

Las media queries permiten aplicar **estilos diferentes según el tamaño de pantalla**. Hay dos puntos de quiebre (breakpoints):

- `768px` → Tablets y móviles medianos: el menú se convierte en hamburguesa, las tarjetas se apilan verticalmente.
- `480px` → Móviles pequeños: los textos se reducen más, las imágenes se ajustan.

Esto es lo que hace al sitio **responsive** (que funciona bien en cualquier dispositivo).

-----

#### El menú hamburguesa en CSS

```css
.nav-toggle {
    display: none; /* Oculto en pantallas grandes */
}

@media screen and (max-width: 768px) {
    .nav-toggle {
        display: flex; /* Visible solo en móvil */
    }
    .header-nav {
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        transition: max-height 0.35s ease, opacity 0.3s ease;
    }
    .header-nav.is-open {
        max-height: 320px;
        opacity: 1;
    }
}
```

El menú se **oculta** en móvil (`max-height: 0`, `opacity: 0`) y aparece cuando JavaScript le agrega la clase `.is-open`. La transición de `max-height` es el truco para animar la apertura sin usar `display: none` directamente (que no se puede animar).

-----

#### Animación del ícono hamburguesa → X

```css
.nav-toggle[aria-expanded="true"] span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}
.nav-toggle[aria-expanded="true"] span:nth-child(2) {
    opacity: 0;
}
.nav-toggle[aria-expanded="true"] span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
}
```

Cuando el menú está abierto (`aria-expanded="true"`):

- La primera línea rota 45°.
- La segunda línea desaparece.
- La tercera línea rota -45°.

El resultado visual es que las 3 líneas del ícono ☰ se convierten en una ✕.

-----

## ⚙️ JavaScript — La lógica interactiva

El proyecto tiene **dos bloques de JavaScript**: uno incrustado al final del HTML y otro en el archivo `index.js`.

-----

### Bloque 1 — En el HTML (al final del `<body>`)

```javascript
const navToggle = document.querySelector('.nav-toggle');
const headerNav = document.querySelector('.header-nav');

navToggle.addEventListener('click', () => {
    const isOpen = headerNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

headerNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        headerNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú');
    });
});
```

**Paso a paso:**

1. `document.querySelector('.nav-toggle')` → Busca el botón hamburguesa en el HTML y lo guarda en una variable.
1. `document.querySelector('.header-nav')` → Busca el menú de navegación y lo guarda.
1. `navToggle.addEventListener('click', ...)` → Escucha cuando el usuario hace clic en el botón.
1. `headerNav.classList.toggle('is-open')` → Agrega la clase `is-open` si no la tiene, o la quita si ya la tiene. Esto activa/desactiva la animación del menú en CSS.
1. `setAttribute('aria-expanded', isOpen)` → Actualiza el atributo de accesibilidad para que diga si el menú está abierto o cerrado.
1. El `forEach` en los enlaces hace que **al hacer clic en cualquier opción del menú**, el menú se cierre automáticamente (útil en móvil).

-----

### Bloque 2 — Archivo `index.js`

```javascript
const navToggle = document.querySelector('.nav-toggle');
const headerNav = document.querySelector('.header-nav');

// Al cargar la página, revisar si hay una sección guardada
window.addEventListener('DOMContentLoaded', () => {
    const ultimaSeccion = localStorage.getItem('seccionGuardada');
    if (ultimaSeccion) {
        setTimeout(() => {
            const elemento = document.querySelector(ultimaSeccion);
            if (elemento) elemento.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
});

navToggle.addEventListener('click', () => {
    const isOpen = headerNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});

headerNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        // Guardar la sección cuando el usuario hace clic
        const destino = link.getAttribute('href');
        if (destino.startsWith('#')) {
            localStorage.setItem('seccionGuardada', destino);
        }

        headerNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú');
    });
});
```

**Las dos funcionalidades nuevas que agrega este archivo:**

#### 📌 Guardar la última sección visitada

```javascript
const destino = link.getAttribute('href'); // Obtiene "#catalogo", "#nosotros", etc.
if (destino.startsWith('#')) {
    localStorage.setItem('seccionGuardada', destino);
}
```

- `link.getAttribute('href')` → Obtiene el destino del enlace (ej: `"#catalogo"`).
- `localStorage.setItem(...)` → Guarda ese valor en el **localStorage**, que es una memoria del navegador que **persiste aunque se cierre la pestaña**.

#### 🔄 Volver a esa sección al recargar la página

```javascript
window.addEventListener('DOMContentLoaded', () => {
    const ultimaSeccion = localStorage.getItem('seccionGuardada');
    if (ultimaSeccion) {
        setTimeout(() => {
            const elemento = document.querySelector(ultimaSeccion);
            if (elemento) elemento.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
});
```

- `DOMContentLoaded` → Se ejecuta cuando el HTML termina de cargarse completamente.
- `localStorage.getItem('seccionGuardada')` → Lee el valor guardado anteriormente.
- Si existe, hace scroll automático hacia esa sección.
- `setTimeout(..., 100)` → Espera 100 milisegundos antes de hacer el scroll, para asegurarse de que todos los elementos de la página ya estén listos.

**En resumen:** Si el usuario estaba en “Catálogo” y recarga la página, el sitio lo **devuelve automáticamente a esa sección**.

-----

### ¿Qué es `localStorage`?

Es una forma de guardar datos en el **navegador del usuario**, sin necesitar una base de datos ni un servidor. Los datos persisten incluso si se cierra y se vuelve a abrir la pestaña. Solo se borran si el usuario limpia el caché o el código los elimina.

|Método                                  |¿Qué hace?          |
|----------------------------------------|--------------------|
|`localStorage.setItem('clave', 'valor')`|Guarda un dato      |
|`localStorage.getItem('clave')`         |Lee un dato guardado|
|`localStorage.removeItem('clave')`      |Borra un dato       |

-----

## 🔗 Cómo se conectan los tres archivos

```
Index.html
│
├── <link rel="stylesheet" href="Estilos.css">  → Carga los estilos visuales
│
└── <script src="index.js"></script>             → Carga la lógica JavaScript
```

El HTML es el punto de entrada. Al abrirlo en un navegador, este automáticamente carga el CSS y el JS, formando la página completa.

-----

## ✅ Resumen para la defensa

|Tema                                     |Concepto clave                                              |
|-----------------------------------------|------------------------------------------------------------|
|HTML semántico                           |Usar la etiqueta correcta según el rol del contenido        |
|`<header>`, `<nav>`, `<main>`, `<footer>`|Estructura y orden del sitio                                |
|`<article>` vs `<section>`               |Article = contenido independiente / Section = grupo temático|
|`aria-label`, `aria-expanded`            |Accesibilidad para lectores de pantalla                     |
|`position: sticky`                       |Header fijo que no tapa el contenido                        |
|`scroll-behavior: smooth`                |Scroll animado al hacer clic en el menú                     |
|`@media screen and (max-width)`          |Diseño responsive para móviles                              |
|`classList.toggle('is-open')`            |Agregar/quitar clase CSS desde JavaScript                   |
|`localStorage`                           |Memoria del navegador para guardar datos                    |
|`DOMContentLoaded`                       |Ejecutar código cuando la página está lista                 |

-----

*Proyecto: Maison Sillage — Emprendimiento costarricense de fragancias de lujo originales.*  
*Stack: HTML5 · CSS3 · JavaScript Vanilla*