let unNumero = 100000;

// Con (unNumero == 5) comparamos si unNumero es igual a 5
if (unNumero == 5) {
  console.log("el valor de numero es 5");
} else {
  console.log("el valor de numero no es 5");
}

// Con (unNumero == 6) comparamos si unNumero es igual a 6
// if (unNumero == 6) {
//   console.log("el valor de numero es 6");
// }

let precio = 35;

if (precio < 20) {
  if (precio == 12) {
    alert("El precio es 12");
  } else {
    alert("El precio es menor que 20");
  }
} else if (precio < 50) {
  alert("El precio es menor que 50");
} else if (precio < 100) {
  alert("El precio es menor que 100");
} else {
  alert("El precio es mayor que 100");
}
