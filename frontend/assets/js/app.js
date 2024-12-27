// Events
const events = [
    { id: 1, name: "Réveillon Campinas 2025", image: "./assets/images/card-img.png", link: "./event-details/index.html" },
    { id: 2, name: "Festa em Campinas", image: "./assets/images/card-img.png", link: "./event-details/index.html" },
    { id: 3, name: "MB. Labs 2025", image: "./assets/images/card-img.png", link: "./event-details/index.html" }
];

// Buscar eventos dentro do array e renderizar na tela
function forEachEvents (eventsArray, idElement) {
    eventsArray.forEach (event => {
        const eventCard = `
            <div class="col-6">
                <div class="event-card">
                    <div class="card-header">
                        <div class="image">
                            <img src="${event.image}" alt="${event.name}">
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="event-title">
                                <h5>${event.name}</h5>
                            </div>
                            <a href="${event.link + '?id=' + event.id}">
                                <div class="btn details">Ver detalhes</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;
        document.getElementById(idElement).innerHTML += eventCard;
    });
}

forEachEvents(events, "all-events");

/* */

/* Search Events */ 
function renderEvents(searchedEvents, searchValue) {
    const resultMessage = document.getElementById("result-search-message");

    // Verificação inicial, se searchValue estiver vazio, esconde o code da mensagem
    if (searchValue) {
        document.getElementById("search-term").textContent = searchValue; // alterando qualquer texto de search term
        resultMessage.style.display = "block";
    } else {
        resultMessage.style.display = "none";
        return;
    }

    const resultSearchEvents = document.getElementById("result-search-events");

    if (searchedEvents.length === 0) {
        if (searchValue) {
            resultSearchEvents.innerHTML = "<p>Nenhum evento encontrado.</p>";
        }
        return; // finalizando a função se nenhum evento for encontrado
    }

    resultSearchEvents.innerHTML = ""; // fix para limpar os eventos anteriores

    forEachEvents(searchedEvents, "result-search-events");

}

function searchEvents() {
    const searchValue = document.getElementById("search-input").value.toLowerCase();

    // Criando um array somente com os eventos que contém o termo de busca
    const searchedEvents = events.filter(event => 
        event.name.toLowerCase().includes(searchValue)
    );

    // chamando função para renderizar o evento que o usuário está buscando
    renderEvents(searchedEvents, searchValue);
}

/* */

// Chamando a função somente ao clicar no botão
document.getElementById("search-button").addEventListener("click", searchEvents);

renderEvents([], '');
