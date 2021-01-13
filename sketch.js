var score=0;
var score2=0;
var edges;
var engine,world;
var padle1,p2,box;
function setup() {
  createCanvas(800,400);
 
padle1=createSprite(790,200,10,50)
padle1.shapeColor="red";
p2=createSprite(10,200,10,50)
p2.shapeColor="red";
box=createSprite(400,200,10,10)
edges=createEdgeSprites()
box.shapeColor="yellow"
box.velocityX=4;
box.velocityY=5;




}

function draw() {
  background(0); 
  console.log(box.x) 
  if(box.x<5){
    score++;
  }
  if(box.x>780){
    score2++
  }
  if(keyDown("s"))
  p2.y=box.y;
  box.bounceOff(edges)
  box.bounceOff(padle1)
  box.bounceOff(p2)
  drawSprites();
  textSize(20);
  fill(255);
  text("Player1:"+score,500,50)
  textSize(20);
  fill(255);
  text("Player2:"+score2,200,50)
  if(keyDown("w")){
p2.y!=box.y
    if(keyDown(UP_ARROW)){
      p2.y=p2.y-3
    }
    if(keyDown(DOWN_ARROW)){
      p2.y=p2.y+3
    }
  } 
}
function mouseDragged(){
  padle1.y=mouseY
}