//calculos


//api mapa
//var mapa = L.mapa('mapa').setView([51.505, -0.09], 13);

//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(mapa);

//L.marker([51.5, -0.09]).addTo(mapa)
//    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//    .openPopup();


//api cards
const apiUrl = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
const cardsContainer = document.querySelector("#cards");
let data = [];

    
//render card
async function fetchCards() {
    return await fetch(apiUrl)
        .then(async (r) --> await r.json())
    //let response =  await fetch(apiUrl)
    //return await response.json()
}

function renderCards(cards) {
cardsContainer.innerHTML = "";
cards.map(renderCard);
}

function renderCard(card) {
const div = document.createElement("div");
div.style.width = "20rem";
div.style.margin = "2rem";
div.className = "card";
div.innerHTML = `
<img src="${card.photo}" class="card-img-top" alt="${card.name}"/>
<div class="card-body">
    <p id="tipo-prop" class="card-text">Tipo: ${card.property_type}</p>
    <h5 class="card-title">${card.name}</h5>
    <p id="valor" class="card-text">Valor da diária: R$${card.price},00</p>
    <i class="far fa-star"></i>
    <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal" >
        <i class="fas fa-plus"></i>               
    </button>
</div>

`;
cardsContainer.appendChild(div);
}


async function main() {
    data = await fetchCards();
    if(data) {
        renderCards(data);
}
}

main();


//validação
//function validaInput(form) {
//    'use strict';
//    window.addEventListener('load', function(form) {
//        var forms = document.getElementsByClassName('needs-validation');
//        var validation = Array.prototype.filter.call(forms, function(form) {
//        form.addEventListener('button', function(event) {
//            if (form.checkValidity() === false) {
//            event.preventDefault();
//            event.stopPropagation();
//            }
//            form.classList.add('was-validated');
//        }, false);
//        });
//    }, false);
//}








