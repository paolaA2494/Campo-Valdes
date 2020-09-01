'use strict';

//Programación funcional
//funciones puras (valores predecibles)

//Function (manera tradicional)
function f (x, y, u) {
    return x * y * u;
};

console.log(f(2, 4, 5));//lo valores que le damos a los parámetros son argumentos
console.log(f(6, 8, 10));

//Funciones anónimas

const sumar = function (a, b){
    return a + b;
}

console.log(sumar(3,4));

//Funciones tipo flecha (anonimas) emc 6

const multiplicar = (w,r) => {
    return w * r;
}
console.log(multiplicar(2,5));
console.log(multiplicar(2,5));
console.log(multiplicar(2,5));
console.log(multiplicar(2,5));

//funciones no son puras (valores mutables)

let totalCompra = 0;

const sumarPrecios = (cant, value) => {
    return totalCompra = totalCompra + (cant*value);
}

console.log(sumarPrecios(1,200));
console.log(sumarPrecios(1,200));
console.log(sumarPrecios(1,200));
console.log(sumarPrecios(1,200));
console.log(sumarPrecios(1,200));


//Composición funcional
// función anónima

const producto = function (numero) {
    return numero * numero;
}

console.log(producto(8));

//tradicional
function suma (numero1, numero2){
    return producto(numero1) + producto(numero2);
}

console.log(suma(3,4));


//Funciones Recursivas
 
function saludar () {
    console.log('Hola Mundo');
    //saludar(); //llamando a la funcion
}

saludar(); //llamando a la funciones

const listaNumeros = [2,4,6,8,10];
const nuevaLista = [];

//console.log(listaNumeros.length); => 5
//metodo map hacer recorrido por todo el arreglo
// funciona igual que for, o que un for loop

/*for (let i = 0; i < listaNumeros.length; i++) {
    console.log(listaNumeros[i]);
    nuevaLista.push(listaNumeros[i]*listaNumeros[i]);
}*/


for(const numero in listaNumeros){
    console.log(listaNumeros[numero]);
    nuevaLista.push(listaNumeros[numero]*listaNumeros[numero]);
}


console.log(nuevaLista);


const duplicar = (lista) => {
    if (lista[0] === 2) {
        return console.log(lista[0]*2);
        
    } else {
        return duplicar([nuevaLista[1]*2]);
    }
};

duplicar(listaNumeros);



