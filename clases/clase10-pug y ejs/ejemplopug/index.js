const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter')
app.set('views','./views')
app.set('view engine', 'pug');
app.use('/',indexRouter);
app.listen(8080,()=>{
    console.log(' escuchando en puerto 8080');
})