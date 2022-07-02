const { options} = require('./SQlite3')
const knex = require('knex')(options);

(async() =>{
    try {
        console.log('Eliminada la tabla')
        await knex.schema.dropTableIfExists('articulos')

        console.log('Se crea la tabla')
        await knex.schema.createTable('articulos', table => {
            table.increments('id').primary().notNull(),
            table.string('nombre',15).notNull(),
            table.float('precio'),
            table.integer('stock').unsigned()
        })
        
        const articulos = [
            { nombre: 'Articulo 1', precio:1234,stock:100},
            { nombre: 'Articulo 2', precio:2234,stock:200},
            { nombre: 'Articulo 3', precio:3234,stock:300},
            { nombre: 'Articulo 4', precio:4234,stock:400},
        ]
        console.log('Se ingresan los articulos')
        await knex('articulos').insert(articulos)
        
        const arts = await knex.from('articulos').select('*');
        for (row of arts) {
            console.log(`ID:${row.id} - NOMBRE:${row.nombre} - PRECIO:${row.precio} - STOCK:${row.stock}`)
        }
        console.log('Se elimina el articulo')
        await knex.from('articulos').where('id', '=','3').del()

        console.log('Se actualiza el articulo')
        await knex.from('articulos').where('id', '=','2').update({stock:0})

        console.log('Se cierra la conexion')
        await knex.destroy();
    } catch (error) {
        console.log(error)
    }

})();

