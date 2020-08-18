'use strict';

class Pizza {
    //método constructor definimos nuestros atributos
    constructor(masa, tamano, ingredientes){
        //asignar el parametro
        this.masa = masa;
        this.tamano = tamano;
        this.ingredientes = ingredientes;

    }

   //creación metodos
   preparar(){
      console.log(`Preparando la pizza ${this.tamano},
      ${this.masa}, los ingredientes: ${this.ingredientes}`);
      return this;
   }

   hornear(){
    console.log(`La pizza esta en el honor...`);
    return this;
 }

 empacar(){
    console.log(`Empacando la Pizza...`);
    console.log(`Pizza esta lista :)`);
    return this;
 }

}

//vamos a instanciar varios objetos a partir de la misma clase

const pizzaHawaina = new Pizza
("Delgada","Pequeña",["Queso", "Piña", "Jamón", "Pasta Tomate"]);

console.log(pizzaHawaina.preparar());
console.log(pizzaHawaina.hornear());
console.log(pizzaHawaina.empacar());


//si crearamos otro objeto que sea una pizza de diferente sabor

const pizzaPolloChampinones = new Pizza
("Gruesa con borde de queso","Grande",["Queso", "Pollo", "Champiñones"]);

console.log(pizzaPolloChampinones.preparar());
console.log(pizzaPolloChampinones.hornear());
console.log(pizzaPolloChampinones.empacar());

