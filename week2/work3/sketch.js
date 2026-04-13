let backgroundColor=0;

function setup() {
  createCanvas(530, 200);
}

function draw() {  
  background(backgroundColor);
  
  if(mouseX>0&&mouseX<170){
    noFill();
    stroke(232,62,125);
    strokeWeight(15);
    ellipse(100,100,100,100);
  }else if(mouseX>170&&mouseX<340){
    noFill();
    stroke(232,62,125);
    strokeWeight(15);
    triangle(250,50,190,150,310,150)
  }else if(mouseX>340&&mouseX<530){
    noFill();
    stroke(232,62,125);
    strokeWeight(15);
    rect(370,50,100,100)
  }
}