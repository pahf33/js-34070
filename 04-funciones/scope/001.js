let miVariableGlobal = 5;

{
  let miVariableGlobal = 10;
  console.log("en llaves: ", miVariableGlobal);
}

function imprimirMiVariable() {
  let miVariableGlobal = 15;
  console.log("en funcion: ", miVariableGlobal);
}

imprimirMiVariable();

if (true) {
  let miVariableGlobal = 20;
  console.log("en if: ", miVariableGlobal);
}

console.log("afuera", miVariableGlobal);
