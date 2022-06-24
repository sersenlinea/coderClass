import * as operaciones from './lib/operaciones'

let num1:number=34;
let num2:number=67;

console.log(`La suma de ${num1} y ${num2} es: ${operaciones.sumar(num1,num2)}`);
console.log(`La resta de ${num1} y ${num2} es: ${operaciones.restar(num1,num2)}`);
console.log(`La multiplicación de ${num1} y ${num2} es: ${operaciones.multiplicar(num1,num2)}`);
console.log(`La división de ${num1} y ${num2} es: ${operaciones.dividir(num1,num2)}`);
