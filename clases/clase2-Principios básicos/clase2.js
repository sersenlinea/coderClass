function mostrar(){
    let saludo="Hola buen día";
    return saludo;
}
console.log(mostrar());

const suma =function(a,b){
    return a+b
}
console.log(suma(8,4));

function mostrarSaludo(nombre){
    return function(){
        //instrucciones 
        return "Hola, " + nombre
    }
}
console.log(mostrarSaludo(12));
(function(){ console.log('estamos dentro de una iife');})();

let nombresHoy= ["Martin", "Jose", "Carlos"]
function mostrartLista(Lista){
    if(Lista == null){
        console.log(`lista vacia`);
    } else{
        Lista.forEach(element => {
            console.log(element);
        });
    }
}

mostrartLista(nombresHoy);

(function (...args) {
    if (args.length > 0) {
      args.forEach((el) => console.log(el));
    } else {
      console.log("Lista Vacia");
    }
  })(1,2,3);
  
  function crearMultiplicador(num) {
    return function (...args) {
      args.forEach((el) => console.log(num * el));
    };
  }
  
  const duplica = crearMultiplicador(2);
  const triplica = crearMultiplicador(3);
  
  duplica(1, 2, 2, 2, 3);
  triplica(10, 10, 20);

  class Juego{
      static cant_jugadores=0;
      static enemigos=19;
      constructor(vidas,traje,nivel,puntos,coins,energia){
        this.vidas=vidas;
        this.traje=traje;
        this.nivel=nivel;
        this.puntos=puntos;
        Juego.cant_jugadores++;
        this.coins=coins;
        this.energia=energia;
        this.armas=[];
      }

      atacar(){
        energia--;
      }

  }
  console.log(Juego.cant_jugadores);
  let jugador1 = new Juego(3,'rojo',0,0,0,100);
  console.log(Juego.cant_jugadores);

class Contador{
    static contGlobal=0;
    constructor(nombre_responsable){
        this.nombre_responsable=nombre_responsable;
        this.cuent_indiv=0;
        Contador.incrementar_global();
    }
    static incrementar_global(){
        Contador.contGlobal++;
    }
    incrementar_ind(){
        this.cuent_indiv++;
    }
    static mostrarGlobal(){
        return Contador.contGlobal;
    }
    optenerCuentInd(){
        return this.cuent_indiv;
    }
    optenerResponsable(){
        return this.nombre_responsable
    }
} 

let rrhh = new Contador("Julian");
rrhh.incrementar_ind();
rrhh.incrementar_ind();
rrhh.incrementar_ind();
rrhh.incrementar_ind();
console.log(`El reponsable es: ${rrhh.optenerResponsable()} y tiene la cuenta individual en : ${rrhh.optenerCuentInd()}`); 
let it = new Contador("Pablo");
it.incrementar_ind();
it.incrementar_ind();
it.incrementar_ind();
it.incrementar_ind();
console.log(`El reponsable es: ${it.optenerResponsable()} y tiene la cuenta individual en : ${it.optenerCuentInd()}`); 

console.log(`Nuestro contador global es: ${Contador.mostrarGlobal()}`);
