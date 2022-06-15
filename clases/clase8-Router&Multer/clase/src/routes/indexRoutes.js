const express = require('express')
const {Router} = express;
const multer = require('multer');
const products = require('../data/products');
const router = Router();
const data = require('../data/products')


router.get('/',(req,res)=>{
    products.create(obje);
    res.send('get ok');
});

module.exports=router;
