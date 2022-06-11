//sin llaves
const operacion=(a,b,op)=>{
    return op(a,b);
}
const suma=(a, b)=>{
    return a+b;
}
const resta=(a, b)=>{
    return a-b;
}
const multiplicacion=(a, b)=>{
    return a*b;
}
const division=(a, b)=>{
    return a/b;
}
const modulo=(a, b)=>{
    return a % b;
}
console.log(operacion(2,5,suma));
console.log(operacion(2,5,multiplicacion));
console.log(operacion(2,5,division));
console.log(operacion(2,5,resta));
console.log(operacion(2,5,modulo));

Promise.resolve(90)
.then(x=>x + 1)
.then(x=>x * 2)
.then(x=>{
    if(x ==22) throw 'Error'
    else return 80 
})
.then(x=> 30)
.then(x=> x / 2)
.then(console.log)
.catch(console.log)

// Asincronico

function hacerTarea(num){
    console.log(`haciendo la tarea ${num}`);
    // setTimeout(cb,100)

}

console.log('inicio de tareas');
hacerTarea(1)
hacerTarea(2)
hacerTarea(3)
hacerTarea(4)
console.log('Otras tareas');

const sumar=(...ops)=>{
    let sum=0
    for (const op of ops) {
        sum +=op
    } 
    return [sum]

}
let arrayN =[...sumar(4,6),...sumar(4,6,7)] 
console.log(sumar(arrayN));






