var barco,barcoimg;
var mar,marimg;
function preload(){
barcoimg=loadAnimation("ship-1.png","ship-2.png");
marimg=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
mar=createSprite(400,200);
mar.addImage(marimg);
mar.velocityX=-5;
mar.scale=0.3;

barco=createSprite(130,200,30,30);
barco.addAnimation("movimento",marimg);
barco.scale=1;
}

function draw() {
  background("blue");
  mar.velocityX=-3;
    drawSprites();

 
}
