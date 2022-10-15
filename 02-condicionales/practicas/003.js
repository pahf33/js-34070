// Crear un programa que me diga cuál es la cantidad de bebidas que puedo comprar para el tipo de producto ingresado.

const producto = prompt(
  "Ingrese el número para comprar la bebida respectiva.\n 1. Agua\n 2. Jugo\n 3. Cerveza\n 4. Vino\n 5. Vodka"
);

const dinero = parseInt(prompt("Ingrese el dinero que tiene"));

const precioAgua = 2;
const precioJugo = 4;
const precioCerveza = 5;
const precioVino = 10;
const precioVodka = 20;

const miProducto = parseInt(producto);
console.log("puedo comprar ...");
if (miProducto == 1) {
  console.log(parseInt(dinero / precioAgua).toString(), " aguas");
} else if (miProducto == 2) {
  console.log(`${parseInt(dinero / precioJugo)} jugos`);
} else if (miProducto == 3) {
  console.log(parseInt(dinero / precioCerveza).toString(), " cervezas");
} else if (miProducto == 4) {
  console.log(parseInt(dinero / precioVino).toString(), " vinos");
} else if (miProducto == 5) {
  console.log(parseInt(dinero / precioVodka).toString(), " vodkas");
} else {
  console.log("no se ingresó una opcion adecuada");
}
