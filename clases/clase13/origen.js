const lista = [2,3,5,7,9,11,]
lista.map(x => x*x).forEach(x=>console.log(x));

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }
    mostrarSaludo(){
        return `Hola Soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
    }
}
let persona1 = new Persona("Alejandro","Navas",23);
console.log(persona1.mostrarSaludo());