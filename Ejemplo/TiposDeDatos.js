let paises = ["Argentina", "Chile", "Mexico", "Colombia", "Cuba"]

// Muestro el array completo
console.log(paises);

// Muestro el largo de array (cantidad de elementos dentro de el)
console.log(paises.length);

// pop() elimina el ultimo elemento
paises.pop()
console.log(paises);
console.log(paises.length);

// push() agrega el ultimo elemento
paises.push("Uruguay")
console.log(paises);
console.log(paises.length);

// shift() elimina el primer elemento
paises.shift()
console.log(paises);
console.log(paises.length);



// unshift() agrega como primer elemento
paises.unshift("Ecuador")
console.log(paises);
console.log(paises.length);


// Encuentra el indice del elemento buscado
let indiceMx = paises.indexOf("Mexico")
console.log("Mexico se encuentra en el indice: " + indiceMx);


// Includes verifica si contiene o no un elemento true o false

let incluye = paises.includes("Chile")
console.log(incluye);


// Convierte a el array en oracion
let oracion = paises.toString()
console.log(oracion);


// Convierte a el array en oracion y los separa con el elemento que yo le indique
let oracion2 = paises.join(" # ")
console.log(oracion2);

let paisesOrientales = ["China", "Indonesia", "Japon"]

// Une dos o mas array
let unionPaises = paises.concat(paisesOrientales)
console.log(unionPaises);