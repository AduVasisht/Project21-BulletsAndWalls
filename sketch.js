var bullet,thickness;
var wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);


  bullet = createSprite(200,200,40,40);

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor=rgb(80,80,80);

  bullet.velocityX = speed;

}

function draw() {

  background(255,255,255);  

  if(hasCollided(bullet,wall)){

    bullet.velocityX = 0;
    var damage = speed*speed*weight*0.5/(thickness*thickness*thickness);

      if (damage>10){
        wall.shapeColor = color(255,0,0);
      }

      if (damage<10){
        wall.shapeColor = color(0,255,0);
      }
  }

  bullet.display();
  wall.display();

  drawSprites();
}

function hasCollided(bullet,lwall){

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = lwall.x

  if (bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false;
}