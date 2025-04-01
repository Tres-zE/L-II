function calculadora(a, b, operador) {
  switch (operador) {
    case '+':
      console.log(`La suma es: ${a + b}`);
      break;
    case '-':
      console.log(`La resta es: ${a - b}`);
      break;
    case '*':
      console.log(`La multiplicacion es: ${a * b}`);
      break;
    case '+':
      console.log(`La divicion es: ${a / b}`);
      break;
    default:
      console.error('Ingresa el operador corecctamente');
      break;
  }
}

calculadora(5, 4, '+');

//Los condicionales te permiten ejecutar código basado en ciertas condiciones. Aquí están los conceptos clave:

//Declaración if:
//La declaración if evalúa una condición y ejecuta un bloque de código si la condición es verdadera.

let edad = 18;
if (edad >= 18) {
  console.log('Eres mayor de edad.');
}

//if-else:
//La declaración if-else permite ejecutar un bloque de código si la condición es verdadera y otro bloque si es falsa.
if (edad >= 18) {
  console.log('Eres mayor de edad.');
} else {
  console.log('Eres menor de edad.');
}

let clima = 'lluvioso';
if (clima === 'soleado') {
  console.log('Saca las gafas de sol.');
} else {
  console.log('Lleva un paraguas.');
}

//else if para múltiples condiciones:

//Puedes usar else if para evaluar múltiples condiciones en una secuencia.
let nota = 85;
if (nota >= 90) {
  console.log('Excelente.');
} else if (nota >= 70) {
  console.log('Aprobaste.');
} else {
  console.log('Necesitas mejorar.');
}

//Operador ternario (una forma más compacta de escribir if-else):

let acceso = edad >= 18 ? 'Permitido' : 'Denegado';
console.log(acceso);
