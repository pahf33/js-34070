// Crear un programa que me diga cuál es la bebida de máximo valor que puedo comprar.

const dinero = prompt("Ingrese el dinero que tiene");

const precioAgua = 2;
const precioJugo = 4;
const precioCerveza = 5;
const precioVino = 10;
const precioVodka = 20;

let gastado = 0;
const miDinero = parseInt(dinero);
if (miDinero < 2) {
  console.log("no puedo comprar nada");
} else if (miDinero < 4) {
  console.log("puedo comprar agua");
  gastado = precioAgua;
} else if (miDinero < 5) {
  console.log("puedo comprar jugo");
  gastado = precioJugo;
} else if (miDinero < 10) {
  console.log("puedo comprar cerveza");
  gastado = precioCerveza;
} else if (miDinero < 20) {
  console.log("puedo comprar vino");
  gastado = precioVino;
} else {
  console.log("puedo comprar vodka");
  gastado = precioVodka;
}

// cuánto me sobra? me alcanza para otra bebida? cuál?

const sobra = miDinero - gastado;

if (sobra < 2) {
  console.log("no puedo comprar nada mas");
} else if (sobra < 4) {
  console.log("tambien puedo comprar agua");
} else if (sobra < 5) {
  console.log("tambien puedo comprar jugo");
} else if (sobra < 10) {
  console.log("tambien puedo comprar cerveza");
} else if (sobra < 20) {
  console.log("tambien puedo comprar vino");
} else {
  console.log("tambien puedo comprar vodka");
}
