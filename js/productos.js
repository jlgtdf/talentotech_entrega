const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    descripcion: "descripcion producto 1",
    imagen: "imagen-1.jpg",
    precio: 10,
    stock: 10,
  },
  {
    id: 2,
    nombre: "Producto 2",
    descripcion: "descripcion producto 2",
    imagen: "imagen-2.jpg",
    precio: 20,
    stock: 10,
  },
  {
    id: 3,
    nombre: "Producto 3",
    descripcion: "descripcion producto 3",
    imagen: "imagen-3.jpg",
    precio: 30,
    stock: 30,
  },
  {
    id: 4,
    nombre: "Producto 4",
    descripcion: "descripcion producto 4",
    imagen: "imagen-4.jpg",
    precio: 50000,
    stock: 400,
  },
  {
    id: 5,
    nombre: "Producto 5",
    descripcion: "descripcion producto 5",
    imagen: "imagen-5.jpg",
    precio: 40000,
    stock: 500,
  },
  {
    id: 6,
    nombre: "Producto 6",
    descripcion: "descripcion producto 6",
    imagen: "imagen-6.jpg",
    precio: 450,
    stock: 300,
  },
];


const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const listadoProductos = document.querySelector(".listado-productos");
listadoProductos.innerHTML ="";
productos.forEach((producto)=>{
const html=`
            <article data-id="${producto.id}">
                <h3>${producto.nombre}</h3>
                <img src="./images/${producto.imagen}" alt="${producto.nombre}">
                <p>${producto.descripcion}</p>
                <p>$${producto.precio}</p>
                <button type="button" class="agregar">agregar</button>
            </article>
`;
listadoProductos.innerHTML += html;
});

document.addEventListener("click", (event)=>{
    
    if (event.target.classList.contains("agregar")){
 const id = event.target.closest("article").dataset.id;
// CODIGO PARA QUE NO SE REPITAN LAS FILAS CON LOS PRODUCTOS SELECCIONADOS , PERO SI LA CANTIDAD VARÍE

const index=carrito.findIndex((item)=>item.id==id);
if (index == -1) {

 const elemento=productos.find((producto)=>producto.id==id);
console.log(elemento);

const {nombre, precio}=elemento;

const producto={
    id:id,
    nombre:nombre,
    precio:precio,
    cantidad:1,
};

carrito.push(producto);
}
else
{
    const producto = carrito[index];
    producto.cantidad++;
}
localStorage.setItem("carrito", JSON.stringify(carrito));

}

});