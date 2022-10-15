// Crear un programa que imprima los números pares desde 0 hasta un número ingresado por el usuario.
const numero = parseInt(prompt("Ingrese el numero"));

for (let index = 0; index < numero; index++) {
  if (index % 2 == 0) {
    console.log(index);
  }
}
