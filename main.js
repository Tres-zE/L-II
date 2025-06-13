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

// 1. Declarando una variable numérica (entero)
let años = 30;
console.log('Mi edad es:', años); // Salida: Mi edad es: 30

// 2. Declarando una variable numérica (flotante)
let precio = 19.99;
console.log('El precio del producto es:', precio); // Salida: El precio del producto es: 19.99

// 3. Declarando una variable de cadena de texto
let nombre = 'Juan Pérez';
console.log('El nombre es:', nombre); // Salida: El nombre es: Juan Pérez

// 4. Declarando una variable booleana
let estaActivo = true;
console.log('¿Está activo el usuario?', estaActivo); // Salida: ¿Está activo el usuario? true

// Podemos cambiar el valor de una variable
edad = 31;
console.log('Ahora mi edad es:', edad); // Salida: Ahora mi edad es: 31

// Y también podemos combinar variables en el texto
let mensaje = 'Hola, mi nombre es ' + nombre + ' y tengo ' + edad + ' años.';
console.log(mensaje); // Salida: Hola, mi nombre es Juan Pérez y tengo 31 años.

//Reto
let ciudad = 'Madrid';
let temperatura = 25.7;
let esVerano = true;
console.log(
  `En la ciudad de ${ciudad}, la temperatura es de ${temperatura}°C y ¿es verano? ${esVerano}.`
);

// Operadores aritméticos en JavaScript
// Los operadores aritméticos son utilizados para realizar cálculos matemáticos básicos.
//Estos son los que ya conoces de matemáticas: suma (+), resta (-), multiplicación (*), división (/).
//También tenemos el módulo (%), que te da el resto de una división. Por ejemplo, 10 % 3 es 1 porque 10 dividido por 3 es 3 con un resto de 1.
// Es muy útil para saber si un número es par o impar.
let num1 = 10;
let num2 = 3;

console.log('Suma:', num1 + num2); // Salida: Suma: 13
console.log('Resta:', num1 - num2); // Salida: Resta: 7
console.log('Multiplicación:', num1 * num2); // Salida: Multiplicación: 30
console.log('División:', num1 / num2); // Salida: División: 3.3333...
console.log('Módulo:', num1 % num2); // Salida: Módulo: 1 (el resto de 10 / 3)

let total = (5 + 3) * 2; // También respetan el orden de las operaciones (paréntesis)
console.log('Total calculado:', total); // Salida: Total calculado: 16

//Operadores de Asignación:

// Ya usaste el operador de asignación principal: el signo igual (=). Sirve para asignar un valor a una variable (ej: let x = 5;).
// Pero también existen operadores de asignación combinados que son atajos:
// += (sumar y asignar): x += 5; es lo mismo que x = x + 5;
// -= (restar y asignar): x -= 2; es lo mismo que x = x - 2;
// *= (multiplicar y asignar)
// = (dividir y asignar)
// %= (módulo y asignar)

let contador = 0;
contador += 5; // contador ahora es 5
console.log('Contador después de +=:', contador); // Salida: Contador después de +=: 5

contador -= 2; // contador ahora es 3
console.log('Contador después de -=:', contador); // Salida: Contador después de -=: 3

//Operadores de Comparación:

//Estos operadores se usan para comparar dos valores y siempre devuelven un valor booleano (true o false). Son la base para tomar decisiones en tu código.
// == (igualdad): Compara si dos valores son iguales (puede ignorar el tipo de dato). Evita usarlo.
// === (igualdad estricta): Compara si dos valores son iguales y del mismo tipo. ¡Siempre usa este para comparar igualdad!
// != (desigualdad): Compara si dos valores son diferentes (puede ignorar el tipo).
// !== (desigualdad estricta): Compara si dos valores son diferentes o de diferente tipo. ¡Siempre usa este para comparar desigualdad!
// > (mayor que)
// < (menor que)
// >= (mayor o igual que)
// <= (menor o igual que)

let a = 10;
let b = 5;
let textoNum = '10';

console.log('a === b:', a === b); // Salida: a === b: false
console.log('a === textoNum:', a === textoNum); // Salida: a === textoNum: false (diferente tipo)
console.log('a == textoNum:', a == textoNum); // Salida: a == textoNum: true (solo compara el valor)
console.log('a > b:', a > b); // Salida: a > b: true
console.log('a <= b:', a <= b); // Salida: a <= b: false

//Reto
let base = 7;
let altura = 4;

let areaRectangulo = base * altura;
console.log(`El área del rectángulo es: ${areaRectangulo}`); // Salida: El área del rectángulo es: 28

let saldo = 1000;
saldo -= 250;
console.log(`El saldo restante es: ${saldo}`); // Salida: El saldo restante es: 750

let edadUsuario = 20;
let edadMinima = 18;
console.log(`¿El usuario es mayor de edad? ${edadUsuario >= edadMinima}`); // Salida: ¿El usuario es mayor de edad? true

let numero = 15;
console.log(`¿El número ${numero} es par? ${numero % 2 === 0}`); // Salida: ¿El número 15 es par? false
