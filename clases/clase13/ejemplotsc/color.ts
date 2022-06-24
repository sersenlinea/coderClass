class Color{
    color:string;
    constructor(){
        this.color=`${this.colorAl()}-${this.colorAl()}-${this.colorAl()}`;
    }
    colorAl(){
        return Math.floor(Math.random()*255);
    }
    getColor=()=>{
        return `rgb(${this.color})`;
    }
}

for (let index = 0; index < 10; index++) {
    let color = new Color();
    console.log(color.getColor());
    
}

