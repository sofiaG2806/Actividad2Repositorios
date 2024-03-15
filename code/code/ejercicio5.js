console.log("Escribir un algoritmo que pida el lado de un cuadrado y muestre el valor del área y del perimetro");
console.log("Ingresar la base");

function calcularArea(lado) {
    const area = lado * lado;
    return area;
  }
  
  function calcularPerimetro(lado) {
    const perimetro = lado * 4;
    return perimetro;
  }
  
  const ladoDelCuadrado = 8; 
  const areaDelCuadrado = calcularArea(ladoDelCuadrado);
  const perimetroDelCuadrado = calcularPerimetro(ladoDelCuadrado);
  
  console.log(`El área del cuadrado es: ${areaDelCuadrado}`);
  console.log(`El perímetro del cuadrado es: ${perimetroDelCuadrado}`);