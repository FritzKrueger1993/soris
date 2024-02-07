let img;
let x1;
let y1;
let size1;
let x2;
let y2;
let size2;
let spreadX;
let spreadY;

function preload(){
  img = loadImage('data/img1.png');
}

function setup() {
  createCanvas(windowWidth, windowWidth * 0.3111);
}

function draw() {
  background(0);
  image(img, 0, 0,width,height); 
  if(mouseIsPressed){
    spreadX = width * 0.07;
    spreadY = height * 0.15;
  }
  else{
    spreadX = width * 0.5;
    spreadY = height *0.5;
  }  
  fill(38,123,137);
  noStroke();
  if(frameCount % 3 == 0) {
    x1 = mouseX+random(-spreadX,spreadX);
    y1 = mouseY+random(-spreadY,spreadY);
    size1 = random (10, height *0.4);
    x2 = mouseX+random(-spreadX,spreadX);
    y2 = mouseY+random(-spreadY,spreadY);
    size2 = random (10, height *0.4);
  }
  rect(x1,y1,size1,size1*0.5);
  rect(x2,y2,size2,size2*0.5);
}

function windowResized(){
  resizeCanvas(windowWidth, windowWidth * 0.3111);
}
