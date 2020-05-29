var bullet,bullet2;
var speed,weight,thickness;
function setup() {
createCanvas(1200,400);
speed = random(55,90);
weight = random(400,1500);
thickness = random(22,83);
bullet = createSprite(50,200,25,10);
bullet.velocityX = speed;
bullet.shapeColor="white";
bullet2 = createSprite(1100,200,thickness,height/2);

}

function draw() {
background(0,0,0);  
if(hasCollided(bullet,bullet2)){
  bullet.velocityX = 0;
  var damage=0.5 * weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
bullet2.shapeColor = color(255,0,0);
  }
  if(damage<10){
    bullet2.shapeColor = color(0,255,0);
      }
}
drawSprites();
}

function hasCollided(bullet1,bullet3){
  bulletRightEdge=bullet1.x+bullet1.width;
  bullet3leftEdge = bullet3.x;
  if(bulletRightEdge>=bullet3leftEdge){
  return true;
}else{
  return false;
}
}