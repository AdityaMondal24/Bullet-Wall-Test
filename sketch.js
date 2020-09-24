var bullet,wall;
var speed,weight;
var damage;
var thickness;

function setup() 
{
  createCanvas(1600,400);
  
  speed = random(100,200);
  weight = random(30,52);
  thickness = random(50,100);

  
  bullet = createSprite(50,200,50,15);
  bullet.shapeColor = "white";
  wall = createSprite(1300,200,thickness,200);
  wall.shapeColor = (80,80,80);

  bullet.velocityX = speed;
}

function draw() 
{
  background(0,0,0); 
  
  if(isTouching(bullet,wall))
  {
    bullet.velocityX = 0;
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(damage <= 10)
    {
      wall.shapeColor = "green";
    }
    else
    {
      wall.shapeColor = "red";
    }
    
  }
  drawSprites();
}