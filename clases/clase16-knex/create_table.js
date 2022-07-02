const {options} = require('./options/mariaDb')
const knex = require('knex')(options)

knex.schema.createTable('cars',table=>{
    table.increments('id')
    table.string('name')
    table.integer('price')
})
.then(()=>console.log('Se creó la tabla cars'))
.catch(err=>console.log(err))
.finally(()=>{
    knex.destroy()
})