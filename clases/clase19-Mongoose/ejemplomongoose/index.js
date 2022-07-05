const mongoose = require('mongoose')
require('./config')
const Productos = require('./modelo/productos')
let p = {code:"tv32",price:33000, desc:"Tv de 32 pulgadas",img:"tv32.png"}
async function guardar(){
    const prods = new Productos(p)
    await prods.save();
    
}

function mostrarDatos(){
    Productos.find()
    .then(data=>console.log(data))
}
mostrarDatos()
// guardar()
let newValue ={code:"tv19",price:31000, desc:"Tv de 19 pulgadas",img:"tv19.png"}

const actualizar=async(id,val)=>{
    let data = await Productos.findById(id);
    let query={_id:data.id}
    await Productos.updateOne(query,val);
    mostrarDatos();
}
// actualizar('62c3a829c0721395096c925d',newValue)
function borrar(id){
    Productos.deleteOne({_id:id})
    .then(()=>{
        console.log('se eliminó el registro');
    })
    .catch(err=>console.log(err))
}
// borrar('62c4409a0106830ead8c4765')