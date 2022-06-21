const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('hello',{mensaje:"Hola estamos con la plantilla Pug"})
})
router.get('/datos', function(req, res, next) { 
    res.render('datos', { min:req.query.min,
    max:req.query.max,
    nivel:req.query.nivel,
    titulo:req.query.titulo,
    });
})


module.exports=router