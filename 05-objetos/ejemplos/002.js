const plato = {
  nombre: "Pollo",
  descripcion: "Viene con papas a la francesa",
  precio: 50,
  estaDisponible: true,
  aplicarPromocion: function (cantidad) {
    if (cantidad > 5) {
      return parseInt(this.precio * cantidad * 0.8);
    } else {
      return parseInt(this.precio * cantidad);
    }
  },
};

const platoCarne = {
  nombre: "Carne",
  descripcion: "Viene con ensalada",
  precio: 40,
  estaDisponible: true,
  aplicarPromocion: function (cantidad) {
    if (cantidad > 10) {
      return parseInt(this.precio * cantidad * 0.7);
    } else {
      return parseInt(this.precio * cantidad);
    }
  },
};

const cantidad = parseInt(prompt("Ingrese cantidad"));
const total = plato.aplicarPromocion(cantidad);
const totalCarne = platoCarne.aplicarPromocion(cantidad);
console.log(total);
