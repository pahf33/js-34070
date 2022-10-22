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
const platoPollo = new Plato(
  "Pollo",
  "Viene con papas a la francesa",
  50,
  true,
  0.75
);

const platoCarne = new Plato("Carne", "Viene con ensalada", 40, true, 0.8);
const platoPasta = new Plato(
  "Pasta",
  "Viene con salsa bolognesa",
  30,
  true,
  0.9
);
const totalPasta = platoPasta.aplicarPromocion(5);
console.log(totalPasta);
const totalCarne = platoCarne.aplicarPromocion(1);
console.log(totalCarne);
const totalPollo = platoPollo.aplicarPromocion(5);
console.log(totalPollo);
console.log(totalPasta + totalCarne + totalPollo);
