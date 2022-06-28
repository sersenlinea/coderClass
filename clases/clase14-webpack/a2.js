const {suma, resta,multi,divi} = require('./a1')

const operaciones = (a,b,op)=>{
    if(op ==='+'){
        return suma(a,b)
    }
    else if(op ==='-'){
        return resta(a,b)
    }
    else if(op ==='*'){
        return multi(a,b)
    }
    else if(op ==='/'){
        return divi(a,b)
    }
    else{
        return `Se debe colocar un operador!`
    }
}
module.exports=operaciones;