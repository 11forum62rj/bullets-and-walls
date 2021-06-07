var bullet,wall;
var speed,weight


function setup() {
  createCanvas(1100,400);

   speed = random(223,321);
   weight= random(30,52); 
   thickness = random(22,83);

   bullet = createSprite(50, 200, 50, 5);
   bullet.velocityX = speed;
   bullet.shapeColor="white"

   wall= createSprite(1000,200,thickness,height/2);
   wall.shapeColor = "black"


}

function draw() {
  background(80,80,80);  

  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(deformation> 10 ){
      wall.shapeColor = color(255,0,0)
    }

    if(deformation<10){
      wall.shapeColor=color(0,255,0)
    }
  }

  drawSprites();
}

function hascollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true 
  } 
  else{
    return false
  }

}