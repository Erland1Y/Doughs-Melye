document.body.style.backgroundColor = "#c7a8806e";

var nombre = "Erland";
var edad = 24;
var numero = 64218822;
var latitud = -16.4996351;
var longitud = -68.1324253;

var caja = document.getElementById("info-proveedor");

if (caja) {
  caja.innerHTML = 
    "<div style='color: #333; font-weight: bold; margin-top: 15px;'>" +
      "Proveedor: " + nombre + "<br>" +
      "Edad: " + edad + " años<br>" +
      "Numero: " + numero + "<br><br>" +
      "<iframe src='https://google.com" + latitud + "," + longitud + "&z=16&output=embed' width='100%' height='300' style='border:0; border-radius: 10px;' loading='lazy'></iframe>" +
    "</div>";
}
