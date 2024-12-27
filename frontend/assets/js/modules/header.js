const token = localStorage.getItem('authToken');

const btnCard = `
    <a href="./" id="logoutBtn">
        <div class="btn logout">Logout</div>
    </a>
`;

if (token) {
    document.getElementById('buttons-header').innerHTML = btnCard;

    const logoutBtn = document.getElementById('logoutBtn');

    // Adicionar o event listener ao botão
    logoutBtn.addEventListener('click', (event) => {
        event.preventDefault(); 
        localStorage.clear();
        window.location.href = './'; 
    });
}

document.getElementById("logoutBtn").addEventListener("click", );