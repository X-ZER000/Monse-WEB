// ==========================================
// DATOS DEL PORTAFOLIO EMPRESARIAL E INSTITUCIONAL
// ==========================================

// 1. Imágenes para el Carrusel Principal Superior
const carouselEmpImages = [
    "imgE/Destacado.png", "imgE/destacado2.png","imgE/Destacado3.png",
    "imgE/Destacado1.png"
];

// 2. Datos organizados combinando elementos pequeños y ubicando manteles junto a rótulos
const empresasData = {
    uniformes: [
        "imgE/uniforme1.jpg",
        "imgE/uniforme2.jpg"
    ],
    uniformes_escolares: [
        "imgE/U_EscuelaAGZ1.png","imgE/U_EscuelaAGZ.png", "imgE/U_EscuelaAGZ3.png",
        "imgE/U_EscuelaAngeles.png", "imgE/U_EscuelaERR.png", "imgE/U_EscuelaRACG.png",
        "imgE/U_EscuelaSBP.png", "imgE/U_EscuelaSE.png"
    ],
    gorras: [
        "imgE/gorra1.jpg"
    ],
    mangas: [
        "imgE/manga1.jpg"
    ],
    lanyards: [
        "imgE/cinta1.jpg",
        "imgE/gafete1.jpg"
    ],
    tazas: [
        "imgE/taza1.jpg"
    ],
    botellas_Tumblers: [
        "imgE/botella1.jpg",
        "imgE/tumbler1.jpg"
    ],
    llaveros: [
        "imgE/llavero1.jpg"
    ],
    stickers_Accesorios: [
        "imgE/sticker1.jpg",
        "imgE/estuche1.jpg",
        "imgE/mousepad1.jpg"
    ],
    rotulos: [
        "imgE/rotulo1.jpg",
        "imgE/banner1.jpg",
        "imgE/mantel1.jpg",
        "imgE/mantel2.jpg"
    ],
    actividades: [
        "imgE/actividad1.jpg"
    ],
    sombrillas: [
        "imgE/sombrilla1.jpg"
    ],
    especiales_politica: [
        "imgE/placa1.jpg",
        "imgE/placa2.jpg",
        "imgE/campana1.jpg",
        "imgE/campana2.jpg"
    ]
};


// ==========================================
// FUNCIONES DE RENDERIZADO AUTOMÁTICO
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    renderCarousel();
    renderAllCategories();
    initScrollButtons();
});

// Renderizar el Carrusel Superior
function renderCarousel() {
    const container = document.getElementById('carousel-inner-container');
    if (!container) return;

    container.innerHTML = carouselEmpImages.map((img, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${img}" class="d-block w-100 object-fit-cover" style="height: 380px; cursor: pointer;" alt="Destacado Empresarial ${index + 1}" onclick="openLightbox('${img}')">
        </div>
    `).join('');
}

// Renderizar todas las categorías dinámicamente
function renderAllCategories() {
    for (const [key, images] of Object.entries(empresasData)) {
        const container = document.getElementById(`${key}-container`);
        if (container) {
            container.innerHTML = images.map((img, i) => `
                <div class="flex-shrink-0" style="width: 300px;">
                    <div class="card h-100 shadow-sm border-0 overflow-hidden">
                        <img src="${img}" class="card-img-top object-fit-cover" style="height: 300px; cursor: pointer;" alt="${key} ${i + 1}" loading="lazy" onclick="openLightbox('${img}')">
                    </div>
                </div>
            `).join('');
        }
    }
}

// ==========================================
// CONTROL DE FLECHAS DE DESPLAZAMIENTO HORIZONTAL
// ==========================================
function initScrollButtons() {
    document.querySelectorAll('.position-relative').forEach(wrapper => {
        const leftBtn = wrapper.querySelector('.scroll-left-btn');
        const rightBtn = wrapper.querySelector('.scroll-right-btn');
        const container = wrapper.querySelector('.scroll-container');

        if (leftBtn && rightBtn && container) {
            leftBtn.addEventListener('click', () => {
                container.scrollBy({ left: -320, behavior: 'smooth' });
            });
            rightBtn.addEventListener('click', () => {
                container.scrollBy({ left: 320, behavior: 'smooth' });
            });
        }
    });
}

// ==========================================
// FUNCIONES PARA EL LIGHTBOX (VISOR DE IMÁGENES)
// ==========================================
function openLightbox(imageSrc) {
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    if (modal && modalImg) {
        modal.style.display = "flex";
        setTimeout(() => modal.classList.add('show'), 10);
        modalImg.src = imageSrc;
    }
}

function closeLightbox(event) {
    const modal = document.getElementById('lightboxModal');
    if (modal && (!event || event.target === modal || event.target.classList.contains('lightbox-close'))) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }
}