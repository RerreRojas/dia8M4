const cambiarOrdenFecha = (fecha) => {
  return fecha.split("/").reverse().join("-");
};

// Ejemplo de uso
const fechaOriginal = "2024/05/20";
const fechaNueva = cambiarOrdenFecha(fechaOriginal);

console.log(fechaNueva); // "2023-12-25"
