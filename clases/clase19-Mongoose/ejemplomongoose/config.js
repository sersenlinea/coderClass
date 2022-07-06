const mongoose = require('mongoose')

// const uriClient = 'mongodb://127.0.0.1:27017/admin'
const uriCloud = "mongodb+srv://sersenlinea:sersenlinea@cluster0.amioq.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uriCloud)
.then(db=>console.log('conectados a la base de datos'))
.catch(err=>console.log(err))