var personaje
var suelo
var fondo
var lulaimg
var simonaimg
var fondito
var compu
var vidaj=1000;
function preload() {
fondo=loadAnimation("fondo.gif");
lulaimg=loadImage("Lula-img.png")
simonaimg=loadImage("Simona-img.png")
cirilaimg=loadImage("Cirila-img.png")
shatziimg=loadImage("shatzi-img.png")
mayaimg=loadImage("maya-img.png")
}

function setup() {
  createCanvas(800,700);
  fondito=createSprite(400, 350)
  fondito.addAnimation("fondo",fondo)
  fondito.scale=1.3
 personaje=createSprite(400, 200, 50, 80);
 personaje.addImage("lula",lulaimg);
 personaje.debug=false;
 personaje.setCollider("rectangle",0,5,40,60)
 compu=createSprite(300, 400, 50, 80);
 compu.velocityX=5;
 compu.velocityY=1;
 compu.addImage("simona", simonaimg);
 compu.debug=false;
 compu.setCollider("rectangle", 0, 5, 40, 60)
 compu2=createSprite(450, 245, 50, 80)
 compu2.velocityX=1;
 compu2.velocityY=5;
 compu2.addImage("cirila", cirilaimg);
 compu2.debug=false;
 compu3=createSprite(490, 290, 50, 80)
 compu3.setCollider("rectangle", 0, 5, 40, 60)
 compu3.velocityX=-5;
 compu3.velocityY=-1;
 compu3.addImage("shatzi", shatziimg);
 compu3.debug=false;
 compu3.setCollider("rectangle", 0, 5, 40, 60)

 compu4=createSprite(530, 315, 50, 80)
 compu4.setCollider("rectangle", 0, 5, 40, 60)
 compu4.velocityX=-1;
 compu4.velocityY=-5;
 compu4.addImage("maya", mayaimg);
 compu4.debug=false;
 compu4.setCollider("rectangle", 0, 5, 40, 60)
  suelo=createSprite(400, 720, 800, 100)
  cielo=createSprite(400, -30, 800, 100)
  pared1=createSprite(-30, 350, 100, 700)
  pared2=createSprite(820, 350, 100, 700)
  plataforma1=createSprite(400, 300, 100, 10)
  plataforma2=createSprite(200, 300, 100, 10)
}

function draw() {
  background(200);  
  drawSprites();
  textSize(30)
  fill("red")
  text("vida: "+vidaj,50, 50)
  if (keyDown("e")){
    personaje.velocityX=5;
    personaje.velocityY=-5;
  }
  if (keyDown("a")){
    personaje.velocityX=-5;
    personaje.velocityY=0;
  }
  if (keyDown("w")){
    personaje.velocityX=0;
    personaje.velocityY=-5;
  }
  if (keyDown("s")){
    personaje.velocityX=0;
    personaje.velocityY=5;
  }
  if (keyDown("d")){
    personaje.velocityX=5;
    personaje.velocityY=0;
  }
  if (keyDown("q")){
    personaje.velocityX=-5;
    personaje.velocityY=-5;
  }
  if (personaje.isTouching(compu)){
    vidaj=vidaj+1
    console.log(vidaj)
  }
  if (personaje.isTouching(compu2)){
    vidaj=vidaj+1
    console.log(vidaj)
  }
  if (personaje.isTouching(compu3)){
    vidaj=vidaj-2
    console.log(vidaj)
  }
  if (personaje.isTouching(compu4)){
    var valores = [-10, 10, -20, 20, 30]
    vidaj=vidaj+Math.round(random(valores))
    console.log("maya, mayuscula, mayonesa "+vidaj)
  }
  if (vidaj <= 0){
    window.location="perdisteLOL.html";
  }
  personaje.velocityY=personaje.velocityY+0.1
personaje.collide(suelo)
personaje.bounceOff(cielo)
personaje.collide(plataforma1)
personaje.collide(plataforma2)
personaje.bounceOff(pared1)
personaje.bounceOff(pared2)
personaje.collide(compu)
personaje.collide(compu2)
personaje.collide(compu3)
personaje.collide(compu4)
compu.bounceOff(suelo)
compu.bounceOff(cielo)
compu.bounceOff(plataforma1)
compu.bounceOff(plataforma2)
compu.bounceOff(pared1)
compu.bounceOff(pared2)
compu2.bounceOff(suelo)
compu2.bounceOff(cielo)
compu2.bounceOff(plataforma1)
compu2.bounceOff(plataforma2)
compu2.bounceOff(pared1)
compu2.bounceOff(pared2)
compu3.bounceOff(suelo)
compu3.bounceOff(cielo)
compu3.bounceOff(plataforma1)
compu3.bounceOff(plataforma2)
compu3.bounceOff(pared1)
compu3.bounceOff(pared2)
compu4.bounceOff(suelo)
compu4.bounceOff(cielo)
compu4.bounceOff(plataforma1)
compu4.bounceOff(plataforma2)
compu4.bounceOff(pared1)
compu4.bounceOff(pared2)
}