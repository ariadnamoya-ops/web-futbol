// Botón de la portada: muestra un mensaje al pulsarlo
var boton = document.getElementById("btn-saludo");
var mensaje = document.getElementById("mensaje");

if (boton && mensaje) {
  boton.addEventListener("click", function () {
    mensaje.textContent = "¡Empieza el partido! Bienvenida a La Liga.";
  });
}
