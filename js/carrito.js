carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// console.log(carrito);

const items = document.querySelector(".items");

items.innerHTML = "";
//CREO DOS VARIABLES PARA ALMACENAR LA CANTIDAD DE ARTICULOS ADQUIRIDOS Y LA SUMA TOTAL DE LOS MISMOS.
// const totalCantidad=0;
// const sumaTotal=0;

carrito.forEach((item) => {
  const html = `
        <tr data-id="${item.id}">
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>$ ${item.precio}</td>
            <td>$ ${item.cantidad*item.precio}</td>
        </tr>
  
    `;
 //ACUMULO LA CANTIDAD Y LA SUMA DE LOS MONTOS 
//  totalCantidad += item.cantidad;
//  sumaTotal += item.cantidad * item.precio;

  items.innerHTML += html;
 
});

//CREA UNA NUEVA FILA CON 3 CELDAS

// const totales = `
// <tr>    
// <td colspan="2">Total</td>
//     <td>${totalCantidad}</td>
//     <td>$ ${sumaTotal}</td>
//     </tr>
// `;