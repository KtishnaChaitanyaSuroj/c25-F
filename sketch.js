const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, paper1, line1, line2, line3



function setup() {
	
canvas = createCanvas(800, 700);
engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = new Ground(width/2,690,width,30);
	 paper1 = new Paper(30,650);
	 line1 = new Ground(width/2,600,180,20)
	line2 = new Dustbin(width/2-70,610,200,120);
	
	

	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  paper1.display();
 
  line2.display();
  
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.position,{x:50,y:-50});
	}
	
}
