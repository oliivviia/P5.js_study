let xPos=0;

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  background(255);
  
  fill(0);
  noStroke();
  ellipse(xPos, height/2,40,40);
  
  xPos=constrain((xPos+5)%300,100,300);
  
}