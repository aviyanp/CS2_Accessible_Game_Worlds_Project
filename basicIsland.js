class basicIsland {
  constructor(positionx,positiony, above, below, left, right) {
    this.x = positionx;
    this.y = positiony;
    this.acell = above;
    this.bcell = below;
    this.lcell = left;
    this.rcell = right;
  }
  
  show() {
    fill(100,200,100);
    noStroke();
    rect(this.x,this.y,20,20);
    if (acell === )

  }
// Cell numbers mean ... 1 = basic/no change ... 2 = basic ocean/beach ... 3 = basic mountain/blend in
  
  update(){
    this.show();
  }
}