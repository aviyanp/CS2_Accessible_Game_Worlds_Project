// HONEYDEW ISLAND MS2
// A game by:
// - Raghavendra Thakur
// - Hector Bonnaud
// - Aviyan Panday

// NOTE: The collision detection is the restrictions of the player walking off 
// NOTE: THE LEVEL WIN CONDITION IS PLACING ALL THE ISLAND BLOCKS DOWN - THIS IS A TUTORIAL ROUND BUT IT HAS MANY IMPORTANT FEATURED OF THE COMPLETED GAME
// EC: Uses animation array
// EC: Uses time as a feature


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
let traderLevel = (traderArrivalDay / 12) + 1;
let traderIsHere = false;
let frontGeorge = [];
let backGeorge = [];
let leftGeorge = [];
let rightGeorge = [];
let georgeType;
let georgeX = 500;
let georgeY = 500;
let frame = 0;
let numWheat, numPotato, numCarrot, numBeetroot, numPumpkin, numMelon;
let houseInteriorFade;
let houseInteriorFadeBoolean = false;
let houseInteriorFadeAmount = 4;
wheatFullX = farmlandX - 3;
wheatFullY = farmlandY - 10;
wheatFullXSize = 23;
wheatFullYSize = 40;
seedX = farmlandX;
seedY = farmlandY;
seedXSize = 30;
seedYSize = 30;


// Cell types; 0: ocean, 1: grass, 2: farmland, 3: house

function preload() {
  wandyT = loadImage('assets/wanderingTrader.png');
  house = loadImage('assets/NEWHouse.png');
  farmland = loadImage('assets/farmland4.png');
  noraFields = loadFont('assets/NoraFields.otf');
  infoBoard = loadImage('assets/infoBoard.png');
  // george boi
  frontGeorge1 = loadImage('assets/frontGeorge1.png');
  frontGeorge2 = loadImage('assets/frontGeorge2.png');
  frontGeorge3 = loadImage('assets/frontGeorge3.png');
  backGeorge1 = loadImage('assets/backGeorge1.png');
  backGeorge2 = loadImage('assets/backGeorge2.png');
  backGeorge3 = loadImage('assets/backGeorge3.png');
  leftGeorge1 = loadImage('assets/leftGeorge1.png');
  leftGeorge2 = loadImage('assets/leftGeorge2.png');
  leftGeorge3 = loadImage('assets/leftGeorge3.png');
  rightGeorge1 = loadImage('assets/rightGeorge1.png');
  rightGeorge2 = loadImage('assets/rightGeorge2.png');
  rightGeorge3 = loadImage('assets/rightGeorge3.png');
  hotbarImage = loadImage('assets/hotbar.png');
  hotbarImage2 = loadImage('assets/hotbar2.png');
  houseInteriors = loadImage('assets/realInteriors.png');

  wheatFull = loadImage('assets/Individual Files/Wheat/wheatFull.png');
  seed= loadImage('assets/Individual Files/Wheat/wheatSeed.png');
  
  // level files
  for (let i = 0; i < numLevels; i++) {
    levelMaps.push(loadStrings("levels/" + (i + 1) + ".txt"));
  }
}

function setup() {
  createCanvas(1200, 1300);

  frontGeorge.push(frontGeorge1);
  frontGeorge.push(frontGeorge2);
  frontGeorge.push(frontGeorge3);
  backGeorge.push(backGeorge1);
  backGeorge.push(backGeorge2);
  backGeorge.push(backGeorge3);
  leftGeorge.push(leftGeorge1);
  leftGeorge.push(leftGeorge2);
  leftGeorge.push(leftGeorge3);
  rightGeorge.push(rightGeorge1);
  rightGeorge.push(rightGeorge2);
  rightGeorge.push(rightGeorge3);

  // ocean cells
  for (let j = 3; j < 43; j++) {
    for (let i = 0; i < 40; i++) {
      cells.push(new basicOcean(i * 30, j * 30));
    }
  }

  if (levelMaps.length > 0) {
    loadLevelMap(levelMaps[0]);
  } else {
    console.error("map not loaded");
  }

  console.log("map loaded");
  
  georgeType = frontGeorge[0];
}

function loadLevelMap(levelData) {
  for (let j = 0; j < levelData.length; j++) {
    for (let i = 0; i < 40; i++) {
      cellNum = j * 40 + i;

      if(levelData[j][i] === "=") {
        //cells[cellNum] = new basicHouseNotMainBlock(i * 30, (j + 3) * 30);
      } else if (levelData[j][i] === "1") {
        houseX = i * 30;
        houseY = (j + 3) * 30;
        //cells[cellNum] = new basicHouse(i * 30, (j + 3) * 30);
      } else if (levelData[j][i] === "0") {
        cells[cellNum] = new basicIsland(i * 30, (j + 3) * 30);
      } else if (levelData[j][i] === "2") {
        cells[cellNum] = new basicFarmland((i * 30) - 5, ((j + 3) * 30) - 5);
      }
    }
  }
}

function draw() { 
  background(105);
  frame += 1;

  controlPanel();
  incrementDay();
  
  for (let cell of cells){
    cell.update();
    if (mouseX > cell.x - 5 && mouseY > cell.y - 5 && mouseX < cell.x + 20 && mouseY < cell.y + 20) {
      cell.hover = 1;
    }
  }

  image(house, houseX-9, houseY-34, 98, 153);
  
  georgeShow();
  georgeMove();

  drawHotbar();

  //doDrawInterior();
  //interiorsFadeIn();

  //console.log("George X Pos: " + georgeX + " George Y Pos: " + georgeY);
  //console.log("House X Pos: " + houseX + " House Y Pos: " + houseY);
  //console.log("mouse x: " + mouseX + " mouse y: " + mouseY);

  //image(farmland, 0, 0, 1200, 1200);
  //image(wheatFull, 120, -400, 900, 1600);

  //IMPORTANT: WHEAT FULL IS image(wheatFull, farlmandX-3, farmlandY-10, 23, 40);
  //IMPORTANT: SEED IS image(seed, farmlandX, farmlandY, 30, 30);
}

function MS2Lvl1Win() {
  if(gold === 0) {
    rect(0, 0, 1200, 1300);
    textSize(50);
    textFont(noraFields);
    fill(0);
    text("COMPLETED MS2 TUTORIAL LEVEL!", 500, 500);
  }
}

// function interiorsFadeIn() {
//   if (houseInteriorFadeBoolean && houseInteriorFadeAmount < 255) {
//     houseInteriorFadeAmount += 10;
//   } else if (!houseInteriorFadeBoolean && houseInteriorFadeAmount > 0) {
//     houseInteriorFadeAmount -= 10;
//   }
// }

// function fadeOutInterior() {
//   let fadeInterval = setInterval(() => {
//     houseInteriorFadeAmount -= 5;
//     if (houseInteriorFadeAmount <= 0) {
//       clearInterval(fadeInterval);
//       houseInteriorFadeBoolean = false;
//       insideHouse = false;
//       georgeX = houseX + 20;
//       georgeY = houseY + 120;
//       houseInteriorFadeAmount = 4; 
//     }
//   }, 30);
// }

// let insideHouse = false;

// function doDrawInterior() {
// if (!insideHouse && georgeX >= houseX +15 && georgeX <= houseX+40 && georgeY >= houseY+105.5 && georgeY <= houseY+115) {
//     console.log("Entered house");
//     insideHouse = true;
//     houseInteriorFadeBoolean = true;
//   }

//   if (insideHouse) {
//     drawInterior();
//   }
// }

// function drawInterior() {
//   houseInteriorFadeBoolean = true;
//   tint(255, houseInteriorFadeAmount);
//   image(houseInteriors, 0, 0, 1200, 1300);
// }

function incrementDay() {
  day = Math.floor(millis() / 30000);
}

function drawHotbar() {
  image(hotbarImage2, 200, 1150, 800, 100);
}

function controlPanel() {
  noStroke();
  fill('#009DC4');
  rect(0, 0, 1200, 900);11
  //day
  image(infoBoard, 10, 10, 270, 70);
  textFont(noraFields);
  textSize(40)
  fill(0, 0, 0);
  strokeWeight(1);
  text("Day: " + day, 37, 55);
  noStroke();

  // gold
  image(infoBoard, 320, 10, 270, 70);
  textFont(noraFields);
  textSize(40)
  fill(0, 0, 0);
  strokeWeight(1);
  text("Gold: " + gold, 347, 55);
  noStroke();
}

function georgeMove() {
  let index = floor(frame / 10) % 3;
  const moveSpeed = 1.5;
  
  let originalX = georgeX;
  let originalY = georgeY;
  let moved = false;
  
  if (keyIsDown(65)) { //a-left
    georgeType = leftGeorge[index];
    georgeX -= moveSpeed;
    moved = true;
  }
  
  if (keyIsDown(68)) { // d-right
    georgeType = rightGeorge[index];
    georgeX += moveSpeed;
    moved = true;
  }
  
  if (keyIsDown(87)) { // w-up
    georgeType = backGeorge[index];
    georgeY -= moveSpeed;
    moved = true;
  }
  
  if (keyIsDown(83)) { //s-down
    georgeType = frontGeorge[index];
    georgeY += moveSpeed;
    moved = true;
  }

  // if (!insideHouse && moved) {
  //   let gridX = floor((georgeX + 15) / 30); 
  //   let gridY = floor((georgeY + 15 - 90) / 30);

  //   if (!isWalkable(gridX, gridY)) {
  //     georgeX = originalX;
  //     georgeY = originalY;
  //   }
  // }

  // if (insideHouse && georgeX >= 456 && georgeX <= 536 && georgeY >= 860 && georgeY <= 874) {
  //   console.log("Exiting house...");
  //   fadeOutInterior(); 
  // }
  
  if (moved) {
    let gridX = floor((georgeX + 15) / 30); 
    let gridY = floor((georgeY + 15 - 90) / 30);
    
    if (!isWalkable(gridX, gridY)) {
      georgeX = originalX;
      georgeY = originalY;
    }
  }
}

function isWalkable(gridX, gridY) {
  if (gridX < 0 || gridX >= 40 || gridY < 0 || gridY >= 40) {
    return false;
  }
  
  let cellIndex = gridY*40 + gridX;
  
  if (cellIndex < 0 || cellIndex >= cells.length) {
    return false;
  }
  
  let cell = cells[cellIndex];
  if (!cell) {
    return false;
  }
  
  if(cell.type === 1 || cell.type === 2) {
    return true;
  } else {
    return false;
  }

  //NOTE YOU ARE ABLE TO WALK ON PART OF THE ROOF OF THE HOUSE BC ITS NOT COMPLETELY 3X4 AND I DONT FEEL LIKE FIXING IT RN
}

function georgeShow() {
  image(georgeType, georgeX, georgeY, 30, 30);
}

function mouseClicked() {
  for (let i = 0; i < cells.length; i++) {
    if (mouseY < 120) {
      return;
    }

    if (mouseX > cells[i].x && mouseX < cells[i].x + 30 && mouseY > cells[i].y && mouseY < cells[i].y + 30 && gold >= islandprice && cells[i].type === 0) {
      cells[i] = new basicIsland(cells[i].x, cells[i].y);
      gold -= islandprice;
    }
  }
}