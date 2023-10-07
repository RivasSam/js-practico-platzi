// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

// ¿Qué es una variable y para qué sirve?
// es información guardada en un espacio en memoria

// ¿Cuál es la diferencia entre declarar e inicializar una variable?
// al declararla solo se le da un nombre y al inicializarla se le asigna un valor

// ¿Cuál es la diferencia entre sumar números y concatenar strings?
//para sumar números se hace una operación matemática, y concatenar strings es una combinacion de texto y/o numeros

// ¿Cuál operador me permite sumar o concatenar?
// el operador "+"

//2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

// Nombre >>>>>> string
// Apellido >>>>>>> string
// Nombre de usuario en Platzi >>>>>>> string
// Edad >>>>> string
// Correo electrónico >>>>>> string
// Mayor de edad >>>>>>> boolean
// Dinero ahorrado >>>>>>> numero
// Deudas >>>>> numero 

// 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

const miPersona = {
  nombre : "Samuel Andrés",
  apellido : "Rivas Hernández",
  userName : "Rivasher",
  edad : 26,
  email : "robertbbenn@gmail.com",
  mayoriaEdad : true,
  ahorros : 2000,
  deudas : 10,
}


// 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

// Nombre completo (nombre y apellido)
// Dinero real (dinero ahorrado menos deudas)

let nombreCompleto = `${miPersona.nombre} ${miPersona.apellido}`
console.log(nombreCompleto)

let dineroReal = miPersona.ahorros - miPersona.deudas
console.log(dineroReal)

// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
// ¿Qué es una función?
// es un bloque de código reutilizable que cumple con un propósito específico
// ¿Cuándo me sirve usar una función en mi código?
// cuando necesitamos hacer una misma tarea en reiteradas ocasiones

// ¿Cuál es la diferencia entre parámetros y argumentos de una función?
// los parametros son datos que pide una función, los aregumentos son los valores que le pasamos a dicha función

// 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Samuel Andrés";
const lastname = "Rivas Hernández";
const completeName = name + " " + lastname;
const nickname = "Rivasher";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function presentacion (nombre, apellido, nickname) {
  let nombreCompleto = nombre + " " + apellido; 
  console.log(`Mi nombre es ${nombreCompleto}, pero pueden llamarme ${nickname}`)
}

presentacion("Miguel Ulises", "Sanchez Rivas", "Tío Miguel")

// >>>>>>>>>>>>>>>>>>
// CONDICIONALES
// >>>>>>>>>>>>>>>>>>

// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

// ¿Qué es un condicional?

// es una estructura de control que nos permite decidir si cierto código se ejecutará dependiendo de si la condición es false a o verdadera

// ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

// el "if" permite decidir si un bloque de codigo se ejecuta o no, dependiendo de si la condicion es verdadera
//el "else if" permite encadenar varias otras condiciones con el y ejecutar cierto código asignado a dicha condición 
// el "else" que es una clausula de codigo que se ejecutara por defecto si ninguna de las condiciones anteriores se cumple

// el "SWITCH" permite comparar un valor con varios casos en especifico y ejecutar el primero de estos casos que se cumpla

//el operador ternario "?:" permite escribir una condición el codigo que se ejecutara se se cumple y el cdigo que se ejecutará si la función no se cumple


// ¿Puedo combinar funciones y condicionales?

//si se puede

// 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if: 

const tipoDeSuscripcion = "Expert";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
} 

if (tipoDeSuscripcion == "Free") {
  console.log("Solo puedes tomar los cursos gratis")
} else if (tipoDeSuscripcion == "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//>>>>>>>
// CICLOS
//>>>>>>>

// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

// ¿Qué es un ciclo?
// es una estructura de control que nos permite hacer que una bloque de codigo se ejecute un determinado número de veces de mánera automática hasta que una condición se cumpla

// ¿Qué tipos de ciclos existen en JavaScript?
// los ciclos "for", "for of", "while" y "do while"

// ¿Qué es un ciclo infinito y por qué es un problema?
//es un ciclo que que ejecutará el código infinitas veces puesto que su condición nunca se cumple 

// ¿Puedo mezclar ciclos y condicionales?
// si se puede

// 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

// for (let i = 0; i < 5; i++) {
//   console.log("El valor de i es: " + i);
// }

var j = 0
while (j < 5) {
  console.log("el valor de j es " + j)
  j++;
}

// for (let i = 10; i >= 2; i--) {
//   console.log("El valor de i es: " + i);
// }

var k = 10 
while (k >= 2) {
  console.log("el valor de k es " + k);
  k--
}

// 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.


function comprobacion() {
  let repuesta = prompt("Cuanto es 2+2?")
  if (repuesta == 4) {
    alert("felicidades! respuesta correcta")
  } else {
    alert("respuesta equivocada, intente de nuevo para continuar")
    comprobacion()
  } 
}
// comprobacion()

// function testing() {
//   while (true) {
//     let respuesta = prompt("Cuanto es 2+2?");
//     if (parseInt(respuesta) === 4) {
//       alert("¡Felicidades! Respuesta correcta.");
//       break; // Salir del bucle si la respuesta es correcta.
//     } else {
//       alert("Respuesta equivocada, intente de nuevo para continuar.");
//     }
//   }
// }

// // testing()

// >>>>>>
// LISTAS
// >>>>>>

// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
// ¿Qué es un array?
// es una colección de valores guardadas en una sola variable

// ¿Qué es un objeto?
  // es un tipo de dato que contiene dentro de él varias claves asociadas con un valor

// ¿Cuándo es mejor usar objetos o arrays?
  //es mejor utilizar objetos cuando se necesitan asociar valores a las claves para representar un objetos mas complejos y asociar funciones al este para operar sobre sus datos, mientras que cuando no se necesita tanta complejidad y solo buscamos agrupar varios valores un una sola variable podemos usar arrays  

// ¿Puedo mezclar arrays con objetos o incluso objetos con arrays? 
// si

// 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

let arr1 = ["primero", "segundo"] 
let arr2 = [10, 20, 30, 200, 300] 
let arr3 = ["miguel", "luis", "solis"] 

function imprimirPrimerElmento(Array) {
  console.log(Array[0])
}

imprimirPrimerElmento(arr1)

// 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function imprimirUnoPorUno(array) {
  i = 0 
  while (i < array.length) {
    console.log("el elemento en el indice " + i + " del array recibido es " + array[i]);
    i++;
  }
}

imprimirUnoPorUno(arr3)

// 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

function imprimirElementosDelObjeto(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`)
  }
}
imprimirElementosDelObjeto(miPersona)

