const register = document.getElementById('registerBtn');

register.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Conta criada com sucesso, faça seu login e aproveite!");
    window.location.href = "../login/";
});