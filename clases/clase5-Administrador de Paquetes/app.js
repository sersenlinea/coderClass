let numeros={}

const generaAleatorios=()=> parseInt(Math.random()*20)+1;

for (let i = 0; i < 10000; i++) {
    const numero =generaAleatorios();
    if(!numeros[numero]) numeros[numero]=0
    numeros[numero]++
}
console.log(numeros);

const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

strNombres = productos.map(({ nombre }) => nombre).join(', ')
intTotal = productos.reduce((prev, curr) => curr.precio + prev, 0)
const promedio=()=>{
    const total = intTotal;
    const promedio = total / productos.length;

    return promedio.toFixed(2);
}

productos.sort((a, b) => a.precio - b.precio)
 let menorValor = productos[0].precio;
 let mayorValor = productos[productos.length-1].precio

let todoInfo={
    nopmbres:strNombres,
    total:intTotal.toFixed(2),
    precioMenor:menorValor,
    precioMayor:mayorValor
}
console.log(todoInfo);
