// const moment = require("moment");
const fs = require('fs');
// const fechaNac = moment("1968-04-11");
// const diaDeHoy = moment();

// const diff = diaDeHoy.diff(fechaNac, "years");
// const dias =diaDeHoy.diff(fechaNac, 'days')

// console.log(diff);
// console.log(dias);

// fs.appendFile('./datos.txt','hola esta es una linea nueva',(error)=>{
//     if (error) {
//         return console.log(error)

//     }
//     console.log('se actualizo el archivo');
// })
// fs.writeFile('./datos.txt','La nueva info',(error)=>{
//     if (error) {
//         return console.log(error)

//     }
//     console.log('se actualizo el archivo');
// })
// fs.mkdir('misDatos',(error)=>{
//     console.log(error);
// });
//  fs.readdir('./node_modules',(error,nombre)=>{
//     if (error) {
//         console.log(error);
//     }else{
//         console.log(nombre);
//     }
// })
// let direccion = __dirname+'/clase3.js'
// fs.promises.readFile(direccion,'utf-8')
// .then(data=>console.log(data))
// .catch((err)=>console.log(err))
// console.log(__dirname);
// fs.mkdir('data',(err)=>{
//     if(err){console.log(err)}
//     else{
//         console.log('se creo la carpeta');
//     }}
//     )
// fs.appendFileSync('./data/data.json',"[{nombre:'Luis',apellido:'Navas'}]");

let data = fs.readFileSync('./data/data.json','utf-8');
let nuestrosDatos=JSON.parse(data);
nuestrosDatos=[...nuestrosDatos,{nombre:"Manuel",apellido:"Sanchez"}];
console.log(nuestrosDatos);
fs.unlinkSync('./data/data.json')
fs.appendFileSync('./data/data.json',JSON.stringify(nuestrosDatos));