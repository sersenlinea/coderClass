const {options} = require('./options/mariaDb')
const knex = require('knex')(options)



knex.from('cars').where('price', '>', '50000').del()
.then((rows)=>{
    console.log(" se eliminĂ³ el registro!");
})
.catch(err=>console.log(err))
.finally(()=>{
    knex.destroy()
})