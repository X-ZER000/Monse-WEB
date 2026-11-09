// ==========================================
// DATOS DEL PORTAFOLIO DE FESTIVIDADES Y ACTIVIDADES
// ==========================================

// 1. Imágenes para el Carrusel Principal Superior (Apuntando a imgF/)
const carouselFestImages = [
    "imgF/Destacado1.png", "imgF/destacado2.png", "imgF/destacado3.png",
    "imgF/Destacado4.png", "imgF/destacado5.png", "imgF/destacado6.png",
    "imgF/destacado7.png"
];

// 2. Datos e imágenes para cada subcategoría (Apuntando a imgF/)
const festividadesData = {
    cumpleanos: [
        "imgF/Cumpleaños1.png", "imgF/Cumpleaños2.png", "imgF/Cumpleaños3.png",
        "imgF/Cumpleaños4.png", "imgF/Cumpleaños5.png", "imgF/Cumpleaños6.png", 
        "imgF/Cumpleaños7.png", "imgF/Cumpleaños8.png", "imgF/Cumpleaños9.png",
        "imgF/Cumpleaños10.png"
    ],
    graduaciones: [
        "imgF/Graduaciones17.png","imgF/Graduacion16.png", "imgF/Graduaciones15.png",
        "imgF/Graduaciones1.png", "imgF/Graduaciones2.png", "imgF/Graduaciones3.png",
        "imgF/Graduaciones4.png", "imgF/Graduaciones5.png", "imgF/Graduaciones6.png",
        "imgF/Graduaciones7.png", "imgF/Graduaciones8.png", "imgF/Graduaciones9.png",
        "imgF/Graduaciones10.png", "imgF/Graduaciones11.png", "imgF/Graduaciones12.png",
        "imgF/Graduaciones13.png", "imgF/Graduaciones14.png"
    ],
    babyshower: [
        "imgF/baby1.jpg"
    ],
    aniversarios: [
        "imgF/aniv1.jpg"
    ],
    conciertos: [
        "imgF/concierto1.jpg"
    ],
    festividades: [
        "imgF/fest1.jpg"
    ],
    eventos: [
        "imgF/evento1.jpg"
    ],
    reuniones: [
        "imgF/reunion1.jpg"
    ],
    reconocimientos: [
        "imgF/reconocimiento1.jpg"
    ],
    despedidas: [
        "imgF/despedida1.jpg"
    ],
    otros: [
        "imgF/otro1.jpg"
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

    container.innerHTML = carouselFestImages.map((img, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${img}" class="d-block w-100 object-fit-cover" style="height: 380px; cursor: pointer;" alt="Destacado Festividad ${index + 1}" onclick="openLightbox('${img}')">
        </div>
    `).join('');
}

// Renderizar todas las categorías dinámicamente
function renderAllCategories() {
    for (const [key, images] of Object.entries(festividadesData)) {
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