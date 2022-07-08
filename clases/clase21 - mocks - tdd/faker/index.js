const express = require('express')
const faker = require('faker')
faker.locale = 'es'

let id = 1

function getNextId(){
    return id++;
}

function crearCombinacionAlAzar(id){
    return {
        id,
        nombre:faker.name.firstName(),
        apellido: faker.name.lastName(),
        color: faker.commerce.color()
    }
}
function generarNPersonas(cant){
    const personas = []
    for (let i = 0; i < cant; i++) {
        personas.push(crearCombinacionAlAzar(getNextId()))
    }
    return personas
}

const CANT_PERSONAS_DEFAULT = 10

const app = express()
app.get('api/personas',(req,res)=>{
    const cant = Number(req.query.cant) || CANT_PERSONAS_DEFAULT
    res.json(generarNPersonas(cant))
})
const PORT = 8080

const server = app.listen(PORT,()=>{
    console.log(`servidor corriendo en el puerto ${PORT}`);
})
server.on('error',error=>console.log(`Error en el servidor ${PORT}`)) 