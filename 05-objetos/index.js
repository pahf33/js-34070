const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" };
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log("nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log("origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in persona1) {
  console.log("propiedad ", propiedad);
  console.log("valor", persona1[propiedad]);
}
