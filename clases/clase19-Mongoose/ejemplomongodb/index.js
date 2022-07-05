const mongoClient = require('mongodb').MongoClient

const host = 'localhost'
const port = '27017'
const username='luis'
const pass='123456'

const uri = `mongodb://${host}//${port}`;

const client = new mongoClient(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}); 

const ejecutar=async()=>{
    await client.connect();
    const dbCoder = client.db('test')
    const users = dbCoder.collection("usuarios")
    const data= await users.find().toArray()
    console.log(data);
    await client.close();
}
ejecutar()