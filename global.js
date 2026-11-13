// ==========================================
// global.js - MOTOR GLOBAL DE MONSE WEB
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    initUserPreferences();
    initGlobalUIListeners();
    initGlobalLightbox();
});

// 1. GESTIÓN DE PREFERENCIAS (MODO Y TAMAÑO DE FUENTE)
function initUserPreferences() {
    const savedTheme = localStorage.getItem('monse_theme') || 'dark';
    const savedFontSize = localStorage.getItem('monse_fontsize') || 'normal';

    // Aplicar tema al documento
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
    updateLogosUI(savedTheme);

    // Aplicar tamaño de fuente
    applyFontSizeClass(savedFontSize);
    updateFontLabelUI(savedFontSize);
}

// Actualizar logos, favicon, bienvenida y textos de forma dinámica en cualquier página
function updateLogosUI(theme) {
    const navbarLogo = document.getElementById('navbar-logo');
    const faviconLogo = document.getElementById('favicon-logo');
    const welcomeLogo = document.getElementById('welcome-logo'); // Logo de la animación de bienvenida
    const themeBtn = document.getElementById('btn-toggle-theme');

    if (navbarLogo) {
        // Detectamos si la ruta actual del logo HTML usa '../' (está en subcarpeta)
        const isSubfolder = navbarLogo.getAttribute('src') && navbarLogo.getAttribute('src').includes('../');
        const prefix = isSubfolder ? '../' : '';

        if (theme === 'dark') {
            navbarLogo.src = prefix + 'img/logopng1.png';
        } else {
            navbarLogo.src = prefix + 'img/logopng2.png';
        }
    }

    if (faviconLogo) {
        const isSubfolderFav = faviconLogo.getAttribute('href') && faviconLogo.getAttribute('href').includes('../');
        const prefixFav = isSubfolderFav ? '../' : '';

        if (theme === 'dark') {
            faviconLogo.href = prefixFav + 'img/logopng1.png';
        } else {
            faviconLogo.href = prefixFav + 'img/logopng2.png';
        }
    }

    // Actualización del logo de la animación de bienvenida inicial
    if (welcomeLogo) {
        const isSubfolderWelcome = welcomeLogo.getAttribute('src') && welcomeLogo.getAttribute('src').includes('../');
        const prefixWelcome = isSubfolderWelcome ? '../' : '';

        if (theme === 'dark') {
            welcomeLogo.src = prefixWelcome + 'img/logopng1.png';
        } else {
            welcomeLogo.src = prefixWelcome + 'img/logopng2.png';
        }
    }

    if (themeBtn) {
        const span = themeBtn.querySelector('span:nth-child(1)') || themeBtn;
        if (theme === 'dark') {
            span.innerHTML = '<i class="bi bi-sun-fill me-2" id="theme-icon"></i>Modo Claro';
        } else {
            span.innerHTML = '<i class="bi bi-moon-stars me-2" id="theme-icon"></i>Modo Oscuro';
        }
    }
}

function applyFontSizeClass(size) {
    document.body.classList.remove('font-large', 'font-size-small', 'font-size-normal', 'font-size-large');
    if (size === 'large') {
        document.body.classList.add('font-large');
    }
}

function updateFontLabelUI(size) {
    const fontLabel = document.getElementById('font-size-label');
    if (fontLabel) {
        fontLabel.textContent = (size === 'large') ? 'Grande' : 'Normal';
    }
}


// 2. ESCUCHADORES DE EVENTOS GLOBALES (BOTONES)
function initGlobalUIListeners() {
    // Botón de Tema (Claro / Oscuro)
    const themeBtn = document.getElementById('btn-toggle-theme');
    if (themeBtn) {
        themeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentTheme = document.documentElement.getAttribute('data-bs-theme');
            const newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('monse_theme', newTheme);
            updateLogosUI(newTheme);
        });
    }

    // Botón de Tamaño de Fuente
    const fontBtn = document.getElementById('btn-toggle-font');
    if (fontBtn) {
        fontBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isLarge = document.body.classList.contains('font-large');
            const newSize = isLarge ? 'normal' : 'large';

            applyFontSizeClass(newSize);
            updateFontLabelUI(newSize);
            localStorage.setItem('monse_fontsize', newSize);
        });
    }
}


// 3. CONTROL GLOBAL DE LIGHTBOX (VISOR DE IMÁGENES)
function initGlobalLightbox() {
    if (!document.getElementById('lightboxModal') && !document.getElementById('projectLightbox')) {
        const lightboxHTML = `
            <div id="lightboxModal" class="lightbox-modal" onclick="closeLightbox(event)">
                <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
                <img class="lightbox-content" id="lightboxImg" alt="Vista ampliada">
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    }
}

function openLightbox(imageSrc) {
    const modal = document.getElementById('lightboxModal') || document.getElementById('projectLightbox');
    const modalImg = document.getElementById('lightboxImg') || document.getElementById('lightboxImage');
    
    if (modal && modalImg) {
        modalImg.src = imageSrc;
        modal.classList.add('show');
        modal.style.display = "flex";
    }
}

function closeLightbox(event) {
    const modal = document.getElementById('lightboxModal') || document.getElementById('projectLightbox');
    if (modal && (!event || event.target === modal || event.target.classList.contains('lightbox-close'))) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }
}

// Cerrar con tecla Escape globalmente
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// ------------------------------------
// SEGURIDAD
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Bloquear el menú contextual (Clic derecho) - Funciona en todos (Mac, Linux, Windows)
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert('Contenido protegido. Las imágenes y recursos están bajo derechos de autor.');
    });

    // 2. Bloquear atajos de teclado (Compatible con Windows/Linux [Ctrl] y Mac [Command])
    document.addEventListener('keydown', function(e) {
        // Detectar tecla F12 (Inspeccionar)
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }

        // Detectar si presiona Ctrl (Windows/Linux) o Command/Meta (Mac)
        const isCtrlOrCmd = e.ctrlKey || e.metaKey;

        if (isCtrlOrCmd) {
            if (
                e.key === 'c' || // Copiar (Ctrl+C / Cmd+C)
                e.key === 's' || // Guardar página (Ctrl+S / Cmd+S)
                e.key === 'p' || // Imprimir (Ctrl+P / Cmd+P)
                e.key === 'u' || // Ver código fuente (Ctrl+U / Cmd+U)
                (e.shiftKey && e.key === 'i') || // DevTools (Ctrl+Shift+I / Cmd+Shift+I)
                (e.altKey && e.key === 'i')      // DevTools alternativo en Mac (Cmd+Option+I)
            ) {
                e.preventDefault();
                alert('Acción deshabilitada para proteger el contenido de Monse WEB.');
                return false;
            }
        }
    });

    // 3. Bloquear el arrastre de elementos e imágenes con el ratón - Funciona en todos
    document.addEventListener('dragstart', function(e) {
        if (e.target.nodeName === 'IMG') {
            e.preventDefault();
        }
    });
});