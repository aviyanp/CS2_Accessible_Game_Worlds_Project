class basicOcean {
  constructor(positionx, positiony) {
    this.x = positionx;
    this.y = positiony;
    this.type = 0;
  }
 
  update() {
    this.show();
  }
 
  show() {
    if (mouseX > this.x && mouseX < this.x + 30 && mouseY > this.y && mouseY < this.y + 30) {
      noStroke();
      fill(72, 183, 138);
      rect(this.x, this.y, 20, 20);
  
      fill(73, 177, 138);
      
      rect(this.x, this.y-5, 20, 5);
      triangle(this.x + 20, this.y - 5, this.x + 20, this.y, this.x + 25, this.y - 5);
      triangle(this.x, this.y - 5, this.x, this.y, this.x - 5, this.y - 5);
      
      rect(this.x + 20, this.y, 5, 20);
      triangle(this.x + 20, this.y, this.x + 25, this.y - 5, this.x + 25, this.y);
      triangle(this.x + 20, this.y + 20, this.x + 25, this.y + 20, this.x + 25, this.y + 25);
      
      rect(this.x, this.y + 20, 20, 5);
      triangle(this.x + 20, this.y+20, this.x + 20, this.y+25, this.x + 25, this.y + 25);
      triangle(this.x, this.y + 20, this.x, this.y + 25, this.x - 5, this.y + 25);
      
      rect(this.x - 5, this.y, 5, 20);
      triangle(this.x, this.y, this.x - 5, this.y - 5, this.x-5, this.y);
      triangle(this.x, this.y + 20, this.x - 5, this.y + 20, this.x - 5, this.y + 25);
      
      strokeWeight(2);
      noFill();
      rect(this.x - 5, this.y - 5, 30, 30);
      noStroke();
    } else {  
      noStroke();
      fill(0, 157, 196);
      rect(this.x, this.y, 30, 30);
    }
  }
}