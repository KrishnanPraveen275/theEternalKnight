var knight,a,b
var cross,knightImage,crossImage
var hit, bgImage, a

function preload() {
  knightImage = loadImage('knight.png');
  crossImage = loadImage('cross.png');
  bgImage = loadImage('floor.png');
}

function setup() {
  a = displayWidth-900
  b = displayHeight-250
  createCanvas(a,b);
  cross = createSprite(mouseX,mouseY,20,20);
  cross.addImage(crossImage);
  cross.scale = 0.04;
  knight = createSprite(a/2,b/2,70,110);
  knight.addImage(knightImage);
  knight.setCollider('rectangle',0,10,63,99);
  knight.scale = 0.5;
}

function draw() {
  background(bgImage);
  
  mirror(cross,knight);
  move(knight);
  aim(cross);
  shoot(hit,knight,cross);
  spawn();
  if(hit.collide(a)){
    a.lifetime = 0
    hit.lifetime = 0
 }
  
  drawSprites();
}