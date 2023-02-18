var baseball_field;
var puck, field;
var puck_striker, puck_striker1;

function preload() {
  puckImg = loadImage("puck.png");
  puck_strikerImg = loadImage("hockey-striker-red.png");
  baseball_fieldImg = loadImage("soccer-field.jpg");
  puck_striker1Img = loadImage("hockey-striker-blue.png");
}

function setup() {
  createCanvas(800,400);
  baseball_field = createSprite(400, 200, 50, 50);
  baseball_field.addImage(baseball_fieldImg);
  puck_striker = createSprite(100, 200, 23, 23);
  puck_striker.addImage(puck_strikerImg);
  puck_striker1 = createSprite(700, 200, 23, 23);
  puck_striker1.addImage(puck_striker1Img);
  puck = createSprite(400, 200, 12, 12);
  puck.addImage(puckImg);
}

function draw() {
  background("white");
  puck.scale = 0.1;
  puck_striker.scale = 0.1;
  puck_striker1.scale = 0.1;
  drawSprites();
}