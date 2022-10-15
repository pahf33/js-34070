// Crear un programa que me permita comprar tres tipos de producto con sus respectivas cantidades. Me debe mostrar el valor total y decir si me alcanza el dinero que tengo.
// aplicar 2 x 1 al comprar agua
const dinero = parseInt(prompt("Ingrese el dinero que tiene"));
const precioAgua = 2;
const precioJugo = 4;
const precioCerveza = 5;
const precioVino = 10;
const precioVodka = 20;
let valorTotal = 0;

let producto = prompt(
  "Ingrese el número para comprar la bebida respectiva.\n 1. Agua\n 2. Jugo\n 3. Cerveza\n 4. Vino\n 5. Vodka"
);

let cantidad = parseInt(prompt("Ingrese la cantidad de productos a comprar"));

let miProducto = parseInt(producto);
if (miProducto == 1) {
  if (cantidad >= 2) {
    if (cantidad % 2 == 0) {
      valorTotal = valorTotal + (precioAgua * cantidad) / 2;
    } else {
      valorTotal = valorTotal + parseInt((precioAgua * cantidad) / 2) + 1;
    }
  } else if (cantidad == 1) {
    valorTotal = valorTotal + precioAgua * cantidad;
  }
} else if (miProducto == 2) {
  valorTotal = valorTotal + precioJugo * cantidad;
} else if (miProducto == 3) {
  valorTotal = valorTotal + precioCerveza * cantidad;
} else if (miProducto == 4) {
  valorTotal = valorTotal + precioVino * cantidad;
} else if (miProducto == 5) {
  valorTotal = valorTotal + precioVodka * cantidad;
} else {
  console.log("no se ingresó una opcion adecuada");
}
producto = prompt(
  "Ingrese el número para comprar la bebida respectiva.\n 1. Agua\n 2. Jugo\n 3. Cerveza\n 4. Vino\n 5. Vodka"
);

cantidad = parseInt(prompt("Ingrese la cantidad de productos a comprar"));

miProducto = parseInt(producto);
console.log("puedo comprar ...");
if (miProducto == 1) {
  if (cantidad >= 2) {
    if (cantidad % 2 == 0) {
      valorTotal = valorTotal + (precioAgua * cantidad) / 2;
    } else {
      valorTotal = valorTotal + parseInt((precioAgua * cantidad) / 2) + 1;
    }
  } else if (cantidad == 1) {
    valorTotal = valorTotal + precioAgua * cantidad;
  }
} else if (miProducto == 2) {
  valorTotal = valorTotal + precioJugo * cantidad;
} else if (miProducto == 3) {
  valorTotal = valorTotal + precioCerveza * cantidad;
} else if (miProducto == 4) {
  valorTotal = valorTotal + precioVino * cantidad;
} else if (miProducto == 5) {
  valorTotal = valorTotal + precioVodka * cantidad;
} else {
  console.log("no se ingresó una opcion adecuada");
}
producto = prompt(
  "Ingrese el número para comprar la bebida respectiva.\n 1. Agua\n 2. Jugo\n 3. Cerveza\n 4. Vino\n 5. Vodka"
);

cantidad = parseInt(prompt("Ingrese la cantidad de productos a comprar"));

miProducto = parseInt(producto);
console.log("puedo comprar ...");
if (miProducto == 1) {
  if (cantidad >= 2) {
    if (cantidad % 2 == 0) {
      valorTotal = valorTotal + (precioAgua * cantidad) / 2;
    } else {
      valorTotal = valorTotal + parseInt((precioAgua * cantidad) / 2) + 1;
    }
  } else if (cantidad == 1) {
    valorTotal = valorTotal + precioAgua * cantidad;
  }
} else if (miProducto == 2) {
  valorTotal = valorTotal + precioJugo * cantidad;
} else if (miProducto == 3) {
  valorTotal = valorTotal + precioCerveza * cantidad;
} else if (miProducto == 4) {
  valorTotal = valorTotal + precioVino * cantidad;
} else if (miProducto == 5) {
  valorTotal = valorTotal + precioVodka * cantidad;
} else {
  console.log("no se ingresó una opcion adecuada");
}

if (valorTotal <= dinero) {
  console.log("nos alcanza");
} else {
  console.log("no sea tacaño");
}

console.log(valorTotal);
