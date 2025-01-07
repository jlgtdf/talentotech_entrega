const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.querySelector("#nombre");
  const apellido = document.querySelector("#apellido");
  console.log(nombre.value.length);

  if (nombre.value.length < 4) {
    nombre.style.border = "1px solid red";
    
    const errorNombre = document.querySelector("#error-nombre");
   
    errorNombre.textContent = "El nombre tiene que tener 3 caracteres o mas";
   
  }
  if (apellido.value.length < 4) {
    apellido.style.border = "1px solid red";
    const errorApellido = document.querySelector("#error-apellido");
    errorApellido.textContent = "El apellido tiene que tener 3 caracteres o mas";
  }
});