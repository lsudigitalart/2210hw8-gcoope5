var img;
var c;
var s = 10;
var k = 700;
var x = 700;
var y = 700;


function setup(){
  img = loadImage("frog.png");
  createCanvas(x,y);
  background(0,10);
  rectMode(CENTER);


}
function draw(){

}

function mouseReleased(){
  background(random(255),random(255),random(255));

  if(x > 0 && y > 0)
  {
    image(img,random(x),random(y));
  }
}
