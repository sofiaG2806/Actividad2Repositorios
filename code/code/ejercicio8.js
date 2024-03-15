console.log("Calcular el promedio de tres (3) números ingresados por teclado.");
console.log("Ingresar la base");


// Suponiendo que estás utilizando Node.js para entrada por teclado
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Ingresa el primer número: ', (numero1) => {
    readline.question('Ingresa el segundo número: ', (numero2) => {
      readline.question('Ingresa el tercer número: ', (numero3) => {
        const promedio = (parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3)) / 3; // Fórmula para calcular el promedio
        console.log(`El promedio de los tres números es: ${promedio}`);
        readline.close();
      });
    });
  });
  