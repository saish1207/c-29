const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var box1,box2;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box (100,600,20,20)
  box2 = new Box (250,600,20,20)
  
  

}

function draw() {
  background(255,255,255);  
  box1.display()
  box2.display()
  drawSprites();
}