let cells = [];
let cellNum = 0;
let gold = 200;
let islandprice = 20;
let numLevels = 1;
let levelMaps = [];
let currentLevel = 0;
let time = 300;

//Crops are wheat, potato, carrot, beetroot, pumpkin, melon (honeydew)

function preload() {
  wheattexture = loadImage('assets/wheatImageCSIIGame.png');
  wandyT = loadImage('assets/wanderingTrader.png');
  
  // level files
  for (let i = 0; i < numLevels; i++) {
    levelMaps.push(loadStrings("levels/" + (i + 1) + ".txt"));
  }
}

function setup() {
  createCanvas(1200, 1300);
  background(500, 500, 500);
  
  // ocean
  for (let j = 0; j < 40; j++) {
    for (let i = 0; i < 40; i++) {
      cells.push(new basicOcean(i*30, j*30, j*40+i));
    }
  }
  
  loadLevelMap(levelMaps[currentLevel]);
  
  console.log("map loaded");
}

function loadLevelMap(levelData) {
  // row
  for (let j = 0; j < levelData.length; j++) {
  // column
    for (let i = 0; i < 40; i++) {
      cellNum = j * 40 + i;
      if (levelData[j][i] === "0") {
        //grass
        cells[cellNum] = new basicIsland(i*30, j*30, 1);
      } else if (levelData[j][i] === "1") {
        //house
        cells[cellNum] = new basicIsland(i*30, j*30, 3);
    }
  }
}

function draw() {
  background(105);
  for (let cell of cells){
    cell.update();
    if (mouseX > cell.x - 5 && mouseY > cell.y - 5 && mouseX < cell.x + 20 && mouseY < cell.y + 20) {
      cell.hover = 1;
    }
  }
  
  controlPanel()
  
}

function controlPanel() {
  noStroke()
  fill('#9FDDD2');
  rect(0, 1200, 1200, 100);
}

function mouseClicked(){
  for (let i = 0; i < cells.length; i++){
    if (mouseX > cells[i].x && mouseX < cells[i].x + 30 && mouseY > cells[i].y && mouseY < cells[i].y + 30 && gold >= islandprice && cells[i].type === 0){
      cells[i] = new basicIsland(cells[i].x, cells[i].y, 1, 1, 1, 1);
      gold -= islandprice;
    }
  }
}
}
