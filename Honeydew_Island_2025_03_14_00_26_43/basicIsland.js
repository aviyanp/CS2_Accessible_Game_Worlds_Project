class basicIsland {
  constructor(positionx, positiony) {
    this.x = positionx;
    this.y = positiony;
    this.type = 1;
    this.hover = 0;
  }

 
  
  show() {
    noStroke();
    if (this.hover === 1) {
      strokeWeight(4);
      stroke(58, 146, 110);
    }
    fill(120, 200, 100);
    rect(this.x, this.y, 20, 20);
    noStroke();
    this.hover = 0;

    fill(121, 191, 99);

    rect(this.x, this.y - 5, 20, 5);
    triangle(this.x + 20, this.y - 5, this.x + 20, this.y, this.x + 25, this.y - 5);
    triangle(this.x, this.y - 5, this.x, this.y, this.x - 5, this.y - 5);
    
    //right
    rect(this.x + 20, this.y, 5, 20);
    triangle(this.x + 20, this.y, this.x + 25, this.y - 5, this.x + 25, this.y);
    triangle(this.x + 20, this.y + 20, this.x + 25, this.y + 20, this.x + 25, this.y + 25);
    
    // bottom
    rect(this.x, this.y + 20, 20, 5);
    triangle(this.x + 20, this.y + 20, this.x + 20, this.y + 25, this.x + 25, this.y + 25);
    triangle(this.x, this.y + 20, this.x, this.y + 25, this.x - 5, this.y + 25);
    
    //;eft
    rect(this.x - 5, this.y, 5, 20);
    triangle(this.x, this.y, this.x - 5, this.y - 5, this.x - 5, this.y);
    triangle(this.x, this.y + 20, this.x - 5, this.y + 20, this.x - 5, this.y + 25);

  }

  
  update(){
    this.show();
  }
}