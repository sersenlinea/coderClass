const express = require('express');
const app = express();
const path = require('path');

//configuración static
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname ,'public')))

app.get('/',(req,res)=>{
    res.sendFile('index.html')
})
app.post('/',(req,res)=>{
    let data = req.body;
    console.log(data);
    res.redirect('/')
});
const frase = 'Hola mundo'

app.get('/api/frase',(req, res)=>{
    res.send(frase)
})

app.get("/api/letras/:num", (req, res) => {
    if(isNaN(req.params.num)){
        res.send('no es un numero')
    }else if(req.params.num > frase.length){
        res.send({error:'El parámetro está fuera de rango'})
    }
    res.send(frase[parseInt(req.params.num)-1]);
  });

  app.get("/api/palabras/:num", (req, res) => {
    const arr = frase.split(" ");
    if (parseInt(req.params.num) <= arr.length) {
      res.send(frase.split(" ")[parseInt(req.params.num) - 1]);
    } else {
      res.send('Parametro mal ingresado')
    }
  });
  app.get("/api/sumar/:valor1/:valor2/", (req, res) => {
    const valor1 = parseInt(req.params.valor1);
    const valor2 = parseInt(req.params.valor2);
    res.json({ valor1: valor1, valor2: valor2, resultado: valor1 + valor2 });
  });
  
  app.get("/api/sumar/", (req, res) => {
    const valor1 = parseInt(req.query.valor1);
    const valor2 = parseInt(req.query.valor2);
    res.json({ valor1: valor1, valor2: valor2, resultado: valor1 + valor2 });
  });
  
  app.get("/api/operacion/:parametro", (req, res) => {
    const parametro = req.params.parametro;
    const resultado = eval(parametro);
    res.json({ resultado });
  });
  
  
  
app.listen(3000,()=>{
    console.log('escuchando puerto 3000')
});