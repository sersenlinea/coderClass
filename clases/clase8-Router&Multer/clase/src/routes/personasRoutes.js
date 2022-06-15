const express = require('express')
const {Router} = express;

const router = Router();

router.get('/',(req,res)=>{
    res.send('get ok');
});
router.post('/',(req,res)=>{
    res.send(req.body);
});

module.exports=router;
