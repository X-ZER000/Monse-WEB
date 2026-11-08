// 1. Imágenes del Carrusel Principal
const carouselImages = [
    "imgR/J2.png", "imgR/J4.png", "imgR/J-10.png", "imgR/J-11.png",
    "imgR/J-13.png", "imgR/J1.png", "imgR/J3.png", "imgR/J7.png"
];

// 2. Datos del primer bloque de Textiles / Camisas
const portfolioPart1Data = [
    {
        sectionTitle: "Textiles",
        sectionIcon: "bi-tag-fill",
        subcategories: [
            {
                title: "Camisas",
                images: [
                    "imgR/camisa---34.png", "imgR/camisa---35.png", "imgR/camisa---36.png",
                    "imgR/camisa---38.png", "imgR/camisa---39.png", "imgR/camisa--22.png",
                    "imgR/camisa6.png", "imgR/camisa8.png", "imgR/camisa9.png",
                    "imgR/camisas--20.png", "imgR/camisas3.png", "imgR/camisa---31.png",
                    "imgR/camisa---32.png", "imgR/camisa---33.png", "imgR/camisa--20.png",
                    "imgR/camisa3.png", "imgR/camisa--29.png", "imgR/camisa---30.png", 
                    "imgR/camisa--21.png", "imgR/camisa--24.png", "imgR/camisa--25.png",
                    "imgR/camisa--27.png", "imgR/camisa--28.png", "imgR/camisa-11.png",
                    "imgR/camisa-12.png", "imgR/camisa-13.png", "imgR/camisa-14.png",
                    "imgR/camisa-15.png", "imgR/camisa-16.png", "imgR/camisa-17.png",
                    "imgR/camisa-18.png", "imgR/camisa-19.png", "imgR/camisa1.png"
                ]
            }
        ]
    }
];

// Listas de Gorras y Bolsos
const gorrasImages = [
    "imgR/gorra-10.png", "imgR/gorra-11.png", "imgR/gorra-12.png", "imgR/gorra-13.png",
    "imgR/gorra-14.png", "imgR/gorra-15.png", "imgR/gorra.png", "imgR/gorra1.png",
    "imgR/gorra2.png", "imgR/gorra3.png", "imgR/gorra4.png", "imgR/gorra5.png",
    "imgR/gorra6.png", "imgR/gorra7.png", "imgR/gorra8.png", "imgR/gorra9.png"
];

const bolsosImages = [
    "imgR/bolso.png", "imgR/Bolso1.png", "imgR/carterita1.png", "imgR/Bolso2.png",
    "imgR/Bolso3.png", "imgR/carterita2.png", "imgR/bolso4.png", "imgR/bolso5.png",
    "imgR/carterita3.png", "imgR/bolso6.png"
];

// Lista de Textiles Varios
const textilesVariosImages = [
    "imgR/otro.png", "imgR/otro1.png", "imgR/otro2.png",
    "imgR/otro3.png", "imgR/otro4.png", "imgR/NA.png"
];

// Listas de Tazas
const tazasList1 = [
    "imgR/taza1.png", "imgR/taza2.png", "imgR/taza3.png", "imgR/taza4.png",
    "imgR/tazas5.png", "imgR/taza6.png", "imgR/taza7.png", "imgR/taza8.png",
    "imgR/taza9.png", "imgR/taza10.png", "imgR/taza11.png", "imgR/taza12.png",
    "imgR/taza13.png", "imgR/taza14.png", "imgR/taza15.png", "imgR/taza16.png",
    "imgR/taza17.png", "imgR/taza18.png", "imgR/taza19.png", "imgR/taza20.png",
    "imgR/taza21.png", "imgR/taza22.png", "imgR/taza48.png", "imgR/taza49.png",
    "imgR/taza52.png", "imgR/taza53.png", "imgR/taza56.png", "imgR/taza57.png",
    "imgR/taza58.png", "imgR/taza59.png"
];

const tazasList2 = [
    "imgR/taza23.png", "imgR/taza24.png", "imgR/taza25.png", "imgR/taza26.png",
    "imgR/taza27.png", "imgR/taza28.png", "imgR/taza29.png", "imgR/taza30.png",
    "imgR/taza31.png", "imgR/taza32.png", "imgR/taza33.png", "imgR/taza34.png",
    "imgR/taza35.png", "imgR/taza36.png", "imgR/taza37.png", "imgR/taza39.png",
    "imgR/taza40.png", "imgR/taza41.png", "imgR/taza42.png", "imgR/taza43.png",
    "imgR/taza44.png", "imgR/taza45.png", "imgR/taza46.png", "imgR/taza47.png",
    "imgR/taza50.png", "imgR/taza51.png", "imgR/taza54.png", "imgR/taza55.png",
    "imgR/taza60.png", "imgR/taza61.png"
];

// Listas de Termos y Botellas
const tumblersList1 = [
    "imgR/tumb1.png", "imgR/tumb2.png", "imgR/tumb3.png", "imgR/tumb4.png",
    "imgR/tumb5.png", "imgR/tumb6.png", "imgR/tumb7.png", "imgR/tumb8.png",
    "imgR/tumb9.png", "imgR/tumb10.png", "imgR/tumb11.png", "imgR/tumb12.png",
    "imgR/tumb13.png", "imgR/tumb14.png", "imgR/tumb15.png", "imgR/tumb16.png",
    "imgR/tumb17.png", "imgR/tumb18.png", "imgR/tumb19.png", "imgR/tumb20.png"
];

const tumblersList2 = [
    "imgR/bo1.png", "imgR/bo2.png", "imgR/bo3.png", "imgR/bo4.png",
    "imgR/bo5.png", "imgR/bo6.png", "imgR/bo7.png", "imgR/bo8.png",
    "imgR/bo9.png", "imgR/bo10.png", "imgR/bo11.png", "imgR/bo12.png",
    "imgR/bo13.png", "imgR/bo14.png", "imgR/bo15.png", "imgR/bo16.png",
    "imgR/bo17.png", "imgR/bo18.png", "imgR/bo19.png", "imgR/bo20.png",
    "imgR/bo21.png", "imgR/bo22.png"
];

// Listas de Cocteleras y Otros Recipientes
const coctelerasList = [
    "imgR/coctelera1.png", "imgR/coctelera2.png", "imgR/copas.png", "imgR/copas1.png",
    "imgR/coctelera3.png", "imgR/coctelera4.png", "imgR/coctelera5.png", "imgR/coctelera6.png",
    "imgR/coctelera7.png", "imgR/coctelera8.png", "imgR/coctelera9.png", "imgR/coctelera10.png",
    "imgR/coctelera11.png", "imgR/coctelera12.png", "imgR/coctelera13.png", "imgR/coctelera14.png",
    "imgR/coctelera15.png", "imgR/coctelera16.png", "imgR/coctelera17.png", "imgR/coctelera18.png",
    "imgR/coctelera19.png"
];

const otrosRecipientesList = [
    "imgR/otro7.png", "imgR/otro8.png", "imgR/otro9.png"
];

// Listas de Accesorios
const llaverosList = [
    "imgR/llavero1.png", "imgR/Llavero2.png", "imgR/llavero3.png", "imgR/llavero4.png",
    "imgR/llavero4.png", "imgR/llavero5.png", "imgR/llavero6.png", "imgR/llavero7.png",
    "imgR/llavero8.png", "imgR/llavero9.png", "imgR/llavero10.png", "imgR/llavero-11.png",
    "imgR/llavero-12.png", "imgR/llavero-13.png", "imgR/Llavero-14.png"
];

const pulserasList = [
    "imgR/Pulsera1.png", "imgR/Pulsera2.png", "imgR/Pulsera3.png", "imgR/Pulsera4.png",
    "imgR/Pulsera5.png", "imgR/pulsera6.png", "imgR/pulsera7.png", "imgR/pulsera8.png",
    "imgR/pulsera10.png"
];

// Listas de Collares, Relojes y Rompecabezas
const collaresList = [
    "imgR/collar1.png", "imgR/collar10.png", "imgR/collar2.png", "imgR/collar3.png",
    "imgR/collar4.png", "imgR/collar5.png", "imgR/collar6.png", "imgR/collar7.png",
    "imgR/collar8.png", "imgR/collar9.png"
];

const relojesEspejosList = [
    "imgR/reloj10.png", "imgR/espejo4.png", "imgR/reloj1.png", "imgR/espejo3.png",
    "imgR/reloj2.png", "imgR/espejo2.png", "imgR/reloj3.png", "imgR/espejo1.png",
    "imgR/reloj4.png", "imgR/reloj.png"
];

const rompecabezasList = [
    "imgR/rompe1.png", "imgR/rompe2.png", "imgR/recuadro1.png", "imgR/rompe3.png",
    "imgR/rompe4.png", "imgR/recuadro2.png", "imgR/rompe5.png", "imgR/rompe6.png",
    "imgR/recuadro3.png", "imgR/rompe7.png", "imgR/rompe8.png", "imgR/recuadro4.png"
];

// Listas de Mousepads y Estuches
const mousepadsList = [
    "imgR/Mauspad1.png", "imgR/mauspad2.png", "imgR/mauspad3.png", "imgR/mauspad4.png",
    "imgR/mauspad5.png", "imgR/mauspad6.png", "imgR/mauspad7.png"
];

const estuchesList = [
    "imgR/estuche--24.png", "imgR/estuche--25.png", "imgR/estuche-10.png", "imgR/estuche-11.png",
    "imgR/estuche-12.png", "imgR/estuche-13.png", "imgR/estuche-14.png", "imgR/estuche-15.png",
    "imgR/estuche-16.png", "imgR/estuche-17.png", "imgR/estuche-18.png", "imgR/estuche-19.png",
    "imgR/estuche-20.png", "imgR/estuche-21.png", "imgR/estuche-22.png", "imgR/estuche-23.png",
    "imgR/estuche2.png", "imgR/estuche1.png", "imgR/estuche3.png", "imgR/estuche4.png",
    "imgR/estuche5.png", "imgR/estuche6.png", "imgR/estuche7.png", "imgR/Estuche9.png"
];

// Listas de Almohadas y Bebés
const almohadasList = [
    "imgR/Almuhada--20.png", "imgR/Almuhada--21.png", "imgR/Almuhada--22.png", "imgR/Almuhada-10.png",
    "imgR/Almuhada-11.png", "imgR/Almuhada-12.png", "imgR/Almuhada-15.png", "imgR/Almuhada-16.png",
    "imgR/Almuhada-17.png", "imgR/Almuhada-18.png", "imgR/Almuhada1.png", "imgR/Almuhada2.png",
    "imgR/Almuhada3.png", "imgR/Almuhada5.png", "imgR/Almuhada6.png", "imgR/Almuhada7.png",
    "imgR/Almuhada8.png", "imgR/Almuhada9.png"
];

const bebesList = [
    "imgR/bebe1.png", "imgR/bebe2.png", "imgR/bebe10.png", "imgR/bebe12.png",
    "imgR/bebe13.png", "imgR/bebe14.png", "imgR/bebe3.png", "imgR/bebe4.png",
    "imgR/bebe5.png", "imgR/bebe6.png", "imgR/bebe7.png", "imgR/bebe8.png",
    "imgR/bebe9.png"
];

// Listas de Espinilleras y Placas
const espinillerasList = [
    "imgR/Espi1.png", "imgR/espin2.png", "imgR/espin3.png", "imgR/espin4.png",
    "imgR/espin5.png", "imgR/espin6.png", "imgR/espin7.png", "imgR/espin9.png"
];

const placasList = [
    "imgR/placa--20.png", "imgR/placa--21.png", "imgR/placa--22.png", "imgR/placa--23.png",
    "imgR/placa--24.png", "imgR/placa-10.png", "imgR/placa-11.png", "imgR/placa-12.png",
    "imgR/placa-13.png", "imgR/placa-14.png", "imgR/placa-15.png", "imgR/placa-16.png",
    "imgR/placa-17.png", "imgR/placa-18.png", "imgR/placa-19.png", "imgR/placa1.png",
    "imgR/placa2.png", "imgR/placa3.png", "imgR/placa4.png", "imgR/placa5.png",
    "imgR/placa6.png", "imgR/placa7.png", "imgR/placa8.png", "imgR/placa9.png"
];

// Listas de Mascotas y Artículos Varios
const mascotasList = [
    "imgR/mascotas1.png", "imgR/mascotas2.png", "imgR/mascotas4.png", "imgR/mascotas5.png",
    "imgR/Mascotas6.png", "imgR/mascotas7.png", "imgR/mascotas8.png", "imgR/mascotas9.png",
    "imgR/mascotas10.png", "imgR/Mascotas-11.png", "imgR/Mascotas-12.png"
];

const articulosVariosList = [
    "imgR/Otro10.png", "imgR/otro5.png", "imgR/Otro6.png", "imgR/pin1.png",
    "imgR/paño.png", "imgR/paño1.png", "imgR/paño2.png", "imgR/paño3.png",
    "imgR/paño4.png", "imgR/paño5.png", "imgR/paño6.png"
];

// Lista de Regalos Especiales (Navidad)
const regalosEspecialesList = [
    "imgR/nav-10.png", "imgR/nav1.jpg", "imgR/nav2.png", "imgR/nav3.png",
    "imgR/nav4.png", "imgR/nav5.png", "imgR/nav6.png", "imgR/nav7.png",
    "imgR/nav8.png", "imgR/nav9.png", "imgR/nav11.png", "imgR/nav12.png",
    "imgR/nav13.png"
];


// --- FUNCIONES DE RENDERIZADO ---

function renderCarousel() {
    const container = document.getElementById('carousel-inner-container');
    if (container) {
        container.innerHTML = carouselImages.map((src, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${src}" class="d-block w-100 object-fit-cover" style="height: 380px;" alt="Proyecto Destacado ${index + 1}" loading="lazy">
            </div>
        `).join('');
    }
}

function renderPortfolioPart1() {
    const container = document.getElementById('catalog-container');
    if (container) {
        container.innerHTML = portfolioPart1Data.map(sec => `
            <div class="mb-5">
                <h3 class="border-bottom pb-2 mb-4 text-primary fw-bold">
                    <i class="bi ${sec.sectionIcon} me-2"></i>${sec.sectionTitle}
                </h3>
                ${sec.subcategories.map(sub => `
                    <div class="mb-4">
                        <h5 class="fw-bold mb-3 text-secondary">${sub.title}</h5>
                        <div class="position-relative px-md-4">
                            <button class="btn btn-dark position-absolute start-0 top-50 translate-middle-y z-3 rounded-circle shadow opacity-75 scroll-left-btn" type="button" style="width: 40px; height: 40px;">
                                <i class="bi bi-chevron-left"></i>
                            </button>
                            <div class="d-flex gap-3 overflow-x-auto pb-3 scroll-container" style="scroll-behavior: smooth; scrollbar-width: none;">
                                ${sub.images.map((img, i) => `
                                    <div class="flex-shrink-0" style="width: 200px;">
                                        <div class="card h-100 shadow-sm border-0 overflow-hidden">
                                            <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="${sub.title} ${i + 1}" loading="lazy">
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            <button class="btn btn-dark position-absolute end-0 top-50 translate-middle-y z-3 rounded-circle shadow opacity-75 scroll-right-btn" type="button" style="width: 40px; height: 40px;">
                                <i class="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `).join('');
    }
    initScrollButtons();
}

function renderPortfolioPart2() {
    const gorrasContainer = document.getElementById('gorras-container');
    if (gorrasContainer) {
        gorrasContainer.innerHTML = gorrasImages.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Gorra ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }

    const bolsosContainer = document.getElementById('bolsos-container');
    if (bolsosContainer) {
        bolsosContainer.innerHTML = bolsosImages.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Bolso ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }
    initScrollButtons();
}

function renderTextilesVarios() {
    const container = document.getElementById('textiles-varios-container');
    if (container) {
        container.innerHTML = textilesVariosImages.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Textil Vario ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }
    initScrollButtons();
}

function renderTazas() {
    const container1 = document.getElementById('tazas-container-1');
    const container2 = document.getElementById('tazas-container-2');

    if (container1) {
        container1.innerHTML = tazasList1.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Taza A ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }

    if (container2) {
        container2.innerHTML = tazasList2.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Taza B ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }
    initScrollButtons();
}

function renderTumblers() {
    const container1 = document.getElementById('tumblers-container-1');
    const container2 = document.getElementById('tumblers-container-2');

    if (container1) {
        container1.innerHTML = tumblersList1.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Tumbler ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }

    if (container2) {
        container2.innerHTML = tumblersList2.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Botella ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }
    initScrollButtons();
}

function renderCoctelerasYOtros() {
    const coctelerasContainer = document.getElementById('cocteleras-container');
    const otrosContainer = document.getElementById('otros-recipientes-container');

    if (coctelerasContainer) {
        coctelerasContainer.innerHTML = coctelerasList.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Coctelera/Copa ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }

    if (otrosContainer) {
        otrosContainer.innerHTML = otrosRecipientesList.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Recipiente ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }
    initScrollButtons();
}

function renderAccesorios() {
    const llaverosContainer = document.getElementById('llaveros-container');
    const pulserasContainer = document.getElementById('pulseras-container');

    if (llaverosContainer) {
        llaverosContainer.innerHTML = llaverosList.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Llavero ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }

    if (pulserasContainer) {
        pulserasContainer.innerHTML = pulserasList.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Pulsera ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }
    initScrollButtons();
}

function renderSeccionCollaresYHogar() {
    const collaresContainer = document.getElementById('collares-container');
    const relojesContainer = document.getElementById('relojes-espejos-container');
    const rompecabezasContainer = document.getElementById('rompecabezas-container');

    if (collaresContainer) {
        collaresContainer.innerHTML = collaresList.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Collar ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }

    if (relojesContainer) {
        relojesContainer.innerHTML = relojesEspejosList.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Reloj/Espejo ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }

    if (rompecabezasContainer) {
        rompecabezasContainer.innerHTML = rompecabezasList.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Rompecabezas/Retablo ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }
    initScrollButtons();
}

function renderMousepadsYEstuches() {
    const mousepadContainer = document.getElementById('mousepad-container');
    const estuchesContainer = document.getElementById('estuches-container');

    if (mousepadContainer) {
        mousepadContainer.innerHTML = mousepadsList.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Mousepad ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }

    if (estuchesContainer) {
        estuchesContainer.innerHTML = estuchesList.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Estuche ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }
    initScrollButtons();
}

function renderAlmohadasYBebes() {
    const almohadasContainer = document.getElementById('almohadas-container');
    const bebesContainer = document.getElementById('bebes-container');

    if (almohadasContainer) {
        almohadasContainer.innerHTML = almohadasList.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Almohada ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }

    if (bebesContainer) {
        bebesContainer.innerHTML = bebesList.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Bebé ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }
    initScrollButtons();
}

function renderEspinillerasYPlacas() {
    const espinillerasContainer = document.getElementById('espinilleras-container');
    const placasContainer = document.getElementById('placas-container');

    if (espinillerasContainer) {
        espinillerasContainer.innerHTML = espinillerasList.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Espinillera ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }

    if (placasContainer) {
        placasContainer.innerHTML = placasList.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Placa ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }
    initScrollButtons();
}

function renderMascotasYArticulosVarios() {
    const mascotasContainer = document.getElementById('mascotas-container');
    const articulosContainer = document.getElementById('articulos-varios-container');

    if (mascotasContainer) {
        mascotasContainer.innerHTML = mascotasList.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Mascota ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }

    if (articulosContainer) {
        articulosContainer.innerHTML = articulosVariosList.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Artículo Vario ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }
    initScrollButtons();
}

function renderRegalosEspeciales() {
    const regalosContainer = document.getElementById('regalos-especiales-container');
    if (regalosContainer) {
        regalosContainer.innerHTML = regalosEspecialesList.map((img, i) => `
            <div class="flex-shrink-0" style="width: 200px;">
                <div class="card h-100 shadow-sm border-0 overflow-hidden">
                    <img src="${img}" class="card-img-top object-fit-cover" style="height: 200px;" alt="Regalo Especial ${i + 1}" loading="lazy">
                </div>
            </div>
        `).join('');
    }
    initScrollButtons();
}

function initScrollButtons() {
    document.querySelectorAll('.position-relative').forEach(container => {
        const scrollContainer = container.querySelector('.scroll-container');
        const leftBtn = container.querySelector('.scroll-left-btn');
        const rightBtn = container.querySelector('.scroll-right-btn');

        if (scrollContainer && leftBtn && rightBtn) {
            // Evitamos duplicar event listeners removiendo previos o validando
            leftBtn.onclick = () => scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
            rightBtn.onclick = () => scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
        }
    });
}

// --- DISPARADOR AL CARGAR LA PÁGINA ---
document.addEventListener("DOMContentLoaded", () => {
    renderCarousel();
    renderPortfolioPart1();
    renderPortfolioPart2();
    renderTextilesVarios();
    renderTazas();
    renderTumblers();
    renderCoctelerasYOtros();
    renderAccesorios();
    renderSeccionCollaresYHogar();
    renderMousepadsYEstuches();
    renderAlmohadasYBebes();
    renderEspinillerasYPlacas();
    renderMascotasYArticulosVarios();
    renderRegalosEspeciales();
});