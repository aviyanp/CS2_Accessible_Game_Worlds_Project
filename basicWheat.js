class basicWheat {
  constructor(positionx,positiony, num) {
    this.x = positionx;
    this.y = positiony;
    this.type = 3;
    this.num = num;
    this.state = 0;
  }
  
  update(speed){
    this.show();
  }
  
  show(){
    noStroke();
    if (this.state === 0){
      fill (123, 63, 0);
      rect(this.x,this.y,30,30);
      for (let i = 0; i<15; i++){
      fill (200,50,0);
      line(this.x+i*2, this.y+i*2, 1 , 1 );}
    }
  }
}