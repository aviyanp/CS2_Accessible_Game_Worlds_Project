class basicFarmland {
  constructor(x, y) {
  // crop "empty" is empty cell
    this.x = x;
    this.y = y;
    this.crop = "empty";
    this.hover = 0;
    this.type= 2;
    this.growthStage = 0;

  }

update() {
  this.emptyFarmland(this.crop);
  this.show();
}
  
show() {
  noStroke();
  if (this.hover === 1) {
    noFill();
    stroke(96, 57, 43);
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
    //image(wheatFull, this.x+3, this.y-10, 23, 40);
    //image(seed, this.x, this.y, 30, 30);
  }
}
  
}