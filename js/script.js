//calculos

//datas
//const checkout = document.getElementById(validationTooltip03); // Data de hoje
//const checkin = document.getElementById(validationTooltip02); // Outra data no passado
//const diff = Math.abs(checkout.getTime() - checkin.getTime()); // Subtrai uma data pela outra
//const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

// Mostra a diferença em dias
//console.log( days + ' dias');

//localização 
//let local = document.getElementById(validationTooltip01);

//numero de hospedes
//const hospedes = document.getElementById(validationTooltip01);


//api mapa
//var mapa = L.mapa('mapa').setView([51.505, -0.09], 13);

//L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(mapa);

//L.marker([51.5, -0.09]).addTo(mapa)
//    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//    .openPopup();


//api cards
const apiUrl = "https://dry-cliffs-94979.herokuapp.com/";
const cardsContainer = document.querySelector("#cards");
let data = [];

    
//render card
async function fetchCards() {
    const r = await fetch(apiUrl);
    return await r.json();
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
<div class="card">
    <img src="${card.photo}" class="card-img-top" alt="${card.name}"/>
    <div class="card-body">
        <p id="tipo-prop" class="card-text badge badge-info">${card.property_type}</p>
        <h5 id="nome-prop" class="card-title">${card.name}</h5>
        <p id="valor" class="card-text">Valor da diária: R$${card.price},00</p>
        <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#exampleModal" >
            <i class="fas fa-plus"></i>               
        </button>
    </div>
</div>

`;
cardsContainer.appendChild(div);
}

//calculo valor hospedagem
//function renderModal() {
//    let preco = data[card.price];
//    let valorFinal = days * preco;
//    div.innerHTML = `

//        `;
//    }

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
//} ();








