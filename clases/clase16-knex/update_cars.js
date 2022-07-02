const {options} = require('./options/mariaDb')
const knex = require('knex')(options)



knex.from('cars').where('price','9000').update({price:9500})
.then((rows)=>{
    console.log(" se actualizó el registro!");
})
.catch(err=>console.log(err))
.finally(()=>{
    knex.destroy()
})