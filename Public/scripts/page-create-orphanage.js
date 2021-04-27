// Create Map
const map = L.map('mapid').setView([-23.5841847, -46.6516358], 16);

// Create and Add titleLayer bottom
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// Create Icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})


// const Create PopUp Overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das Crianças <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>')


// Create and add marker
let marker;


map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remover icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
})


// Add phoos field
function addPhotoField() {
    // Pegar container de fotos #images
    const container = document.querySelector('#images')
    // Pegar o container para duplicar.new-image
    const newImage = document.querySelectorAll('.new-upload')
    //Realizar o clone da ultima imagem adicionada
    const cloneNewField = newImage[newImage.length - 1].cloneNode(true)

    //Verificar se esta vaziu antes de cloncar ou limpar
    const input = cloneNewField.children[0]

    if (input.value == "") {
        return
    }
    input.value = ""
    //Limpar o campos antes de adicionar um novo
    cloneNewField.children[0].value = ""

    // Adicionar o clone ao container de imagens(#images)
    container.appendChild(cloneNewField)
}

function deleteField(event){
    const span = event.currentTarget

    const newImage = document.querySelectorAll('.new-upload')

    if (newImage.length <= 1) {
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove();
}

//Selecionar Sim ou Não
function toggleSelect(event) {
    // retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button').forEach(button =>
        button.classList.remove('active') //Uma linha arrow function nao precisa de {} nem ()
    )


    //Colocar a class .active no botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    
    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value

}