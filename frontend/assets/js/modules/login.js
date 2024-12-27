const login = document.getElementById('loginBtn');

login.addEventListener("click", (event) => {
  event.preventDefault(); 

  const token = '12iohfeiowhiofhewi21'; 

  localStorage.setItem('authToken', token); 
  alert("Usuário autenticado com sucesso!");
  window.location.href = "../"; 
});