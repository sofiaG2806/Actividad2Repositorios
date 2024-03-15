console.log("Realizar un algoritmo que lea el radio de una circunferencia y escriba la longitud de la misma y el área (pi*r)^2 del círculo inscrito");
console.log("Ingresar la base");


function calcularLongitudCircunferencia(radio) {
    const longitud = 2 * Math.PI * radio; // Fórmula para calcular la longitud de la circunferencia
    return longitud;
  }
  
  function calcularAreaCirculoInscrito(radio) {
    const area = Math.PI * Math.pow(radio, 2); // Fórmula para calcular el área del círculo inscrito
    return area;
  }
  
  const radioCircunferencia = 5; // Ingresa el radio de la circunferencia
  
  const longitudCircunferencia = calcularLongitudCircunferencia(radioCircunferencia);
  const areaCirculoInscrito = calcularAreaCirculoInscrito(radioCircunferencia);
  
  console.log(`La longitud de la circunferencia es: ${longitudCircunferencia}`);
  console.log(`El área del círculo inscrito es: ${areaCirculoInscrito}`);
  