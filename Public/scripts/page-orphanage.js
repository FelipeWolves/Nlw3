const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


// Create Map
const map = L.map('mapid', options).setView([-23.5841847, -46.6516358], 16);

// Create and Add titleLayer bottom
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// Create Icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})




// Create and Add Marker on Map
L.marker([-23.5841847, -46.6516358, { icon }]).addTo(map)

/* image Gallery */

function selectImage(event) {
    const button = event.currentTarget

    // andar e remover todas as classes .actives
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })
    // Selecionar a imagem clicada
    const image = button.children[0]
    const imageConainer = document.querySelector(".orphanage-details > img")
    // Atualizar o container de img
    imageConainer.src = image.src
    // Adicionar a classe .active para o unico botao clicado
}