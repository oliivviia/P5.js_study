let smallButton;
let mediumButton;
let largeButton;
let ellipseSize=300;
let oppacityValue=255;

function setup() {
  createCanvas(400, 400);
  smallButton=createButton('small');
  mediumButton=createButton('medium');
  largeButton=createButton('large');
  
  smallButton.position(50,10);
  smallButton.size(100,20);
  mediumButton.position(150,10);
  mediumButton.size(100,20);
  largeButton.position(250,10);
  largeButton.size(100,20);
  
  smallButton.mousePressed(makeSmall);
  mediumButton.mousePressed(makeMedium); 
  largeButton.mousePressed(makeLarge);
}

function draw() {
  background(220);
  noStroke();
  fill(255,0,0,oppacityValue);
  ellipse(width/2,height/2,ellipseSize,ellipseSize);
}

function makeSmall(){
  oppacityValue=0;
}
function makeMedium(){
  oppacityValue=127;
}
function makeLarge(){
  oppacityValue=255;
}