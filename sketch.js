const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var box1;

function setup(){
  var canvas=createCanvas(1200,800);

  engine= Engine.create();
  world=engine.world;

  box1= new Box(600,200,50,50)

}
function draw(){
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
   box1.display();
  
}
