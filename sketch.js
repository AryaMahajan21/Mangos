
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeObj, stoneObj,groundObject, Shot;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
  mango2=new mango(1150,120,30);
  mango3=new mango(990,100,30);
  mango4=new mango(1100,160,30);
  mango5=new mango(1100,100,30);
  mango6=new mango(1100,100,30);
  mango7=new mango(1100,100,30);


	stoneObj = new rocks(240,420,50,50)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	Shot = new Slingshot(stoneObj.body,{x: 240, y:420})
	
	Engine.run(engine);

}

function draw() {
Engine.update(engine)
  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display()
  mango3.display()
  mango4.display()
  stoneObj.display()

  groundObject.display();
  Shot.display();

  detectCollision(stoneObj,mango1)
}
function keyPressed(){
  if (keyCode === 32){
      Shot.attach(stoneObj.body)
  }
}


function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    Shot.fly()
}

function detectCollision(lstone,lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if (distance<=lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false)
}
}