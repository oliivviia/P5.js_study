let backgroundColor = 0;

function setup() {
  createCanvas(530, 200);
}

function draw() {
  background(backgroundColor);
  
  stroke(128);
  line(width/2,0,width/2,height);
  
  if(mouseX<width/2){
    backgroundColor=0;
  }else if(mouseX >= width/2){
    backgroundColor=255;
  }
   
}