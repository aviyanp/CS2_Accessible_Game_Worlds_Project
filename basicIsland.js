class basicIsland {
  constructor(positionx,positiony, above, right, below, left) {
    this.x = positionx;
    this.y = positiony;
    this.acell = above;
    this.bcell = right;
    this.ccell = below;
    this.dcell = left;
    this.type1 = 1;
    this.type2 = 1;
  }
  
  show() {
    fill(121, 191, 99);
    stroke(100)
    strokeWeight(1);
    rect(this.x,this.y,20,20);
    if (this.acell === 1){
      noStroke()
      fill(121, 191, 99);
      rect(this.x, this.y-5, 20,5);
      triangle(this.x+20,this.y-5,this.x+20,this.y,this.x+25, this.y-5);
      triangle(this.x,this.y-5,this.x,this.y,this.x-5, this.y-5);
    }
    else if (this.acell === 2){
      fill(250,200,120);
      rect(this.x, this.y-5, 20,5);
      triangle(this.x+20,this.y-5,this.x+20,this.y,this.x+25, this.y-5);
      triangle(this.x,this.y-5,this.x,this.y,this.x-5, this.y-5);
    }
    if (this.bcell === 1){
      fill(121, 191, 99);
      rect(this.x+20, this.y, 5,20);
      triangle(this.x+20,this.y,this.x+25,this.y-5,this.x+25, this.y);
      triangle(this.x+20,this.y+20,this.x+25,this.y+20,this.x+25, this.y+25);
    }
    else if (this.bcell === 2){
      fill(250,200,120);
      rect(this.x+20, this.y, 5,20);
      triangle(this.x+20,this.y,this.x+25,this.y-5,this.x+25, this.y);
      triangle(this.x+20,this.y+20,this.x+25,this.y+20,this.x+25, this.y+25);

    }
    if (this.ccell === 1){
      fill(121, 191, 99);
      rect(this.x, this.y+20, 20,5);
      triangle(this.x+20,this.y+20,this.x+20,this.y+25,this.x+25, this.y+25);
      triangle(this.x,this.y+20,this.x,this.y+25,this.x-5, this.y+25);
    }
    else if (this.ccell === 2){
      fill(250,200,120);
      rect(this.x, this.y+20, 20,5);
      triangle(this.x+20,this.y+20,this.x+20,this.y+25,this.x+25, this.y+25);
      triangle(this.x,this.y+20,this.x,this.y+25,this.x-5, this.y+25);
    }
    if (this.dcell === 1){
      fill(121, 191, 99);
      rect(this.x-5, this.y, 5,20);
      triangle(this.x,this.y,this.x-5,this.y-5,this.x-5, this.y);
      triangle(this.x,this.y+20,this.x-5,this.y+20,this.x-5, this.y+25);
    }
    else if (this.dcell === 2){
      fill(250,200,120);
      rect(this.x-5, this.y, 5,20);
      triangle(this.x,this.y,this.x-5,this.y-5,this.x-5, this.y);
      triangle(this.x,this.y+20,this.x-5,this.y+20,this.x-5, this.y+25);
    }
  }
// Cell numbers mean ... 1 = basic/no change ... 2 = basic ocean/beach ... 3 = basic mountain/blend in
  
  update(){
    this.show();
  }
}