let gridSize = 50;
let xPos;
let yPos;

function setup() {
  createCanvas(500, 500);
  xPos = width/2;
  yPos = height/2;
}

function draw() {
  background(255);
  stroke(160);
  for(let i = 0; i < width/gridSize; i++){
    line(0, i*gridSize, width, i*gridSize);
  }
  for(let i = 0; i < height/gridSize; i++){
    line(i*gridSize, 0, i*gridSize, height);
  }

  fill(0);
  noStroke();
  ellipse(xPos, yPos, 40, 40);
}

function keyReleased(){
  if (keyCode==UP_ARROW){
    yPos = yPos - gridSize;
  }else if(keyCode==DOWN_ARROW){
    yPos = yPos + gridSize;
  }else if(keyCode==RIGHT_ARROW){
    xPos = xPos + gridSize;
  }else if(keyCode==LEFT_ARROW){
    xPos = xPos - gridSize;
  }
}