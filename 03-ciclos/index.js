// imprimit console log solo cuando i equivale a 55
for (let i = 0; i < 1000; i++) {
  if (i == 55) {
    console.log(i);
  }
}

// iterar de 10 en 10 hasta 1000
for (let i = 0; i < 1000; i = i + 10) {
  // i += 10
  console.log(i);
}

// tablas de multiplicar
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
  let resultado = ingresarNumero * i;
  alert(ingresarNumero + " X " + i + " = " + resultado);
}

// comenzando a iterar desde un valor distinto de cero
for (let i = 10; i <= 50; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  //Si la variable i es igual 5 interrumpo el for.
  if (i == 5) {
    break;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  //Si la variable i es igual 5 me salto la iteración.
  if (i == 5) {
    continue;
  }
  console.log(i);
}
