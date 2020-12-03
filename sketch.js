var bullet,wall,thickness;
var speed,weight;



function setup() {
  createCanvas(1600,400);
 bullet=createSprite(50, 200, 50, 50);
 bullet.shapeColor="white";

 speed=random(30,52);
 weight=random(223,321);

 thickness=random(22,83);

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);

bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor="red";
    }

    if(damage<10){
      wall.shapeColor="green"
    }
  }
  
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}