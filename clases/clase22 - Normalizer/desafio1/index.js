const { normalize, schema } = require("normalizr");
const fs = require('fs')

const empresa = JSON.parse(fs.readFileSync('./empresa.json'))

// Definimos un esquema de empleado
const empleadoEntity = new schema.Entity('empleados');

// Definimos un esquema de organigrama
const empresaEntity = new schema.Entity('empresas', {
  gerente: empleadoEntity,
  encargado: empleadoEntity,
  empleados: [empleadoEntity]
});

/* ---------------------------------------------------------------------------------------- */
//El módulo js "util" 
//proporciona algunas funciones para imprimir cadenas formateadas

const util = require('util')


function print(objeto) {
  console.log(util.inspect(objeto, false, 12, true))
}

console.log(' ------------- OBJETO NORMALIZADO --------------- ')
const normalizedEmpresa = normalize(empresa, empresaEntity);
print(normalizedEmpresa)

console.log('Longitud objeto original: ', JSON.stringify(empresa).length)
console.log('Longitud objeto normalizado: ', JSON.stringify(normalizedEmpresa).length)
