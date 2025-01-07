function cargarCarrito() {
  var listaCarrito = document.getElementById('lista-carrito');
  subtotal = 0;
  listaCarrito.innerHTML = '';
  var carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  for (var i = 0; i < carrito.length; i++) {
      var producto = carrito[i];
      var li = document.createElement('li');

      // Mostrar información del producto
      li.textContent = 'Cantidad: ' + producto.cantidad + ' - ' + producto.nombre + ' Precio Unidad- $' + producto.precio + ' Tu subtotal $' + producto.precio * producto.cantidad;

      // Crear botones (menos eficiente, pero más simple)
      var btnAumentar = document.createElement('button');
      btnAumentar.textContent = '+';
      btnAumentar.dataset.index = i; // Usar dataset para guardar el índice
      btnAumentar.onclick = function() {
          var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
          carrito[this.dataset.index].cantidad++;
          localStorage.setItem('carrito', JSON.stringify(carrito));
          cargarCarrito();
      };

      var btnDisminuir = document.createElement('button');
      btnDisminuir.textContent = '-';
      btnDisminuir.dataset.index = i;
      btnDisminuir.onclick = function() {
          var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
          carrito[this.dataset.index].cantidad--;
          if (carrito[this.dataset.index].cantidad < 1) {
              carrito.splice(this.dataset.index, 1);
          }
          localStorage.setItem('carrito', JSON.stringify(carrito));
          cargarCarrito();
      };

      li.appendChild(btnDisminuir);
      li.appendChild(btnAumentar);
      listaCarrito.appendChild(li);
      subtotal += (producto.precio * producto.cantidad);
  }

  const subtotalElement = document.getElementById('subtotal');
  subtotalElement.textContent = `TOTAL: $${subtotal.toFixed(2)}`;
}

let subtotal = 0;
cargarCarrito();

document.getElementById('vaciar-carrito').addEventListener('click', function() {
  localStorage.removeItem('carrito');
  subtotal = 0;
  cargarCarrito();
});