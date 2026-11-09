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
        "imgF/Graduaciones17.png","imgF/Graduacion16.png", "imgF/graduaciones15.png",
        "imgF/Graduaciones1.png", "imgF/Graduaciones2.png", "imgF/Graduaciones3.png",
        "imgF/Graduaciones4.png", "imgF/Graduaciones5.png", "imgF/Graduaciones6.png",
        "imgF/Graduaciones7.png", "imgF/Graduaciones8.png", "imgF/Graduaciones9.png",
        "imgF/Graduaciones10.png", "imgF/Graduaciones11.png", "imgF/Graduaciones12.png",
        "imgF/Graduaciones13.png", "imgF/Graduaciones14.png"
    ],
    babyshower: [
        "imgF/baby1.png", "imgF/baby2.png", "imgF/baby3.png",
        "imgF/baby4.png", "imgF/baby5.png", "imgF/baby6.png",
        "imgF/baby7.png", "imgF/baby8.png", "imgF/baby9.png",
        "imgF/baby10.png", "imgF/baby11.png", "imgF/baby12.png",
        "imgF/baby13.png"
    ],
    aniversarios: [
        "imgF/Aniversarios1.png", "imgF/Aniversarios2.png", "imgF/Aniversarios3.png",
        "imgF/Aniversarios4.png"
    ],
    conciertos: [
        "imgF/conciertos1.png", "imgF/conciertos2.png", "imgF/conciertos3.png",
        "imgF/conciertos4.png"
    ],
    festividades: [
        "imgF/festividades1.png", "imgF/festividades2.png", "imgF/festividades3.png",
        "imgF/festividades4.png", "imgF/festividades5.png"
    ],
    eventos: [
        "imgF/evento1.png", "imgF/evento2.png", "imgF/evento3.png",
        "imgF/evento4.png", "imgF/evento5.png", "imgF/evento6.png",
        "imgF/evento7.png", "imgF/evento8.png", "imgF/evento9.png",
        "imgF/evento10.png", "imgF/Evento11.png", "imgF/Evento12.png",
        "imgF/evento13.png", "imgF/evento14.png", "imgF/evento15.png",
        "imgF/evento16.png", "imgF/eventos17.png", "imgF/eventos18.png",
        "imgF/evento19.png"
    ],
    reuniones: [
        "imgF/reuniones1.png", "imgF/reuniones2.png", "imgF/reuniones3.png",
        "imgF/reuniones4.png", "imgF/reuniones5.png", "imgF/reuniones6.png",
        "imgF/reuniones7.png", "imgF/reuniones8.png", "imgF/reuniones9.png",
        "imgF/reuniones10.png"
    ],
    reconocimientos: [
        "imgF/Reconocimientos1.png", "imgF/Reconocimientos2.jpg", "imgF/Reconocimientos3.png",
        "imgF/Reconocimientos4.png", "imgF/Reconocimientos5.png", "imgF/Reconocimientos6.png",
        "imgF/Reconocimientos7.png", "imgF/Reconocimientos8.png", "imgF/Reconocimientos9.png",
        "imgF/Reconocimientos10.png"
    ],
    despedidas: [
        "imgF/Despedidas1.png", "imgF/despedidas2.png", "imgF/Despedidas3.png",
        "imgF/Despedidas4.png"
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