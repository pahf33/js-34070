const precioPollo = 5;
const precioCarne = 4;
const precioPescado = 6;

const precioCerveza = 3;
const precioJugo = 2;
const precioGaseosa = 1;

let flag; // variable para indicar si quiere pedir otro plato
const pollo = "Pollo"; // variable para mostrar cómo usar template literals para insertar variables en texto (linea 21)
const jugo = "Jugo"; // variable para mostrar cómo usar la concatenación para insertar variables en texto (linea 54)

let total = 0; // variable que almacena el total de la factura
let opcionErrorPlato = false; // variable que me indica si la persona coloca una opción diferente a la mostrada en el menú de platos
let opcionErrorBebida = false; // variable que me indica si la persona coloca una opción diferente a la mostrada en el menú de bebidas

do {
  let platoAComprar; // variable para saber qué plato quiero comprar
  if (!opcionErrorBebida) {
    platoAComprar = prompt(`Ingrese la opcion del plato que quiere comprar
          1. ${pollo}
          2. Carne
          3. Pescado
          4. Nada
          `);

    switch (platoAComprar) {
      case "1":
        total = total + precioPollo;
        break;
      case "2":
        total = total + precioCarne;
        break;
      case "3":
        total = total + precioPescado;
        break;
      case "4":
        break;
      default:
        opcionErrorPlato = true;
        break;
    }
    if (opcionErrorPlato) {
      alert("Ingrese una opción valida");
      opcionErrorPlato = false;
      flag = "Y";
      continue;
    }
  } else {
    opcionErrorBebida = false;
  }
  const bebidaAComprar = prompt(
    "Ingrese la opcion de la bebida que quiere comprar \n1. Cerveza \n2." +
      jugo +
      " \n3. Gaseosa \n4. Nada"
  );
  switch (bebidaAComprar) {
    case "1":
      total = total + precioCerveza;
      break;
    case "2":
      total = total + precioJugo;
      break;
    case "3":
      total = total + precioGaseosa;
      break;
    case "4":
      break;
    default:
      opcionErrorBebida = true;
      break;
  }
  if (opcionErrorBebida) {
    alert("Ingrese una opción valida");
    flag = "Y";
    continue;
  }

  if (platoAComprar == 4 && bebidaAComprar == 4) {
    break;
  }
  flag = prompt("Quiere pedir otro plato? Y/N"); // hace falta validar que solo se pueda ingresar Y o N
  console.log("flag ", flag);
} while (flag == "Y");

console.log("Total ", total);
