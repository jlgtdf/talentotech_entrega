let arrayProductos=[] 
const crearHTML = (item) => {
        const html = `
            <article data-id="${item.id}">
            <div class="card">
            
                <img src="./Images/${item.imagen}" alt="${item.descripcion}">
                <h3>${item.nombre}</h3>
                <p>${item.descripcion}</p>
                <p id="f_precio">$ ${item.precio}</p>
                <button type="button" class="agregar">Agregar</button>
                 <a href="./carrito.html"><i class="bi bi-cart"></i></a>
            </div>
            </article>
    `
  return html;
  };
 
  const mostrarProductos = async () => {
//    let arrayProductos=[] 
    try {
      const response = await  fetch('./js/productos.json');
      // console.log(response);
      //const arrayProductos = await response.json();
      // le saque el const
      arrayProductos = await response.json();
      console.log(arrayProductos);
    
      // busca en dom elemento con la clase listado-productos
      const listadoProductos = document.querySelector(".listado-productos"); 

      listadoProductos.innerHTML = "";

      arrayProductos.forEach((item) => {

        const elementos = crearHTML(item);
        // console.log(elementos); 
        listadoProductos.innerHTML += elementos; 

      });
    } catch (error) {
      console.error(error);
    }
  };


  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
   console.log(carrito);
  //mostrarProductos();
  //let arrayProductos=[] 
  // Escucho todos los eventos click el documento
  document.addEventListener("click", (event) => {
  // Si el elemento donde se hizo click contiene la clase 'agregar'
  if (event.target.classList.contains("agregar")) {
    // Busco el contenedor mas cercano que se un 'article'
    // Obtengo el id del atributo data-id
    const id = event.target.closest("article").dataset.id;

    const index = carrito.findIndex((item) => item.id == id);

    if (index == -1) {
      // Busco el elemento 'producto' dentro del array producto que tenga el 'id'
      console.log(arrayProductos)
      const elemento = arrayProductos.find((producto) => producto.id == id);
      console.log(elemento);
      console.log(arrayProductos[2]);
  
      // Uso destructuring para creo las constante con los valores del Objeto
      const { nombre, precio } = elemento;

      // Creo el objeto producto para insertar en el carrito
      const producto = {
        id: id,
        nombre: nombre,
        precio: precio,
        cantidad: 1,
      };

      // let { cantidad } = producto;
      // console.log(cantidad);

      carrito.push(producto);
    } else {
      const producto = carrito[index];
      producto.cantidad++;
    }

    // Guardo en el localStorage el array carrito en formato JSON
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
});

mostrarProductos()