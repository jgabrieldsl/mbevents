const link = document.querySelector('.btn.event');
    
link.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Ingresso adicionado ao carrinho, conclua sua compra!");
    window.location.href = "../checkout/";
});