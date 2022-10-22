//definicion de funcion
function imprimirMensaje() {
  console.log("Este es mi mensaje");
}
// llamar una funcion
for (let index = 0; index < 20; index++) {
  imprimirMensaje();
}

imprimirMensaje();

function imprimirMiMensaje(miMensaje, repeticiones) {
  for (let index = 0; index < repeticiones; index++) {
    console.log("El mensaje es: ", miMensaje);
  }
}

const mensaje = prompt("Escriba su mensaje");
const numero = parseInt(prompt("Escriba su numero"));
imprimirMiMensaje(mensaje, numero);
