class basicTrader {
  constructor(lvl) {
    this.level = lvl;
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