var trex,Runing;
var solo,soloImg;
var soloinvisivel;
//preload carrega as midías do jogo 
function preload(){
  soloImg=loadImage("ground2.png");
  Runing=loadAnimation("trex1.png","trex3.png","trex4.png");
}
//setup faz a aconfiguração
function setup(){
  createCanvas(600,200);
  // criando as bordas
  trex=createSprite(50,160,20,50);
  trex.addAnimation("run",Runing);
  trex.scale= 0.5;

  solo=createSprite(300,170,600,2);
  solo.addImage("solo",soloImg);

  soloinvisivel=createSprite(200,190,400,10);  
trex.collide(soloinvisivel); 
soloinvisivel.visible=false;
}
//draw faz o movimento, a ação do jogo
function draw(){
  background("#f0f9f7");
  solo.velocityX=-10;  
  if (solo.x<0) {
    solo.x=solo.width/2; 
  }
  
  if(keyDown("space")&&trex.y>160   ){
    trex.velocityY=-10;
  }
trex.velocityY+=0.5;
trex.collide(soloinvisivel);
   //coordenadas do mouse na tela
  text("X: "+mouseX+"/ Y: "+mouseY,mouseX,mouseY);
  drawSprites();

}
