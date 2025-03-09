class basicFarmland {
    constructor(x, y, crop) {
    // crop "empty" is empty cell
      this.x = x;
      this.y = y;
      this.crop = crop;
      this.hover = 0;
    }
  
  update() {
    this.emptyFarmland(this.crop);
    this.show();
  }
    
  show() {
    noStroke();
    if (this.hover === 1) {
      noFill();
      stroke(115,66,12);
      strokeWeight(2);
      rect(this.x+5, this.y+5, 20, 20);
      strokeWeight(1);
      noStroke();
      this.hover = 0;
    }
  }
    
  emptyFarmland(crop) {
    if(crop === "empty") {
      image(farmland, this.x, this.y, 30, 30);
    }
  }
    
  }