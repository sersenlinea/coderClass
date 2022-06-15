const express = require('express')
const app = express();
const indexRouter = require('./routes/indexRoutes');
const personaRouter = require('./routes/personasRoutes');
const uploadRouter= require('./routes/uploadRoutes')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/',indexRouter);
app.use('/personas',personaRouter);
app.use('/upload',uploadRouter);








app.listen(8080,()=>{
    console.log(`Escuchando en el puerto 8080`);
});