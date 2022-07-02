const ClientSql = require('./sql')
const {options} =require('./options/mariaDb.js')
const sql= new ClientSql(options)


sql.crearTabla()
.then(()=>{
    console.log('tabla creada');
    const articulos=[
        {nombre:'Leche',codigo:'leh001',precio:120.33,stock:24},
        {nombre:'Huevos',codigo:'hue001',precio:320.33,stock:24},
        {nombre:'Fideos',codigo:'fid001',precio:120.33,stock:24},
        {nombre:'Crema',codigo:'cre001',precio:120.33,stock:25},
        {nombre:'Arroz',codigo:'arr001',precio:80.33,stock:34},
    ]
    return sql.insertarArticulos(articulos)
})
.then(()=>{
    console.log('Se agregaron los registros');
    return sql.listarArticulos()
})
.then((articulos)=>{
    console.table(articulos)
    return sql.borrarArticuloPorId(3)
})
.then(()=>{
    console.log('articulo borrado');
    return sql.actualizarStockPorId(0,2)
})
.then(()=>{
    console.log('stock actualizado');
    return sql.listarArticulos()
})
.then((articulos)=>{
    console.log('Resultado final');
    console.table(articulos);
})
.catch(err=>console.log(err))
.finally(()=>{
    sql.close()
})



