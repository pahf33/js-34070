const platoPollo = {
  nombre: "Pollo",
  descripcion: "Viene con papas a la francesa",
  precio: 30,
  estaDisponible: false,
};

if (platoPollo.estaDisponible) {
  console.log("Sí tenemos pollo.");
} else {
  console.log("En el momento no tenemos pollo.");
}
platoPollo.precio = 100;

if (platoPollo["precio"] < 50) {
  console.log("Hoy tenemos descuento en el precio del pollo.");
}
