const mongoose = require('mongoose')

const uriClient = 'mongodb://127.0.0.1:27017/admin'
mongoose.connect(uriClient)
.then(db=>console.log('conectados a la base de datos'))
.catch(err=>console.log(err))