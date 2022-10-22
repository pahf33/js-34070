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

for (let index = 0; index < 100; index++) {
  const plato = new Plato(
    "Carne" + index,
    "Viene con ensalada",
    index,
    true,
    0.8
  );
  console.log(plato.nombre + " " + plato.precio);
}
