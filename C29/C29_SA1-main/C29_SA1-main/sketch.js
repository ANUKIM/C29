const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var r1
var fruit
var r_f_link
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  //creating a ground object from class ground
  ground = new Ground(200,680,600,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  r1=new Rope(6,{x:245,y:30})
  var fruit_options={
    density:0.001
  }
  fruit=Bodies.circle(300,300,15,fruit_options) 
  Matter.Composite.add(r1.body,fruit)
  r_f_link=new Link(r1,fruit)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  r1.show()
  ellipse(fruit.position.x,fruit.position.y,15,15)
  
  
  

 
   
}
