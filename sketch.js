var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = World.mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  var rand = Math.round(random(1,3))
if(frameCount % 80 == 0){
if(rand == 1){
  createApples()
}
else if(rand == 2){
  createLeaves()
}
else{
  createRedLeaves()
}
}
  
}


function createApples() {
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg)
  apple.velocityY = 2
  apple.scale = 0.05
  apple.lifetime = 150
}
  
function createLeaves() {
leaf = createSprite(random(50,350),40,10,10);
leaf.addImage(orangeImg)
leaf.velocityY = 2
leaf.scale = 0.05
leaf.lifetime = 150
}

function createRedLeaves() {
  redLeaf = createSprite(random(50,350),40,10,10);
  redLeaf.addImage(redImg)
  redLeaf.velocityY = 2
  redLeaf.scale = 0.05
  redLeaf.lifetime = 150
}