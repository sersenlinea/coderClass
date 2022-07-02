const {options} = require('./options/mariaDb')
const knex = require('knex')(options)



knex.from('cars').select("*").orderBy('price','desc')
.then((rows)=>{
    for (const row of rows) {
        console.log(`${row['id']} ${row['name']} ${row['price']}`);
    }
})
.catch(err=>console.log(err))
.finally(()=>{
    knex.destroy()
})