var fixedRect , movingRect; 
var gameObject1 , gameObject2 , gameObject3 , gameObject4;

function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "red";
  //fixedRect.velocityX = 4;
  
  movingRect = createSprite(800, 200, 30, 25);
  movingRect.shapeColor = "blue";
  //movingRect.velocityX =  -4;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "orange";
  gameObject1.velocityX = 2;

  gameObject2 = createSprite(700,100,50,50);
  gameObject2.shapeColor = "white";
  gameObject2.velocityX = -2;

  gameObject3 = createSprite(100,300,50,50);
  gameObject3.shapeColor = "brown";

  gameObject4 = createSprite(700,300,50,50);
  gameObject4.shapeColor = "violet";
}

function draw() {
  background("black");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  else if (isTouching(movingRect,gameObject2)){
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }

  else if (isTouching(movingRect,gameObject3)){
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "green";
  }

  else if (isTouching(movingRect,gameObject4)){
    movingRect.shapeColor = "green";
    gameObject4.shapeColor = "green";
  }

  else if (isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  else {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "red";
    gameObject1.shapeColor = "orange";
    gameObject2.shapeColor = "white";
    gameObject3.shapeColor = "brown";
    gameObject4.shapeColor = "violet";
  }

  bounceOff(gameObject1,gameObject2);
  

  drawSprites();
}




