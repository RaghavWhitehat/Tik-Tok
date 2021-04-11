var hour;
var second;
var minutes;

function setup() {
  createCanvas(800,400);


  hr=hour();
  mn=minute();
  sc=second();
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function Hour(){
  let h = hour();
text('Current hour:\n' + h, 5, 50);
}

function Minutes(){
  let m = minute();
text('Current minute: \n' + m, 5, 50);
}
 
function Second(){
  let ms= seconds();
text('Current second: \n' + s, 5, 50);
}

function Map(){
  hrAngle=map(hr,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  scAngle=map(sc,0,60,0,360);
}

function Translate(){
 
  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(300,0,0);
  strokeWeight(10);
  line(0,0,100,0);
  pop();

  push();
  rotate(scAngle);
  stroke(345,0,0);
  strokeWeight(13);
  line(0,0,100,0);
  pop();
}

function Arc(){
  arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);

arc(50, 50, 80, 80, 0, PI + QUARTER_PI);
arc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN);
arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);
arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);
}