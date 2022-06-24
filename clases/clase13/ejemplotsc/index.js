var Alumno = /** @class */ (function () {
    function Alumno(nombre, apellido, edad, curso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = curso;
    }
    Alumno.prototype.mostrarDatos = function () {
        return "\n        <div>Nombre: ".concat(this.nombre, " Apellido: ").concat(this.apellido, " Edad: ").concat(this.edad, " Curso: ").concat(this.curso, "</div>\n        ");
    };
    return Alumno;
}());
var alumno = new Alumno("Juan", "Perez", 24, "Nodejs");
var alumno2 = new Alumno("Luis", "Perez", 24, "Nodejs");
var alumno3 = new Alumno("Juan", "Alvarez", 24, "Nodejs");
var alumno4 = new Alumno("Julian", "Perez", 24, "Nodejs");
console.log(alumno.mostrarDatos());
console.log(alumno2.mostrarDatos());
console.log(alumno3.mostrarDatos());
console.log(alumno4.mostrarDatos());
