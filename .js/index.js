//calculos

//datas
const checkout = document.getElementById(validationTooltip03); // Data de hoje
const checkin = document.getElementById(validationTooltip02); // Outra data no passado
const diff = Math.abs(checkout.getTime() - checkin.getTime()); // Subtrai uma data pela outra
const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

// Mostra a diferença em dias
console.log( days + ' dias');

//localização 
let local = document.getElementById(validationTooltip01);

//numero de hospedes
const hospedes = document.getElementById(validationTooltip01);









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
        .then(async (r) => await r.json())
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

//calculo valor hospedagem
function renderModal() {
let preco = data[card.price];
let valorFinal = days * preco;
div.innerHTML = `
    <div class="modal-content">  
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${card.name}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div id="mapa" name"map">
            <style>
                #mapa {
                    height: 100%;
                }
                html, body {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                }
                </style>
        </div>
        <div id="valorTotal" class="modal-text"><p>Total da estadia: R$ ${valorFinal},00</p></div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-outline-info">Reservar</button>
        </div>
    </div>
    `;
}


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
//} ();








