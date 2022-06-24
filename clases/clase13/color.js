class ColorRandom {
    constructor() {
     
    }
  
    canalRandom() {
      return (Math.random() * 256) | 0;
    }
  
    fullRGB() {
      return `Color RGB(${this.canalRandom()},${this.canalRandom()},${this.canalRandom()})`;
    }
  }
  
  const color1 = new ColorRandom();
  console.log(color1.fullRGB());
  