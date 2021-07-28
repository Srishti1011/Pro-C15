var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var pinkB, greenB, blueB, redB, arrowGroup;
var red, green, blue, pink;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5;
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    

  pinkB = new Group();
  greenB = new Group();
  blueB = new Group();
  redB = new Group();
  arrowGroup = new Group();

  arrowGroup.setColliderEach("circle",0,0);
  arrowGroup.debug = true;
  greenB.setColliderEach("circle",0,0);
  greenB.debug = true;
  redB.setColliderEach("circle",0,0);
  redB.debug = true;
  blueB.setColliderEach("circle",0,0);
  blueB.debug = true;
  pinkB.setColliderEach("circle",0,0);
  pinkB.debug = true;
  
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();    
  }
   
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  

  if(arrowGroup.isTouching(redB)){
   redB.destroyEach();
   arrowGroup.destroyEach();
      score = score+1;
  }

  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
      score = score+3;
   }

   if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
      score = score+2;
   }

   if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
      score = score+4;
   }

  drawSprites();

  textSize(20);
  fill("#7FFFD4");
  text("Score: "+ score, 285,50);
}


// Creating  arrows for bow
 function createArrow() {
  arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 150;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}

function redBalloon() {
  red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.2;
  pinkB.add(pink);
}