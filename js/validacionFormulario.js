const inputEmail = document.getElementById('email');

inputEmail.addEventListener('blur', () => {
  const email = inputEmail.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    alert('Por favor, ingresa una dirección de correo electrónico válida.');
  }
});