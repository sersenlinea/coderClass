"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var lista = [2, 3, 5, 7, 9, 11];
lista.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});

var Persona = /*#__PURE__*/function () {
  function Persona(nombre, apellido, edad) {
    _classCallCheck(this, Persona);

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  _createClass(Persona, [{
    key: "mostrarSaludo",
    value: function mostrarSaludo() {
      return "Hola Soy ".concat(this.nombre, " ").concat(this.apellido, " y tengo ").concat(this.edad, " a\xF1os.");
    }
  }]);

  return Persona;
}();

var persona1 = new Persona("Alejandro", "Navas", 23);
console.log(persona1.mostrarSaludo());
