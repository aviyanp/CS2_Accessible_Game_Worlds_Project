class basicIsland {
  constructor(positionx, positiony, type) {
    this.x = positionx;
    this.y = positiony;
    this.type = type;
    this.hover = 0;
  }
 
  // Cell numbers mean ... 1 = basic/no change ... 2 = basic ocean  ... 3 = house ... 4 = farm
 
  
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
   
    if (this.type === 4) {
      //farm
      fill(0, 255, 0);
      rect(this.x, this.y, 20, 20);
    } else if (this.type === 1) {
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
    // if ocean
    else if (this.type === 2) {
      fill(250, 200, 120);

      rect(this.x, this.y - 5, 20, 5);
      triangle(this.x + 20, this.y - 5, this.x + 20, this.y, this.x + 25, this.y - 5);
      triangle(this.x, this.y - 5, this.x, this.y, this.x - 5, this.y - 5);
      
      // right
      rect(this.x + 20, this.y, 5, 20);
      triangle(this.x + 20, this.y, this.x + 25, this.y - 5, this.x + 25, this.y);
      triangle(this.x + 20, this.y + 20, this.x + 25, this.y + 20, this.x + 25, this.y + 25);
      
      // bottom
      rect(this.x, this.y + 20, 20, 5);
      triangle(this.x + 20, this.y + 20, this.x + 20, this.y + 25, this.x + 25, this.y + 25);
      triangle(this.x, this.y + 20, this.x, this.y + 25, this.x - 5, this.y + 25);
      
      //left
      rect(this.x - 5, this.y, 5, 20);
      triangle(this.x, this.y, this.x - 5, this.y - 5, this.x - 5, this.y);
      triangle(this.x, this.y + 20, this.x - 5, this.y + 20, this.x - 5, this.y + 25);
    } else if (this.type === 3) {
      //house
      //console.log("House at: " + this.x + ", " + this.y)
      image(house, this.x, this.y, 85, 115)
    }
  }

  
  update(){
    this.show();
  }
}