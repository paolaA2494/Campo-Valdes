//Programación orientada a Obejtos
'use strict';

//plantillas

class Pizza {
    //método constructor definimos nuestros atributos
    constructor(masa, tamano, ingredientes){
       //atributos
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
    console.log(`La pizza esta en el horno..`);
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


class Combos extends Pizza {
    
   constructor(combo, cantidad, masa, tamano, ingredientes, bebida, postre){
      super(masa, tamano, ingredientes);
      this.combo = combo;
      this.cantidad = cantidad;
      this.bebida = bebida;
      this.postre = postre;

   }
   
   elegirCombo(){
      this.preparar();
      this.hornear();
      this.empacar();

      console.log(`Pedido: Combo ${this.combo} - ${this.cantidad}
      Pizza ${this.tamano}, ${this.masa}, ${this.ingredientes} + ${this.bebida} 
      +${this.postre}
       `);
      
       return this;
   }

}

const miPedido = new Combos("Familiar", 2,"Grande", "Gruesa",
["Jamón", "Queso", "Pasta de tomate"],"Coca-cola","Rollitos de Canela" );


console.log(miPedido.elegirCombo());

