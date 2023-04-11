function calculoMotor(tipoNomina, fechaPrimerEmpleo, genero) {
  // Obtener la fecha actual
  var fechaActual = new Date();

  // Calcular el número de meses desde el primer empleo
  var tiempoTranscurrido = Math.floor((fechaActual - fechaPrimerEmpleo) / (30 * 24 * 60 * 60 * 1000));

    // Definir los montos mínimos y máximos para género masculino y femenino
    var montosMinimos = {
        'masculino': {
          'Nomina A': { min: 5000, max: 20000 },
          'Nomina B': { min: 3000, max: 15000 },
          'Nomina C': { min: 3000, max: 15000 },
          'Nomina D': { min: 3000, max: 15000 }
        },
        'femenino': {
          'Nomina A': { min: 6000, max: 25000 },
          'Nomina B': { min: 3500, max: 16000 },
          'Nomina C': { min: 3000, max: 15000 },
          'Nomina D': { min: 3000, max: 15000 }
        }
      };
    
      // Obtener los montos mínimos y máximos en función del género y tipo de nómina
      var montoMinimo = montosMinimos[genero.toLowerCase()][tipoNomina]['min'];
      var montoMaximo = montosMinimos[genero.toLowerCase()][tipoNomina]['max'];
    
      // Calcular la recomendación de línea de crédito como el promedio del monto mínimo y máximo
      var recomendacionLinea = (montoMinimo + montoMaximo) / 2;
 

 
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

console.log(calculoMotor('Nomina A', '15-01-2019', 'masculino'));
