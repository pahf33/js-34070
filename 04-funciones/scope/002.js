let miVariableGlobal = 5;
{
  miVariableGlobal = 10;
  console.log("en llaves: ", miVariableGlobal);
}

function imprimirMiVariable() {
  const miVariableGlobal = 15;
  console.log("en funcion: ", miVariableGlobal);
}

imprimirMiVariable();

if (true) {
  const miVariableGlobal = 20;
  console.log("en if: ", miVariableGlobal);
}

console.log("afuera", miVariableGlobal);
