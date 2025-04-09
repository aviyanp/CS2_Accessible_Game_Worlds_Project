class basicHouse {
  constructor(positionx, positiony) {
    this.x = positionx;
    this.y = positiony;
    this.type = 3;
    this.hover = 0;
  }

  show() {
    fill(150, 75, 0);
    rect(this.x, this.y, 30, 30);
    image(house, this.x - 8, this.y - 33, 96, 153);
  }

  update() {
    this.show();
  }
}
