const links = document.querySelectorAll('.btn.event');

links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Ingresso adicionado ao carrinho, conclua sua compra!");
        window.location.href = "../checkout/";
    });
});