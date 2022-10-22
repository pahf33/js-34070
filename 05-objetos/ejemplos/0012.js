class Plato {
  constructor(nombre, descripcion, precio, estaDisponible, descuento) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.estaDisponible = estaDisponible;
    this.descuento = descuento;
  }

  aplicarPromocion(cantidad) {
    if (cantidad > 2) {
      return parseInt(this.precio * cantidad * this.descuento);
    } else {
      return parseInt(this.precio * cantidad);
    }
  }
}

for (let index = 0; index < 2; index++) {
  const nombre = prompt("Ingrese nombre del plato");
  const descripcion = prompt("Ingrese descripcion del plato");
  const precio = parseInt(prompt("Ingrese precio del plato"));
  const estaDisponible = parseInt(prompt("Ingrese estaDisponible del plato"));
  const descuento = parseFloat(prompt("Ingrese descuento del plato"));

  const newPlato = new Plato(
    nombre,
    descripcion,
    precio,
    estaDisponible,
    descuento
  );
  console.log(newPlato);
}
