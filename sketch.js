
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var p1,p2,p3,p4,p5;
var ground;
var r1,r2,r3,r4,r5;
function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200, 20, 400, 20);
	p1 = new Bob(100,100,20);
	p2 = new Bob(140,100,20);
	p3 = new Bob(180,100,20);
	p4 = new Bob(220,100,20);
	p5 = new Bob(260,100,20);
  r1 = new Rope(p1.body, ground.body, -80, 0);
  r2 = new Rope(p2.body, ground.body, -40, 0);
	r3 = new Rope(p3.body, ground.body, 0, 0);
	r4 = new Rope(p4.body, ground.body, 40, 0);
	r5 = new Rope(p5.body, ground.body, 80, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  Engine.update(engine);
  ground.display();
  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();



  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(p1.body,p1.body.position,{x:-40, y:-40})
	}
}