var bullet,wall;
var speed,weight,thickness;




function setup() {
  createCanvas(1600,400);
 // createSprite(400, 200, 50, 50);

speed= random(223,321)
weight= random(30,52)
thickness = random(22,83)

bullet=createSprite(50,200,50,50)
wall=createSprite(width-300,200,thickness,height/2)



bullet.velocityX= speed




}


function hasCollided(bullet,wall){

bulletRightEdge=bullet.x +bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;




}





function draw() {
  background(255,255,255);  

if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10){

  wall.shapeColor = color(255,0,0)
}
if(damage<10){
  wall.shapeColor=color(0,255,0)
}


}









  drawSprites();
}