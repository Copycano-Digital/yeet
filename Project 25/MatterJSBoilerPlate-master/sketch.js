
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Wall1S;
var Wall2S;
var FloorS;
var paperObject;
var ground;
var bin = createSprite(FloorS.x, FloorS.y - 35, 100, 100);

function preload()
{
	dustBin = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperObject = new Paper(100,100);
	ground = new Ground(400,700,800,100)

	//Create the Bodies Here.
	boxPosition = (width/2) - 100
	boxY = 610


    Wall1S=createSprite(boxPosition, boxY, 20,100);
	 Wall1S.shapeColor=color(255)
	 Wall1B = Bodies.rectangle(boxPosition+20, boxY, 20, 100 , {isStatic:true} );
	 World.add(world, Wall1B);

     Wall2S=createSprite(boxPosition+200, boxY, 20,100);
	 Wall2S.shapeColor=color(255)
	 Wall2B = Bodies.rectangle(boxPosition+200-20, boxY, 20, 100 , {isStatic:true} );
	 World.add(world, Wall2B);
	
     FloorS=createSprite(boxPosition+100, boxY+40, 200,20);
	 FloorS.shapeColor=color(255)
     FloorB = Bodies.rectangle(boxPosition+100, boxY+45-20, 200, 20 , {isStatic:true} );
	 World.add(world, FloorB);

	Engine.run(engine);

	bin = addImage(dustBin);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();


  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}


