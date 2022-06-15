const express = require('express')
const {Router} = express;
const multer = require('multer');
const router = Router();
const path = require('path')
const storage = multer.diskStorage(
    {
        destination:(req, file,cb)=>{
            cb(null,path.join(__dirname, '../public'))
        },
        filename:(req, file, cb)=>{
            cb(null, file.fieldname + '-' +Date.now())
        }
    }
);
const upload = multer({storage:storage})

router.post('/', upload.single('file'),(req,res)=>{
    const file = req.file;
    if(!file){
        const error = new Error('por favor subí un archivo')
        error.httpStatusCode=400
        return next(error)
    }
    res.send(file);
});

module.exports=router;
