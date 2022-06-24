class Alumno{
    nombre:string;
    apellido:string;
    edad:Number;
    curso:string;
    constructor(nombre:string, apellido:string, edad:Number,curso:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.curso=curso;
    }
    mostrarDatos(){
        return `
        <div>Nombre: ${this.nombre} Apellido: ${this.apellido} Edad: ${this.edad} Curso: ${this.curso}</div>
        `
    }
}
let alumno= new Alumno("Juan","Perez",24,"Nodejs");
let alumno2= new Alumno("Luis","Perez",24,"Nodejs");
let alumno3= new Alumno("Juan","Alvarez",24,"Nodejs");
let alumno4= new Alumno("Julian","Perez",24,"Nodejs");

console.log(alumno.mostrarDatos());
console.log(alumno2.mostrarDatos());
console.log(alumno3.mostrarDatos());
console.log(alumno4.mostrarDatos());
