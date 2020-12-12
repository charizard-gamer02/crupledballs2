
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var paper,paperimg;
var ground;
var bin1,bin2,bin3,binimg;
function preload()
{
 //binimg=loadImage("dustbingreen.png");
 //paperimg=loadImage("paperball.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,500,140)
//paper.addImage("paper",paperimg)


ground = new Ground(400,690,800,20)


bin1 = new Bin(500,640,20,100)
bin2 = new Bin(620,670,220,20)
//binimg.addImage("bin",binimg)
bin3 = new Bin(740,640,20,100)
	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(255);
  Engine.update(engine);

  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();

  //drawSprites();
  //keyPressed();  
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}
}
//keyPressed();
//function keyPressed(){
//	if(keyCode===UP_ARROW){
//	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
//}
//}
