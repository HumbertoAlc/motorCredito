function calculoMotor(tipoNomina, fechaPrimerEmpleo, genero) {
  // Obtener la fecha actual
  var fechaActual = new Date();

  // Calcular el tiempo transcurrido desde la fecha de primer empleo hasta la fecha actual en años
  var tiempoTranscurrido = (fechaActual - fechaPrimerEmpleo) / (1000 * 60 * 60 * 24 * 365);

  // Calcular el monto mínimo y máximo de crédito basado en el tipo de nómina y el género
  var montoMinimo, montoMaximo;
  if (tipoNomina === 'A' && genero === 'M') {
    montoMinimo = 5000;
    montoMaximo = 10000;
  } else if (tipoNomina === 'A' && genero === 'F') {
    montoMinimo = 4000;
    montoMaximo = 8000;
  } else if (tipoNomina === 'B' && genero === 'M') {
    montoMinimo = 3000;
    montoMaximo = 6000;
  } else if (tipoNomina === 'B' && genero === 'F') {
    montoMinimo = 2000;
    montoMaximo = 5000;
  } else {
    // Tipo de nómina o género no válido, asignar montos mínimos y máximos por defecto
    montoMinimo = 0;
    montoMaximo = 0;
  }

  // Calcular la recomendación óptima de línea de crédito basada en el tiempo transcurrido
  var recomendacionLinea;
  if (tiempoTranscurrido >= 5) {
    recomendacionLinea = 'Alta';
  } else if (tiempoTranscurrido >= 3) {
    recomendacionLinea = 'Media';
  } else {
    recomendacionLinea = 'Baja';
  }

  // Crear y retornar el objeto con los atributos solicitados
  var resultado = {
    montoMinimo: montoMinimo,
    montoMaximo: montoMaximo,
    recomendacionLinea: recomendacionLinea
  };

  return resultado;
}

console.log(calculoMotor('A', '15-01-2019', 'M'));
