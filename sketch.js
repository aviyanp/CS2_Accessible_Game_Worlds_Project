let cells = [];
let cellNum = 0;
let gold = 200;
let islandprice = 20;
let numLevels = 1;
let levelMaps = [];
let time = 300;
let wheattexture, wandyT, house; 
let houseX;
let houseY;
let farmlandX;
let farmlandY;
let day;
let traderArrivalDay = 1;
let traderLevel = (traderArrivalDay/12)+1;
//Crops are wheat, potato, carrot, beetroot, pumpkin, melon (honeydew)

function preload() {
  wandyT = loadImage('assets/wanderingTrader.png');
  house = loadImage('assets/NEWHouse.png');
  farmland = loadImage('assets/LighterFarmland.png');
  noraFields = loadFont('assets/NoraFields.otf');

  // level files
  for (let i = 0; i < numLevels; i++) {
    levelMaps.push(loadStrings("levels/" + (i + 1) + ".txt"));
  }
}
function setup() {
  createCanvas(1200, 1300);
  background(500, 500, 500);

  // ocean
  for (let j = 3; j < 43; j++) {
    for (let i = 0; i < 40; i++) {
      cells.push(new basicOcean(i*30, j*30, j*40+i));
    }
  }

  if (levelMaps.length > 0) {
    loadLevelMap(levelMaps[0]);
  } else {
    console.error("map not loaded");
  }

  console.log("map loaded");
}
function loadLevelMap(levelData) {
  // row
    for (let j = 0; j < levelData.length; j++) {
    // column
      for (let i = 0; i < 40; i++) {
        cellNum = j * 40 + i;
        if (levelData[j][i] === "1") {
          //house
          houseX = (j + 3)*30;
          houseY = i*30;
        } else if (levelData[j][i] === "0") {
          //grass
          cells[cellNum] = new basicIsland(i*30, (j+3)*30, 1);
      } else if (levelData[j][i] === "2") {
        cells[cellNum] = new basicFarmland((i*30)-5, ((j+3)*30)-5, "empty")
      }
    }
  }
}

function timeChange(change){
  if (millis === 300&&change === 1){
    millis = 600;
  }
  else if (millis === 300 && change === -1){
    millis === 100;
  }
  else if (millis === 600 && change === -1){
    millis === 300;
  }
  else if (millis === 100 && change === 1){
    millis === 300;
  }
  else if (millis === 600 && change === 1){
    millis === 1000;
  }
  else if (millis === 1000 && change === -1){
    millis === 600;
  }
}

function draw() {
  background(105);
  
  controlPanel();
  incrementDay();
  
  for (let cell of cells){
    cell.update();
    if (mouseX > cell.x - 5 && mouseY > cell.y - 5 && mouseX < cell.x + 20 && mouseY < cell.y + 20) {
      cell.hover = 1;
    }
  }
  
  traderArrival();
  
  if (houseX !== undefined && houseY !== undefined) {
    image(house, houseY-9, houseX-34, 98, 153);
  }
  stroke(2);
  stroke(0,0,0)
  fill (234, 213, 169);
  for (let i = 0.5; i<=11; i++){
  rect(i*100,1200,75,75, 10);}
  fill (0,0,0);
  stroke(1);
  text(amountwheat, 75, 1190);
  text(amountpotato, 175, 1190);
  text(amountcarrot, 275, 1190);
  text(amountbeetroot, 375, 1190);
  text(amountpumpkin, 475, 1190);
  text(amountland, 575, 1190);
  text(amountmelon, 675, 1190);
  text(amountmelon, 775, 1190);
  text(amountmelon, 875, 1190);
  text(amountmelon, 975, 1190);
  text(amountmelon, 1075, 1190);
}

function incrementDay() {
  day = Math.floor(millis()/30000)
}

function traderArrival() {
  if (day === traderArrivalDay) {
    console.log('Trader Arrived!')
    stroke(120, 104, 47);
    strokeWeight(4)
    fill(234, 213, 169); 
    rect(1000, 100, 200, 75); 
    
    fill(0); // Text color
    stroke(120, 104, 47);
    strokeWeight(1)
    textSize(32); // Text size
    text("Trader Is Here!", 1010, 145); 
    let trader = new basicTrader(traderLevel);
    trader.update();
    
    traderArrivalDay += 12;
  }
  else if (day+1 === traderArrivalDay) {
    stroke(120, 104, 47);
    strokeWeight(4)
    fill(234, 213, 169); 
    rect(1000, 100, 200, 75); 
    
    fill(0); // Text color
    stroke(120, 104, 47);
    strokeWeight(1)
    textSize(32); // Text size
    text("Trader Incoming!", 1010, 145); 
    
  }
}

function controlPanel() {
  noStroke()
  // change color later
  fill('#9FDDD2');
  rect(0, 0, 1200, 100);
  
  textFont(noraFields);
  textSize(40)
  fill(0, 0, 0)
  strokeWeight(1);
  text("Day: " + day, 10, 55)
  noStroke();
  
}
function mouseClicked(){
  for (let i = 0; i < cells.length; i++){
    
  if (mouseY < 120) {
    //exit the function
    return;
  }
    
    if (mouseX > cells[i].x && mouseX < cells[i].x + 30 && mouseY > cells[i].y && mouseY < cells[i].y + 30 && gold >= islandprice && cells[i].type === 0){
      cells[i] = new basicIsland(cells[i].x, cells[i].y, 1);
      gold -= islandprice;
    }
  }
}
