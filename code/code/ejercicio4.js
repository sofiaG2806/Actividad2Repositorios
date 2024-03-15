console.log("Escribir un algoritmo que convierta de euros a dólares.");
console.log("Ingresar la base");

function convertirEurosADolares(euros) {
    const tasaDeCambio = 1.13; 
    const dolares = euros * tasaDeCambio;
    return dolares;
  }
  
  const eurosIngresados = 100; 
  const resultadoEnDolares = convertirEurosADolares(eurosIngresados);
  console.log(`${eurosIngresados} euros equivalen a ${resultadoEnDolares} dólares.`);