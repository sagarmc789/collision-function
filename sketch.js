var fixrect,moverect



function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
 fixrect.debug=true
 fixrect.shapeColor="green"
  moverect=createSprite(600,300,80,30)
  moverect.debug=true
  moverect.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  
  moverect.y=World.mouseY
  moverect.x=World.mouseX
  
  if(moverect.x-fixrect.x<fixrect.width/2+moverect.width/2 && fixrect.x-moverect.x<fixrect.width/2+moverect.width/2 && 
    fixrect.y-moverect.y<fixrect.height/2+moverect.height/2 && moverect.y-fixrect.y<moverect.height/2+fixrect.height/2){

    moverect.shapeColor="red"
    fixrect.shapeColor="red"
  }
  else{

    moverect.shapeColor="green"
    fixrect.shapeColor="green"
  }


  drawSprites();
}