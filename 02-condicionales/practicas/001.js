// Crear un programa que me diga si a partir del dinero ingresado puedo comprar vino o no.
const dinero = parseInt(prompt("Ingrese el dinero que tiene"));

const precioAgua = 2;
const precioJugo = 4;
const precioCerveza = 5;
const precioVino = 10;
const precioVodka = 20;

if (dinero >= 10) {
  console.log("Puedo comprar vino");
}

// cuántos vinos puedo comprar?

const vinos = parseInt(dinero / precioVino);
console.log("Puedo comprar ", vinos, " vinos");
