console.log("Escribir un algoritmo que determine el área y el volúmen de un cilindro");
console.log("Ingresar la base");

function calcularAreaCilindro(radio, altura) {
    const areaBase = Math.PI * Math.pow(radio, 2); // Área de la base del cilindro
    const areaLateral = 2 * Math.PI * radio * altura; // Área lateral del cilindro
    const areaTotal = 2 * areaBase + areaLateral; // Área total del cilindro
    return areaTotal;
  }
  
  function calcularVolumenCilindro(radio, altura) {
    const volumen = Math.PI * Math.pow(radio, 2) * altura; // Volumen del cilindro
    return volumen;
  }
  
  const radioCilindro = 3; // Ingresa el radio del cilindro
  const alturaCilindro = 5; // Ingresa la altura del cilindro
  
  const areaDelCilindro = calcularAreaCilindro(radioCilindro, alturaCilindro);
  const volumenDelCilindro = calcularVolumenCilindro(radioCilindro, alturaCilindro);
  
  console.log(`El área del cilindro es: ${areaDelCilindro}`);
  console.log(`El volumen del cilindro es: ${volumenDelCilindro}`);
  

  