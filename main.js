
// Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes':
console.log("Javascript Review exercices March 6th");

const ordenador = {
    marca: "Asus",
    tipo: "portátil",
    perifericos: { 
        touchpad: true,
        mouse: false,
        bluetooth: true, 
    },
    almacenamiento: {
        discos: ["SSD", "ABC", "XYZ"]
    },
    procesador: {
        velocidad: "2.5 GHz"
    }
}
console.log("TEST 1");

if (typeof ordenador === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }


console.log("TEST 2")
  if (ordenador.marca === "Asus") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  console.log("TEST 3")
  if (ordenador.tipo === "portátil") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  console.log("TEST 4")
  if (ordenador.perifericos.touchpad === true) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
  console.log("TEST 5")
  if (ordenador.almacenamiento.discos[0] === "SSD") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
 
console.log("TEST 6")
  if (ordenador.procesador.velocidad === "2.5 GHz") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }



console.log("Ejercicios Bucles");
 
// Imprimir los números del 21 al 34 en la consola.

for (let i = 21; i <= 34; i++) {
    console.log(i);
    
}

// Sumar los números del 1 al 10 y mostrar el resultado en la consola.


let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;  
}
console.log(sum);


// Dado un array de números, imprimir en la consola la suma de todos los números.

let example = [10, 20, 30, 40, 100];

console.log(example.reduce((acc, value) => { return acc + value}));



// Dado un número, encontrar su factorial.

const number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
   factorial *= i;   
}

console.log(factorial);

// Dado un array de números, imprimir en la consola solo los números impares.

const example2 = [1,2,3,4,5,6,7,8,9,10];

example2.forEach((value) => {
    if (value % 2 === 1) {
        console.log(value);
    }
})



// Dado un array de objetos con propiedades "nombre" y "edad", imprimir en la consola solo los nombres de las personas mayores de 18 años.

const myObject = [{name: "Al", age: 14}, {name: "Ed", age: 19 }, {name: "Joe", age: 29}];

for (const person of myObject) {
    if (person.age> 18)
    console.log(person.name + ", " + person.age);
    
}




// Dado un número, imprimir en la consola si es primo o no.

const numberito = 29;
let isItPrime;

if (numberito === 0) {
    isItPrime = false;
} else {
    for (let i = 2; i < numberito; i++) {
        if (numberito % i === 0){
        isItPrime = false;
        break;      
       } else {
        isItPrime = true;
       }
    }
}

console.log(isItPrime);



//THE SAME BUT IN FUNCTION

// function checkPrime(no) {
//     if (no === 0) {
//         return false;
//     }
//     for (let i = 2; i < no; i++) {
//          if (no % i === 0){
//          return false;     
//         }  
//     }
// return true;   
   
// }
// console.log(checkPrime(239));


// Utiliza la siguiente array para resolver los próximos ejercicios:

console.log("Ejercicios Animales");

let animales = [
  {
    nombre: "León",
    especie: "Felino",
    edad: 6,
  },
  {
    nombre: "Cebra",
    especie: "Herbívoro",
    edad: 4,
  },
  {
    nombre: "Tigre",
    especie: "Felino",
    edad: 3,
  },
  {
    nombre: "Elefante",
    especie: "Herbívoro",
    edad: 8,
  },
  {
    nombre: "Jirafa",
    especie: "Herbívoro",
    edad: 5,
  },
  {
    nombre: "Oso",
    especie: "Omnívoro",
    edad: 2,
  },
  {
    nombre: "Pingüino",
    especie: "Ave",
    edad: 1,
  },
];

// Crea un array con los animales que son felinos y mayores de 4 años. No utilices el método filter de las arrays y muéstralo por consola.

for (const animal of animales) {
    if (animal.especie === "Felino" && animal.edad > 4) {
        console.log(animal);
    }    
}


// Crea un array con los animales que son herbívoros y tienen una edad par. No utilices el método filter de las arrays y muéstralo por consola.

const herbivores = [];
for (const animal of animales) {
    if(animal.especie === "Herbívoro" && animal.edad % 2 === 0) {
        herbivores.push(animal);
    }
}
console.log(herbivores);


// Crea un array con los animales que son omnívoros o aves y menores de 3 años. No utilices el método filter de las arrays y muéstralo por consola.

const aves = [];
for (const animal of animales) {
    if(animal.especie === "Ave" && animal.edad < 3) {
        aves.push(animal);
    }
}
console.log(aves);


// Crea un array con los animales que su especie empieza por "H". No utilices el método filter de las arrays y muéstralo por consola.

const firstLetterH= [];
for (const animal of animales) {
    if(animal["especie"][0] === "H") {
        firstLetterH.push(animal);
    }
}
console.log(firstLetterH);


// Crea un array con los animales cuyo nombre tenga más de 4 letras y su especie sea felino o herbívoro. No utilices el método filter de las arrays y muéstralo por consola.


const mix = [];
for (const animal of animales) {
    if((animal.especie === "Felino" || animal.especie === "Herbívoro") && animal.nombre.length > 4) {
        mix.push(animal);     //Must put first two conditions in extra brackets!!
    }
}
console.log(mix);



console.log("Ejercicios Funciones");
// Ejercicios Funciones

// Crea una función llamada eliminarDuplicados(array) que reciba como parámetro un array de elementos y devuelva un nuevo array con los elementos únicos, es decir, sin elementos duplicados. Puedes utilizar un ciclo for...of para recorrer el array original.
// //salida
// eliminarDuplicados([1, 2, 3, 3, 4, 5, 5, 6]); // Devuelve [1, 2, 3, 4, 5, 6]
// eliminarDuplicados(["hola", "adios", "hola", "hasta", "luego"]); // Devuelve ["hola", "adios", "hasta", "luego"]



function eliminateDuplicates(array) {
    let uniqueArray = [];
    for (const item of array) {
        if(!uniqueArray.includes(item)) {  
            uniqueArray.push(item);
        }
    }
return uniqueArray;
}



// Crea una función llamada sumarElementos(array) que reciba como parámetro un array de números y devuelva la suma de todos sus elementos. Puedes utilizar un ciclo for...of para recorrer el array y sumar sus elementos.
// sumarElementos([1, 2, 3, 4, 5]); // Devuelve 15
// sumarElementos([-5, 10, -15, 20]); // Devuelve 10

function sumOfElements(array) {
  let sum = 0;
  for (const number of array) {
    sum += number;
  }
  return sum;
}

console.log(sumOfElements([-5, 10, -15, 20]));



// Crea una función en contarCaracteres(array) que reciba como parámetro un array de cadenas de caracteres y devuelva la cantidad total de caracteres que hay en todas las cadenas juntas. Puedes utilizar un ciclo for...of para recorrer el array y contar los caracteres.
// contarCaracteres(["Hola", "Mundo"]); // Devuelve 8
// contarCaracteres(["JavaScript", "es", "genial"]); // Devuelve 17

function countCharacters(array) {   //THIS ONLY WORKS IF THERE ARE NO SPACES!
  let sum = 0;
  for (const word of array) {
    sum += word.length;
    
  }
return sum;
}

console.log(countCharacters(["JavaScript", "es", "genial"]));




//   Crea una función llamada numeroMasGrande(array) que reciba como parámetro un array de números y devuelva el número más grande de ese array. Puedes utilizar un ciclo for...of para recorrer el array y condicionales para encontrar el número más grande.
// numeroMasGrande([1, 2, 3, 4, 5]); // Devuelve 5
// numeroMasGrande([10, -5, 20, -15]); // Devuelve 20

function largestNumber(array){
  let largest = number;
  for (const number of array) {
    if (number > largest) {
      largest = number;
    } 
  }
  return largest;
}

console.log(largestNumber([10, -5, 20, -15]));

// Crea una función llamada cadenaMasLarga(array) que reciba como parámetro un array de cadenas de caracteres y devuelva la cadena más larga de ese array. Puedes utilizar un ciclo for...of para recorrer el array y condicionales para encontrar la cadena más larga.

// cadenaMasLarga(["Hola", "Mundo"]); // Devuelve "Mundo"
// cadenaMasLarga(["JavaScript", "es", "genial"]); // Devuelve "JavaScript"


function longestString(array){
  let str = "";
  for (const word of array) {
    if (word.length > str.length) str = word;
  }
  return `The longest string is "${str}" with a length of ${str.length} characters.`
}

console.log(longestString(["JavaScript", "es", "genial"]));

