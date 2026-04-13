let xPos=0.0;
let yPos=0.0;
let easing =0.05;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  fill(255);
  noStroke();
  ellipse(xPos,yPos,30,30);
  xPos=xPos+(mouseX-xPos)*easing;
  yPos=yPos+(mouseY-yPos)*easing;
}