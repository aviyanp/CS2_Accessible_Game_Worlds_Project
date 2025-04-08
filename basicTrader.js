class basicTrader {
  constructor(lvl) {
    this.level = lvl;
    this.arrivalday = 3; 
    
  }

update() {
  this.spawnGUI();
}
  
spawnGUI() {
  fill(196, 164, 132);
  noStroke();
  rect(200, 200, 800, 800);
}  
  
}
