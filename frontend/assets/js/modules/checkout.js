function selectPayment(paymentMethod) {
    document.getElementById('cc').style.display = 'none';
    document.getElementById('pix').style.display = 'none';
    if (paymentMethod === 'creditCard') {
        document.getElementById('cc').style.display = 'block';
        document.getElementById('cc').scrollIntoView({ behavior: 'smooth' });
    } else if (paymentMethod === 'pix') {
        document.getElementById('pix').style.display = 'block';
        document.getElementById('pix').scrollIntoView({ behavior: 'smooth' });
    }
}

const cc = document.getElementById('ccBtn');
const pix = document.getElementById('pixBtn');

cc.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Compra realizada com sucesso, vefique seu email!");
    window.location.href = "../";
});

pix.addEventListener("click", (event) => {
    event.preventDefault();
    alert("QrCode Gerado com sucesso, vefique seu email!");
    window.location.href = "../";
});