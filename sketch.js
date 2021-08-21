var garden,rabbit;
var gardenImg,rabbitImg;
var leaf, orangeLeaf, redLeaf;
var leafImg,orangeLeafImg,redLeafImg;
var apple;
var appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leafImg = loadImage("leaf.png");
  orangeleafImg = loadImage("orangeLeaf.png");
  appleImg = loadImage("apple.png");
  redLeafImg = loadImage("redImage.png");



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

  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

var rand = Math.round(random(1,3));
  drawSprites();


  if(frameCount%80 == 0){
    if (rand == 1){
      createApples()
  
    } else if (rand == 2){
      createOrangeLeafs()
  } else{
    createRedLeafs()
  }
 
     
  }
}
function createApples(){
apple = createSprite(random(50,340),40,10,10);
apple.addImage(appleImg);
apple.velocityY = +4;
apple.scale = 0.1;
apple.lifeTime = 20;

}
function createOrangeLeafs(){
  orangeLeaf = createSprite(random(50,340),40,10,10);
  orangeLeaf.addImage(orangeleafImg);
  orangeLeaf.velocityY = +4;
  orangeLeaf.scale = 0.1;
  orangeLeaf.lifeTime = 20;
}
function createRedLeafs(){
  redLeaf = createSprite(random(50,340),40,10,10);
  redLeaf.addImage(redLeafImg);
  redLeaf.velocityY = +4;
  redLeaf.scale = 0.1;
  redLeaf.lifeTime = 20;
}

