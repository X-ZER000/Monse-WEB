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
        "imgE/Uniforme1.png", "imgE/Uniforme2.png", "imgE/Uniforme3.png",
        "imgE/Uniforme4.png", "imgE/Uniforme5.png", "imgE/Uniforme6.png",
        "imgE/Uniforme7.png", "imgE/Uniforme8.png", "imgE/Uniforme9.png",
        "imgE/Uniforme10.png", "imgE/Uniforme11.png", "imgE/Uniforme12.png",
        "imgE/Uniforme13.png", "imgE/Uniforme14.png", "imgE/Uniforme15.png",
        "imgE/Uniforme16.png", "imgE/Uniforme17.png", "imgE/Uniforme18.png",
        "imgE/Uniforme19.png", "imgE/Uniforme20.png", "imgE/Uniforme21.png",
        "imgE/Uniforme22.png", "imgE/Uniforme23.png", "imgE/Uniforme24.png",
        "imgE/Uniforme25.png", "imgE/Uniforme26.png", "imgE/Uniforme27.png",
        "imgE/Uniforme28.png", "imgE/Uniforme29.png", "imgE/Uniforme30.png",
        "imgE/Uniforme31.png", "imgE/Uniforme32.png", "imgE/Uniforme33.png",
        "imgE/Uniforme34.png", "imgE/Uniforme35.png", "imgE/Uniforme36.png",
        "imgE/Uniforme37.png", "imgE/Uniforme38.png", "imgE/Uniforme39.png",
        "imgE/Uniforme40.png", "imgE/Uniforme41.png", "imgE/Uniforme42.png"
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
        "imgE/gafete.png", "imgE/Cuello2.png", "imgE/Cro2.png",
        "imgE/Cuello3.png", "imgE/Cuello1.png", "imgE/Cro.png",
        "imgE/Cro1.png", "imgE/Cuello4.png", "imgE/Cuello5.png",
        "imgE/Cuello6.png", "imgE/Cuello7.png", "imgE/Cuello8.png"
    ],
    tazas: [
        "imgE/taza1.jpg"
    ],
    botellas_tumblers: [
        "imgE/botella1.jpg",
        "imgE/tumbler1.jpg"
    ],
    llaveros: [
        "imgE/Llaveros1.png", "imgE/Llaveros2.png"
    ],
    stickers_Accesorios: [
        "imgE/sticker.png", "imgE/estuche.png", "imgE/Mauspad1.png",
        "imgE/Mauspad.png", "imgE/Mouspad.png"
    ],
    rotulos: [
        "imgE/C_Segura.png", "imgE/Mantel1.png", "imgE/Rotu_Abogados.png",
        "imgE/Rotu_Abogados1.png", "imgE/Mantel2.png", "imgE/C_Monse.png",
        "imgE/C_Monse1.png"
    ],
    actividades: [
        "imgE/Actv_Empresa1.png", "imgE/Actv_Empresa2.png", "imgE/Actv_Empresa3.png",
        "imgE/Actv_Empresa4.png", "imgE/Actv_Empresa5.png"
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