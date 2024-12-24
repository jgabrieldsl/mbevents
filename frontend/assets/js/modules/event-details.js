// Alerta de ticket adicionado ao carrinho
const link = document.querySelector('.btn.event');
    
link.addEventListener("click", (event) => {
    alert("Ingresso adicionado ao carrinho, conclua sua compra!");
    window.location.href = "../checkout/";
});