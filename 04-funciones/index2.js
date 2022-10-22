function calcularSuma(a, b, c) {
  if (c < 0) {
    return a + b - c;
  } else {
    return a + b + c;
  }
}

const suma1 = calcularSuma(1, 3, -5);
const suma2 = calcularSuma(1, 2, -6);
console.log(suma1 * suma2);

// function CalcularValorProductos(precio1, precio2, precio3) {
//   return precio1 + precio2 + precio3;
// }

let credito = parseInt(prompt("ingrese el monto de credito"));
let meses = parseInt(prompt("ingrese la cantidad de cuotas"));

cuotas();
cantidadCuotas();

function intereses() {
  let interes = 27;

  let inteMen = interes / 12 / 100;

  console.log("el interes es " + interes + "%");

  return inteMen;
}

function cuotas() {
  let cuotaInt = (credito * (1 + intereses() * meses)) / meses;

  console.log("su cuota es " + cuotaInt.toFixed(2));
}

function cantidadCuotas() {
  for (let i = ``; i <= meses; i++) {
    console.log("cuotas nro: " + i);

    cuotas();
  }
}
