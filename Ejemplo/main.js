// TIPOS DE DATOS

let nombre = "Juan" // String/ char
let edad = 18 // Numero, INT, FLOAT (numeros con decimales)
let esMayor = true // BOOLEAN -> acepta TRUE, FALSE

// OBJETO
let Persona = {
    // nombre:valor
    nombre:"Juan",
    edad: 5,
    esMayor: false,
    tieneMascota: true,
    // Vector/Array -> PERMITEN AGREGAR MUCHOS VALORES DEL MISMO TIPO A UNA VARIABLE
    frutasFav: ["manzana", "uvas", "peras"],
    equiposFav: ["River", "Boca", "Barcelona FC"]
}

// Las posiciones empiezan desde 0
var productos = ["manzana", "uvas", "peras", "tomate", "rabano", "uvas verdes"]

// Variable Constante
const PI = 3.14
// tipoof -> VERIFICA EL VALOR DE UNA VARIABLE 
console.log("El tipo de dato de la variable frutasFav es: " + typeof(productos))

console.log("El se llama " + Persona.nombre + " tiene " + Persona.edad + " años")
// length -> permite ver el numero de elementos
console.log("La variable productos tiene " + productos.length + " elementos")
console.log("El producto 5 es: " + productos[4])

// SUMA RESTA MULTIPLICACION Y DIVISION
let num1 = 3
let num2 = 23
let num3 = 9

// suma entre num1 y num3
let suma = num1 + num3
console.log("La suma de " + num1 + " + " + num3 + " = " +  suma)




// resta entre num2 y num3
let resta = num1 - num3
console.log("La resta de " + num1 + " - " + num3 + " = " +  resta)

// multiplicacion entre num1 y num3
let multiplicacion = num1 * num3
console.log("La multiplicacion de " + num1 + " * " + num3 + " = " +  multiplicacion)

// division entre num1 y num3
let division = num1 / num3
console.log("La division de " + num1 + " / " + num3 + " = " +  division)

// resto entre num1 y num3
let resto = num1 % num3
console.log("El resto de la division de " + num1 + " / " + num3 + " = " +  resto)



// console.log("Hola mundo")

// console.log("ahre")


// Pide datos directamente al usuario
// let numero1 = prompt("Ingrese numero uno: ");
// let numero2 = prompt("Ingrese numero dos: ");


// console.log("Numero 1: " + numero1 + " Numero 2: " + numero2)


// if else
// switch
// for
// do while
// while 

// let Persona = {
//     // nombre:valor
//     nombre:"Juan",
//     edad: 5,
//     esMayor: false,
//     tieneMascota: true,
//     // Vector/Array -> PERMITEN AGREGAR MUCHOS VALORES DEL MISMO TIPO A UNA VARIABLE
//     frutasFav: ["manzana", "uvas", "peras"],
//     equiposFav: ["River", "Boca", "Barcelona FC"]
// }

if (Persona.edad>=18 && Persona.nombre == "Juan" ){
    console.log("El usuario " + Persona.nombre + " es mayor de edad, tiene " + Persona.edad + " años")
} else {
    console.log("El usuario " + Persona.nombre + " NO es mayor de edad, tiene " + Persona.edad + " años")
}

// let edadUser = prompt("Ingrese su edad:");

// if (Persona.edad>=18){
//     console.log("El usuario es mayor de edad, tiene " + edadUser + " años")
// } else {
//     console.log("El usuario NO es mayor de edad, tiene "  + edadUser + " años")
// }


// Cual es tu fruta favorita
// Las opciones son: Manzana, Banana, Uvas, Peras

console.log("Cual es tu fruta favorita")
console.log("Las opciones son: Manzana, Banana, Uvas, Peras");
 

// let frutaFavorita = prompt("Cual es tu fruta favorita? Elige las siguientes o agrega una: Manzana, Banana, Uvas, Peras")

let frutaFavorita = "Manzana"

switch(frutaFavorita){
    case 'Manzana':
    console.log("También me gustan las manzanas");
    break;
    case 'Banana':
    console.log("Son exquisitas!!");
    break;
    case 'Uvas':
    console.log("Me gustan las uvas moradas :)");
    break;
    case 'Peras':
    console.log("Me gusta mucho el jugo de pera");
    break;
    default:
        console.log("No la tuve en cuenta, es muy buena opcion!");
    break;
}


// Forma abreviada de escribir sumas o restas
let numero5 = 5

 let resultado = numero5 + 10
 numero5 += 10

 console.log(numero5);

 numero5 -= 9

 console.log(numero5);


let Libro = {
    genero: "fantasia",
    anio: 2005,
    cantidadPag: 350,
    autor: "desconocido",
    pais: "Argentina"    
}

console.log(Libro)

// Modifica una propiedad
Libro.pais = "Uruguay"
console.log(Libro)

// Agregar una propiedad
Libro.titulo = "El pais de nunca jamas"
console.log(Libro)


// Borrar una propiedad
delete Libro.autor
console.log(Libro);

// Muestra lista de las propiedades del objeto
let otro = Object.keys(Libro)
console.log(otro);


// Convierte en array las propiedades del objeto
console.log(Object.entries(Libro))

// ----------------------------------------

