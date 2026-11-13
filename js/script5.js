let totalAcumulado = 0;

function agregarAlCarrito(nombreProducto, precio) {
  const cuerpoTabla = document.getElementById("lista-carrito");
  const celdaTotal = document.getElementById("total-carrito");

  const nuevaFila = document.createElement("tr");

  const celdaNombre = document.createElement("td");
  celdaNombre.textContent = nombreProducto;

  const celdaPrecio = document.createElement("td");
  celdaPrecio.textContent = precio.toFixed(2) + " Bs.";

  nuevaFila.appendChild(celdaNombre);
  nuevaFila.appendChild(celdaPrecio);
  cuerpoTabla.appendChild(nuevaFila);

  totalAcumulado += precio;
  celdaTotal.textContent = totalAcumulado.toFixed(2) + " Bs.";
}

function vaciarCarrito() {
  document.getElementById("lista-carrito").innerHTML = "";
  totalAcumulado = 0;
  document.getElementById("total-carrito").textContent = "0.00 Bs.";
}