'use strict';
//Programación secuencial o Estructurada

//ECM6 LET Y CONST (variables y constantes)
// VAR => constantes ponian en mayusculas

let nombrePersona; //declaración de la variables
nombrePersona = "Paola"; // asigne un valor
nombrePersona = "Carlos"; //varian en el tiempo le puede reasignar valor

console.log(nombrePersona); //es para que nos muestre en consola lo que esta haciedo

const apellidos = "Hernández"; //constantes se mantienen en el tiempo

console.log(apellidos);

let edad = 26;

//ecm6 
console.log(`Hola, me llamo ${nombrePersona} ${apellidos}  y tengo ${edad} años`);
console.log("Hola, me llamo " + nombrePersona  + "" +  apellidos  + ' y tengo ' + edad + " años");


//tipos de datos
let married = false; //tipo de dato boolenao
let children = null; //nada o 0
let ocupation = undefined; //no definido


//Array, Arreglos
let months = ["Enero", "Febrero", "Marzo", "Abril",
 { numeroDias: 20, 
diaFavorito: "Lunes"  }];
let days = new Array("lunes", "Martes", "miercoles");


console.log(months);
console.log(months[4]);
console.log(months.length);

//Objetos
let persona = 
{
    nombre: "Paola",
    apellido: "Hernández",
    edad: 26
}
console.log(persona.nombre);


//Invocar funciones

let number = 20;

//estructura hacemos referencia a la función
//por medio de la palabra reservada function, seguido definimos el nombre
//de la funcion, (parámetros), el método return
function multiplicar (x) {
    //devuelvame lo siguiente
    return x * x;  
    
}


let resultado = multiplicar(5)*number;
console.log(resultado);

//Función anonima
//declaro una constante como yo la quiera llamar a esa constante la 
// igualo a una función
const sum = function (x, y){
    return x + y;
}

console.log(sum(4,5));


//EMC 6 FUNCIONES fLECHA
// las funciones tipo flecha son anonimas
//en vez de usar la palabra reservada function usamos una =>, después de definir los 
//parámetros
const multi = (a,b) => {
    return a * b;
}

console.log(multi(3,8));










